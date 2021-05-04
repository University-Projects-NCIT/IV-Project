import React, { useState } from "react";
import { CardDataInterface, CardItemDataInterface } from "../interfaces/Interfaces";
import { BsFillTriangleFill } from "react-icons/bs";

const ProductListItem: React.FC<CardItemDataInterface> = ({itemData}) => {
	/**
	 * @returns the each single product list
	 */




	const [upvote, setUpvote] = useState(0);

	const [data, setData] = useState<CardItemDataInterface>(null);
	return (
		<>
			<div className="w-full bg-item_list_bg text-gray-100 flex flex-col hover:opacity-70 cursor-pointer">
				<div className="flex pt-4 pb-4">
					<div className="w-20 h-20 mt-2 ml-4 mr-4 rounded-md overflow-hidden">
						<img src="./images/snapchat.png" alt="product image logo" />
					</div>
					<div className="">
						<h4 className="mt-1">{itemData.title}</h4>
						<p className="text-xs mt-1 text-gray-300">{itemData.tagline}</p>
						<div className="flex flex-start mt-2">
							{itemData.category.map((item) => {
								return (
									<p className="category m-1 uppercase" key={item}>
										{item}
									</p>
								);
							})}
						</div>
					</div>
					<div className="w-16 h-16 bg-color7 ml-auto hover:opacity-70 mr-4 rounded-lg flex flex-col items-center justify-center">
						<div>
							<BsFillTriangleFill className="color-black" />
						</div>
						<div>{upvote}</div>
					</div>
				</div>
				<div className="line"></div>
			</div>

			<style jsx>
				{`
					.line {
						width: 100%;
						height: 0.5px;
						background: linear-gradient(to right, #2f80ed, #98459b, #f1239f);
					}

					.category {
						color: #f39912;
						font-size: 0.5em;
					}
				`}
			</style>
		</>
	);
};

export default ProductListItem;
