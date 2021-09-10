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
		<div className='mt-8 flex items-start'>
			{/* product description container */}
			<div className='bg-item_list_bg rounded-sm p-6'>
				{/* screenshots of product */}
				<div>
					{/* {typeof product_images != "undefined"
						? product_images.map(({ image }) => {
								return <ImageCarousel image={image} />;
						  })
						: null} */}
					<ImageCarousel product_images={product_images} />
				</div>

				{/* product description */}
				<div className='mt-5'>
					<p className='text-sm text-gray-300'>{description}</p>
				</div>
			</div>

			{/* right side container */}
			<div className=' w-auto ml-10 space-y-7'>
				<DetailPageButtons />
				{typeof fetchUser.data != "undefined" && (
					<ProductHunter {...fetchUser.data} />
				)}
			</div>
		</div>
	);
};

export default ProductDescription;
