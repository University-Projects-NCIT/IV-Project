import React, { useState } from "react";
import { CardDataInterface, CardItemDataInterface } from "../interfaces/Interfaces";
import { BsFillTriangleFill } from "react-icons/bs";
import {v4 as uuidv4 } from 'uuid'
import {  useMutation , useQueryClient, useQuery} from "react-query";
import { updateUpvote, addProductUpvote, getProductUpvote, deleteProductUpvote } from '../apis/productapi'
import { connect } from 'react-redux'


const ProductListItem: React.FC<CardItemDataInterface> = ({itemData, isAuthenticated, user} : any) => {
	/**
	 * @returns the each single product list
	 */
	
	const queryClient = useQueryClient()

	const mutateUpvote = useMutation(updateUpvote, {
		onSuccess: () => {
			queryClient.invalidateQueries("product_upvote")
			queryClient.invalidateQueries("search_products")
			queryClient.invalidateQueries("products")
		}
	})

	const mutateProductUpvote = useMutation(addProductUpvote, {
		onSuccess: () => {
			queryClient.invalidateQueries("product_upvote")
			queryClient.invalidateQueries("search_products")
			queryClient.invalidateQueries("products")
		}
	})

	const mutateDelete = useMutation(deleteProductUpvote, {
		onSuccess: () => queryClient.invalidateQueries("product_upvote")
	})

	const [upvotedButton, setUpvotedButton] = useState(false)



	let fetchProductUpvote;
	if (user != null)
	{
		fetchProductUpvote = useQuery(["product_upvote", user.pk, itemData.productID], getProductUpvote)
	}

	let image = ""
	if (typeof itemData.product_icon[0] != "undefined")
	{	
		image = itemData.product_icon[0].image
	}



	const upvoteHandler = (e) => {

		//Stop to go details page even upvote button is click 
		// not actual link is clicked here 
		e.preventDefault()
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();
				
		if (!isAuthenticated)
		{
			alert(" You must login to upvote product ")
			return 
		}

	
		if (typeof fetchProductUpvote.data != "undefined" && fetchProductUpvote.data.length != 0)
		{
				mutateUpvote.mutate({ productId: itemData.productID, field: { upvote: itemData.upvote - 1 } })
				mutateDelete.mutate(fetchProductUpvote.data[0].id)		
		} else if (fetchProductUpvote.data.length == 0)
		{
				mutateUpvote.mutate({ productId: itemData.productID, field: { upvote: itemData.upvote + 1 }})
				mutateProductUpvote.mutate({userID:user.pk, productID: itemData.productID})
		}
		}
	

	React.useEffect(() => {

		if (user == null)
		{
			return;
		}

		if (typeof fetchProductUpvote.data != "undefined")
		{
			if (fetchProductUpvote.data.length != 0 && fetchProductUpvote.data[0].productID == itemData.productID)
			{
				return setUpvotedButton(true)
			} else {
				return setUpvotedButton(false)
			}			
		}
		setUpvotedButton(false)
	}, [fetchProductUpvote])

	const ItemList = (image, title, tagline, categories,upvote) => {
		return (
			<React.Fragment>
			<div className="w-full p-2 bg-item_list_bg text-gray-100 hover:opacity-70 cursor-pointer">
				<div className="flex flex-row items-center">
					<div className="h-full w-20 flex-shrink-0 mr-4 rounded-md overflow-hidden bg-red-5000">
						<img src={image || "./images/snapchat.png"} className="w-full h-full cover image object-cover" alt="product image logo" />
					</div>
					<div className="min-h-0 min-w-0 flex-1 flex flex-col gap-y-1">
						<h4 className="text-sm xs:text-base capitalize">{title}</h4>
						<span className="text-xs xs:text-sm text-white opacity-70">{tagline}</span>
							<div className="min-h-0 min-w-0 flex flex-end justify-items-end">
								<p className="tags mr-2">Tags :</p>
							{categories.map((item) => {
								return (
									<p className="category mr-2 capitalize" key={uuidv4()}>
										{item.name}
									</p>
								);
							})}
						</div>
					</div>
					<div onClick={upvoteHandler} className="z-50 justify-items-end ml-2 h-14 w-14 md:w-16 md:h-16 bg-color7 hover:opacity-70 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
						<div>
							<BsFillTriangleFill className="color-black" />
						</div>
						<div>{upvote}</div>
					</div>
				</div>
				</div>
				
				<div className="line opacity-50"></div>
					<style jsx>
				{`

					.image{
  						object-fit: cover;
							}

					.line {
						width: 100%;
						height: 1px;
						background: linear-gradient(to right, #2f80ed, #98459b, #f1239f);
					}

					.category {
						color: #f39912;
						font-size: .5em;

					}

					.tags{
						font-size: .5em;
					}

					@media only screen and (min-width: 768px) {
								.category{
										font-size: 0.6em;
								}			
					}

				`}
			</style>
			</React.Fragment>
		)
	}

	return (
		<>
			{ItemList(image, itemData.title, itemData.tagline,itemData.categories, itemData.upvote)}
		</>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user
})

export default connect(mapStateToProps, {})(ProductListItem);
// https://iv-project.vercel.app