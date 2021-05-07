import ProductListItem from "./productListItem";
import Link from 'next/link'
import { CardDataInterface } from '../interfaces/Interfaces'
import { v4 as uuidv4 } from 'uuid'
import React from 'react'



const ProductListCard: React.FC<CardDataInterface> = (props) => {
	/**
	 * @returns Product list as card with grouping the same date
	 * for eg: Product are grouping with Today, yesterday card
	 * Each card should be different date card
	 */

	const convertDate = (date) =>
	{
		const cardDate = date.toDateString()

		if (String(date).substring(0,10) == String(new Date()).substring(0,10))
		{
			return "Today's Product ";
		}

		if (String(date -1).substring(0,10) == String(new Date()).substring(0,10))
		{
			return "Yesterday's Product ";
		}

		return cardDate;
	}

	const convertedDate = convertDate(new Date(props.data[0].created_at))

	return (
		<>
			<div className="flex flex-row pb-4 text-white justify-between">
				<div className="text-lg">{convertedDate}</div>
				
			</div>
			<div className="rounded mb-10 overflow-hidden w-full h-auto">
				{
					props.data.map(itemData => {

						return (
							<Link key={uuidv4()} href={{
								pathname: "/DetailsPage/",
								query: {productID: itemData.productID}
							}}>
							<a><ProductListItem itemData={itemData} key={uuidv4()}/></a>
						</Link>
						)
					})
				}
			</div>

		</>
	);
};

export default ProductListCard;
