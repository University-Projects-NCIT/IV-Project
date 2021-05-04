import ProductListItem from "./productListItem";
import Link from 'next/link'
import { CardDataInterface } from '../interfaces/Interfaces'
import {v4 as uuidv4} from 'uuid'



const ProductListCard: React.FC<CardDataInterface> = (props) => {
	/**
	 * @returns Product list as card with grouping the same date
	 * for eg: Product are grouping with Today, yesterday card
	 * Each card should be different date card
	 */

	// const data = [{ title: "App" }, { title: "android" },
	// { title: "Ios" }, { title: "Ios" }]

	console.log(props.data)


	return (
		<>
			<div className="flex flex-row pb-4 text-white justify-between">
				<div className="text-lg">Today's Product</div>
				
			</div>
			<div className="rounded mb-10 overflow-hidden w-full h-auto">
				{
					props.data.map(itemData => {

						return (
						// 	<Link href={{
						// 	pathname: "/LoginForm",
						// 	query: { title : itemData.title },
						// }}>
						//</Link>
							<ProductListItem itemData={itemData} key={uuidv4()}/>
						)
					})
				}
			</div>

		</>
	);
};

export default ProductListCard;
