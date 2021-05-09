import React, { useState } from "react";
import { useQuery } from "react-query";
import ProductComment from "../src/components/product_details/ProductComment";
import ProductDescription from "../src/components/product_details/ProductDescription";
import { fetchProductByID, fetchUserByID } from "../src/productapi";
import { useRouter } from "next/router";

// img(icon)
// title
//tagline
// category

const Details: React.FC = () => {
	const initialValue = {
		title: "Instagram App",
		tagline: "The way to share your photo to the world .",
		category: ["IOS", "Android", "Website"],
		img: "./images/snapchat.png",
	};

	const [data, setData] = useState(initialValue);

	const router = useRouter();
	const { id } = router.query;

	const selectedProduct = useQuery(["selectedProduct", id], fetchProductByID);

	console.log("selected product", selectedProduct.data);

	return (
		// container for the details
		<div className="bg-drak_blue_background h-auto min-h-screen p-8 flex">
			{/* left side container */}
			<div>
				{/* product name with icon */}
				<div className="text-gray-100 flex space-x-5 items-center">
					<div>
						{selectedProduct.data == "undefined" ? null : selectedProduct.data
								.product_icon[0] != "undefined" &&
						  selectedProduct.data.product_icon.length != 0 ? (
							<img
								src={selectedProduct.data.product_icon[0]["image"]}
								alt="icon"
								className="w-20 h-20"
							/>
						) : null}
					</div>

					<div className="space-y-1">
						<h1 className="">{selectedProduct.data.title}</h1>
						<p className="text-sm text-gray-300">
							{selectedProduct.data.tagline}
						</p>
						<div className="flex space-x-3 text-xs ">
							{selectedProduct.data.categories.map(({ name }) => (
								<div className="cursor-pointer border-gray-300 border px-2 py-1">
									{name}
								</div>
							))}
						</div>
					</div>
				</div>

				{typeof selectedProduct != "undefined" && (
					<ProductDescription {...selectedProduct.data} />
				)}

				{/* Comment component */}
				<div className="mt-8 text-white ">
					<h3 className="uppercase text-xs py-5">Comment</h3>
					<ProductComment />
				</div>
			</div>
		</div>
	);
};

export default Details;
