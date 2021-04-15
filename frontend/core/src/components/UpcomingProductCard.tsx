import ProductListItem from "./productListItem";
import UpcomingItemList from "./UpcomingItemList";

const ProductListCard: React.FC = () => {
	/**
	 * @returns Upcomming Product list as card
	 */

	return (
		<>
			<div className="flex flex-row pb-4 text-white justify-end mb-2">
				<div className="text-lg">Upcoming Product </div>
			</div>
			<div className="rounded-lg mb-8 overflow-hidden ">
				<UpcomingItemList />
				<UpcomingItemList />
				<UpcomingItemList />
			</div>
		</>
	);
};

export default ProductListCard;
