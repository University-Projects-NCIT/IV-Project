import React from "react";
import { ProductInterface } from "../interfaces/Interfaces";

const UpcomingItemList: React.FC = () => {
	const initialValue = {
		title: "Snapchat Android app",
		tagline:
			"The way to share your photo to the world The way to share your photo to the world .",
		category: ["IOS", "Android", "Wesite"],
	};

	return (
		<>
			<div className="bg-color5 p-4">
				<div className="flex space-x-4">
					<div className="text-gray-50 space-y-3">
						<h3 className="text-sm">{initialValue.title}</h3>
						<p className="text-xs">{initialValue.tagline}</p>
						<button
							className="outline-none border-none focus:outline-none 
							hover:opacity-70 bg-color6 text-xs
							pl-1 pr-1 mb-2 text-gray-50 rounded-full"
						 >
							Subscribe
						</button>
					</div>

					<div >
						<img src="./images/snapchat.png" alt="" width="60" height="60" className="rounded-md"/>
					</div>
				</div>
			</div>
		</>
	);
};

export default UpcomingItemList;
