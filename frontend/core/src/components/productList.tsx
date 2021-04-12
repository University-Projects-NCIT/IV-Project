import React, { useState } from "react";

const ProductList = (props) => {
	const initialValue = {
		title: "Instagram App",
		tagline: "The way to share your photo to the world .",
		category: ["IOS", "Android", "Wesite"],
	};
	const [data, setData] = useState(initialValue);
	return (
		<>
			<div className=" w-full font-sans bg-primary text-gray-100 font-bold">
				<div className="flex ">
					<div className="w-16 h-16">
						<img src="../images/snapchat.png" />
					</div>
					<div>
						<h4 className="mt-1">{data.title}</h4>
						<p className="text-xs mt-1 text-gray-300">{data.tagline}</p>
						<div className="flex flex-start mt-2">
							{data.category.map((item) => {
								return (
									<p className="category m-1 uppercase" key={item}>
										{item}
									</p>
								);
							})}
						</div>
					</div>
				</div>
				<div className="line"></div>
			</div>

			<style jsx>
				{`
					.container {
					}

					.line {
						width: 100%;
						height: 2px;
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

const ProductListCard = () => {
	return (
		<div className="bg-red-500 rounded-lg  container md:m-auto md:mt-7 overflow-hidden m-auto">
			<ProductList />
			<ProductList />
			<ProductList />
			<ProductList />
		</div>
	);
};

export default ProductListCard;

//colors
// EC1616
// EC1616
// F1239F
// 2F80ED
// 98459B
// 113366
// 00FC19
// F39912
