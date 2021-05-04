import ProductListItem from "./productListItem";
import UpcomingItemList from "./UpcomingItemList";
import { ProductInterface } from '../interfaces/Interfaces'

const ProductListCard: React.FC<ProductInterface[]> = (data) => {
	/**
	 * @returns Upcomming Product list as card
	 */

// 	console.log(data + " from upcmmong card ")
// 	data.map(d => {
// 	console.log(d)
// })

	return (
		<>
			<div className="flex flex-row pb-4 text-white justify-end mb-2">
				<div className="text-lg">Upcoming Product </div>
			</div>
			<div className="rounded-lg mb-8 overflow-hidden ">
				{
				// 	data.map(productData => {
				// 	return <UpcomingItemList data={productData}/>
				// })
				}

			</div>
		</>
	);
};

export default ProductListCard;
