import React from "react";
import { ProductInterface } from "../interfaces/Interfaces";

const UpcomingItemList: React.FC<ProductInterface[]> = (data) => {

	const initialvalues = {
		title: "Snapchat Android app",
		tagline:
			"The way to share your photo to the world The way to share your photo to the world .",
		category: ["IOS", "Android", "Wesite"],
	};

	return (
		<>
			<div className="bg-color5 p-4">
				<div className="flex justify-between">
					<div className="text-gray-50 space-y-3 ">
						<h3 className="text-sm">{initialvalues.title}</h3>
						<p className="text-xs text-gray-300">{initialvalues.tagline}</p>
						<button
							className="outline-none border-none focus:outline-none 
							hover:opacity-70 bg-color6 text-xs
							pl-1 pr-1 mb-2 text-gray-50 rounded-full"
						>
							Subscribe
						</button>
					</div>

					<div className="pl-4">
						<img
							src="./images/snapchat.png"
							alt=""
							width="60"
							height="60"
							className="rounded-md"
						/>
					</div>
				</div>
				<div className="text-gray-50 flex justify-end text-xs">20-3-2021 </div>
			</div>
		</>
	);
};

export default UpcomingItemList;
