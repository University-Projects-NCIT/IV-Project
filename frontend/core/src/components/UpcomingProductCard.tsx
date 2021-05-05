import ProductListItem from "./productListItem";
import UpcomingItemList from "./UpcomingItemList";
import { CardUpcommingInterface } from '../interfaces/Interfaces'
import {v4 as uuidv4} from 'uuid'

const ProductListCard: React.FC<CardUpcommingInterface> = (props) => {
	/**
	 * @returns Upcomming Product list as card
	 */

	if (props.data == undefined)
	{
		return <h1>Empty upcomming data </h1> 
	}

	return (
		<>
			<div className="flex flex-row pb-4 text-white justify-end mb-2">
				<div className="text-lg">Upcoming Product </div>
			</div>
			<div className="rounded-lg mb-8 overflow-hidden ">
				{
					props.data.map(productData => {
					return <UpcomingItemList itemData={productData} key={uuidv4()}/>
				})
				}

			</div>
		</>
	);
};

export default ProductListCard;
