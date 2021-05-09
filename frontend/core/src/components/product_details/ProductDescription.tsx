import React, { useState } from "react";
import { useQuery } from "react-query";
import { ProductInterface } from "../../interfaces/Interfaces";
import { fetchUserByID } from "../../productapi";
import DetailPageButtons from "./DetailPageButtons";
import ImageCarousel from "./ImageCarousel";
import ProductHunter from "./ProductHunter";

const ProductDescription: React.FC<ProductInterface> = (props) => {
	// const initialValue = {
	// 	title: "Instagram App",
	// 	tagline: "The way to share your photo to the world .",
	// 	category: ["IOS", "Android", "Website"],
	// 	img: "./images/snapchat.png",
	// };
	let { product_images, description } = props;

	let userID;

	if (typeof props != "undefined") {
		userID = props.author;
	}

	const fetchUser = useQuery(["user", userID], fetchUserByID);

	console.log("fetch user", fetchUser.data);

	return (
		<div className="mt-8 flex items-start">
			{/* product description container */}
			<div className="bg-item_list_bg rounded-sm p-6 w-3/5">
				{/* screenshots of product */}
				<div>
					{/* {typeof product_images != "undefined"
						? product_images.map(({ image }) => {
								return <ImageCarousel image={image} />;
						  })
						: null} */}
				</div>

			{/* product description */}
			<div className="mt-5">
				<p className="text-sm text-gray-300">
					Hi I’ Yucel from my very first product Landing Page Checklist. tools
					in 16 categories to help you to build your best landing pages. Landing
					Page Checklist is a curation website that provides over 100+ Please
					let me know if you have any questions.
				</p>
			</div>
			</div>

			{/* right side container */}
			<div className=" w-auto ml-10 space-y-7">
				<DetailPageButtons />
				{typeof fetchUser.data != "undefined" && (
					<ProductHunter {...fetchUser.data} />
				)}
			</div>
		
		</div>
	);
};

export default ProductDescription;
