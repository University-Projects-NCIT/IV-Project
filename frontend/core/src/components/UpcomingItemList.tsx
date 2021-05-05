import React from "react";
import { CardUpcommingListInterface } from "../interfaces/Interfaces";
import { msToDayTime } from './utils'

const UpcomingItemList: React.FC<CardUpcommingListInterface> = ({itemData}) => {

	const date = Date.parse(itemData.launch_at)
	const today = Date.parse(String(new Date()))
	let diff = date - today

	const [launchingAt , setLaunching] = React.useState("")

	//TODO fix memory leack here 
	setTimeout(() => {
		diff = diff - 1000
		setLaunching(msToDayTime(diff))
	},1000)

	return (
		<>
			<div className="bg-color5 p-4">
				<div className="flex justify-between">
					<div className="text-gray-50 space-y-3 ">
						<h3 className="text-sm">{itemData.title}</h3>
						<p className="text-xs text-gray-300">{itemData.tagline}</p>
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
				<div className="text-color6 flex justify-end text-xs">{launchingAt || "Remaing Time ..."}</div>
			</div>
		</>
	);
};

export default UpcomingItemList;
