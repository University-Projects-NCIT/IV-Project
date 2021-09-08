import ProductListItem from "./productListItem";
import UpcomingItemList from "./UpcomingItemList";
import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import { useQuery } from 'react-query'
import { fecthUpcommingProducts} from '../productapi'

const ProductListCard: React.FC = () => {
	/**
	 * @returns Upcomming Product list as card
	 */

	const {data, error , isLoading, isFetching, isError} = useQuery("upcommingProduct", fecthUpcommingProducts)

	const displayEmptyMsg = () => {
		return <React.Fragment>
			<div>
				<img src="./images/empty.svg" className="h-52 w-52 m-auto"></img>
			</div>
		</React.Fragment>
	}

	 const LoadingPage = () => {
		return (
			<React.Fragment>
				<div className="w-full h-52 rounded-md flex-row bg-item_list_bg justify-items-center items-center animate-pulse">
				</div>
			</React.Fragment>
		)
  }

	return (
		<>
			<div className="flex flex-row md:pb-2 text-white justify-end pb-2 ">
				<div className="text-lg">Upcoming Launch </div>
			</div>
			<div className="rounded-lg mb-8 overflow-hidden bg-color5">
				{
					isLoading ?  LoadingPage():	
					data != undefined && data.length != 0 ?
					data.map(productData => {
					return <UpcomingItemList itemData={productData} key={uuidv4()}/>
				}) : displayEmptyMsg()
				}

			</div>
		</>
	);
};

export default ProductListCard;
