import React, { useState } from "react";
import DetailPageButtons from "./DetailPageButtons";
import ImageGallery from "./ImageGallery";
import ProductHunter from "./ProductHunter";

const ProductDescription: React.FC = () => {
	const initialValue = {
		title: "Instagram App",
		tagline: "The way to share your photo to the world .",
		category: ["IOS", "Android", "Website"],
		img: "./images/snapchat.png",
	};

	const [data, setData] = useState(initialValue);

	return (
		<div className="mt-8 flex items-start">
			{/* product description container */}
			<div className="bg-item_list_bg rounded-sm p-6 w-3/5">
							{/* screenshots of product */}
			<div>
				<img src={data.img} alt="" width="" />
				{/* image gallery */}
				<div className="flex space-x-1 py-4  border border-l-0 border-r-0 border-gray-500">
					<ImageGallery />
					<ImageGallery />
					<ImageGallery />
				</div>
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
				<ProductHunter/>
			</div>
			

		</div>
	);
};

export default ProductDescription;
