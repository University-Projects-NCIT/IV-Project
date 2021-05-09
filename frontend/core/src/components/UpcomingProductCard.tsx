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

	const UpcommingProductFetch = useQuery("upcommingProduct", fecthUpcommingProducts)

	const displayEmptyMsg = () => {
		return <React.Fragment>
			<div>
				<img src="./images/empty.svg" className="h-52 w-52 m-auto"></img>
			</div>
		</React.Fragment>
	}

	const displayLoadingMsg = () => {
		return <React.Fragment>
			<div>
				<div className="h-52 w-52 m-auto bg-color5 animate-pulse"></div>
			</div>
		</React.Fragment>
	}

	return (
		<>
			<div className="flex flex-row pb-4 text-white justify-end mb-2">
				<div className="text-lg">Upcomming Launch </div>
			</div>
			<div className="rounded-lg mb-8 overflow-hidden bg-color5">

				{
					UpcommingProductFetch.data != undefined && UpcommingProductFetch.data.length != 0 ?
					UpcommingProductFetch.data.map(productData => {
					return <UpcomingItemList itemData={productData} key={uuidv4()}/>
				}) :
						displayEmptyMsg()
							? UpcommingProductFetch.isLoading || UpcommingProductFetch.isLoading :
						displayLoadingMsg()	
				}

			</div>
		</>
	);
};

export default ProductListCard;
