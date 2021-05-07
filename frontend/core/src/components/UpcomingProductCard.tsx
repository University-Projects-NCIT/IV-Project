import ProductListItem from "./productListItem";
import UpcomingItemList from "./UpcomingItemList";
import { CardUpcommingInterface } from '../interfaces/Interfaces'
import { v4 as uuidv4 } from 'uuid'
import React from 'react'

const ProductListCard: React.FC<CardUpcommingInterface> = (props) => {
	/**
	 * @returns Upcomming Product list as card
	 */

	const displayEmptyMsg = () => {
		return <React.Fragment>
			<div>
				<img src="./images/empty.svg" className="h-52 w-52 m-auto"></img>
			</div>
		</React.Fragment>
	}

	return (
		<>
			<div className="flex flex-row pb-4 text-white justify-end mb-2">
				<div className="text-lg">Upcoming Product </div>
			</div>
			<div className="rounded-lg mb-8 overflow-hidden bg-color5">

				{props.data != undefined && props.data.length != 0 ?
				props.data.map(productData => {
					return <UpcomingItemList itemData={productData} key={uuidv4()}/>
				}) :
					displayEmptyMsg()
			}

			</div>
		</>
	);
};

export default ProductListCard;
