import ProductListItem from "./productListItem";
import Link from 'next/link'

const ProductListCard: React.FC = () => {
	/**
	 * @returns Product list as card with grouping the same date
	 * for eg: Product are grouping with Today, yesterday card
	 * Each card should be different date card
	 */

	const data = [{ title: "App" }, { title: "android" },
	{ title: "Ios" }, { title: "Ios" }]

	return (
		<>
			<div className="flex flex-row pb-4 text-white justify-between">
				<div className="text-lg">Today's Product</div>
				
			</div>
			<div className="rounded mb-10 overflow-hidden w-full h-auto">
				{
					data.map(item => {
						return (<Link href={{
							pathname: "/LoginForm",
							query: { title : item.title },
						}}>
							<ProductListItem/>
						</Link>)
					})
				}
			</div>

		</>
	);
};

export default ProductListCard;
