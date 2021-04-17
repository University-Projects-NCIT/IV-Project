import React, { useState } from "react";
import ProductComment from "../src/components/product_details/ProductComment";
import ProductDescription from "../src/components/product_details/ProductDescription";

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

	return (
		// container for the details
		<div className="bg-drak_blue_background h-auto min-h-screen p-8 flex">
			{/* left side container */}
			<div>
          {/* product name with icon */}
			<div className="text-gray-100 flex space-x-5 items-center">
				<div>
					<img src={data.img} alt="icon" className="w-20 h-20" />
				</div>

				<div className="space-y-1">
					<h1 className="">{data.title}</h1>
					<p className="text-sm text-gray-300">{data.tagline}</p>
					<div className="flex space-x-3 text-xs ">
						{data.category.map((item) => (
							<div className="cursor-pointer border-gray-300 border px-2 py-1">
								{item}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* product description with screenshot */}
			<ProductDescription />

			{/* Product discussion component */}
			{/* <div className="text-gray-100 mt-8">
				<h1 className="uppercase text-xs py-6">Discussion</h1>
				<ProductDiscussion />
			</div> */}

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
