import React, { useState } from "react";
import { useQuery } from "react-query";
import { ProductInterface } from "../../interfaces/Interfaces";
import { fetchUserByID } from "../../apis/productapi";
import DetailPageButtons from "./DetailPageButtons";
import ImageCarousel from "./ImageCarousel";
import ProductHunter from "./ProductHunter";

const ProductDescription: React.FC<ProductInterface> = ({
	product_images,
	description,
	author,
}: ProductInterface) => {
	let userID;

	if (typeof author !== "undefined") {
		userID = author;
	}

	const fetchUser = useQuery(["user", userID], fetchUserByID);

	if (typeof fetchUser !== "undefined") {
		console.log("fetch user", fetchUser);
	}

	return (
		<div className='mt-8 flex space-y-4 lg:space-y-0 lg:items-start lg:justify-between flex-col lg:flex-row'>
			{/* product description container */}
			<div className='bg-item_list_bg rounded-sm p-6 lg:w-2/3'>
				{/* screenshots of product */}
				<div>
					<ImageCarousel product_images={product_images} />
				</div>

				{/* product description */}
				<div className='mt-5'>
					<p className='text-sm lg:text-base text-gray-300'>{description}</p>
				</div>
			</div>

			{/* right side container */}
			<div className='space-y-7 lg:w-1/4'>
				<DetailPageButtons />
				{typeof fetchUser.data != "undefined" && (
					<ProductHunter {...fetchUser.data} />
				)}
			</div>
		</div>
	);
};

export default ProductDescription;
