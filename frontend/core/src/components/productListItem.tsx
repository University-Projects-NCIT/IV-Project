import React, { useState } from "react";
import { CardDataInterface, CardItemDataInterface } from "../interfaces/Interfaces";
import { BsFillTriangleFill } from "react-icons/bs";
import {v4 as uuidv4 } from 'uuid'
import {  useMutation , useQueryClient, useQuery} from "react-query";
import { updateUpvote, addProductUpvote, getProductUpvote, deleteProductUpvote } from '../productapi'
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
			<div className="w-full pb-4 bg-item_list_bg text-gray-100 flex flex-col hover:opacity-70 cursor-pointer">
				<div className="flex">
					<div className="w-20 h-20 mt-2 ml-4 mr-4 rounded-md overflow-hidden bg-red-5000 flex-shrink-0">
						<img src={image || "./images/snapchat.png"} className="w-full h-full cover image object-cover" alt="product image logo" />
					</div>
					<div className="">
						<h4 className="mt-1">{title}</h4>
						<p className="text-sm mt-1 text-gray-400">{tagline}</p>
						<div className="flex flex-start mt-2">
							{categories.map((item) => {
								return (
									<div className="category m-1 uppercase" key={uuidv4()}>
										{item.name}
									</div>
								);
							})}
						</div>
					</div>
					<div onClick={upvoteHandler} className={upvotedButton ?"w-14 h-14 mt-4 opacity-60 bg-color7 ml-auto hover:opacity-70 mr-4 rounded-lg flex flex-col items-center justify-center z-50 flex-shrink-0" : "z-50 mt-4 w-14 h-14 bg-color7 ml-auto hover:opacity-70 mr-4 rounded-lg flex flex-col items-center justify-center flex-shrink-0"}>
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
						font-size: 0.5em;
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