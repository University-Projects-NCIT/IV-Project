import React, {useEffect} from "react";
import { CardUpcommingListInterface } from "../interfaces/Interfaces";
import { msToDayTime } from './utils'
import { useQueryClient} from 'react-query'

const UpcomingItemList: React.FC<CardUpcommingListInterface> = ({itemData}) => {

	const date = Date.parse(itemData.launch_at)
	const today = Date.parse(String(new Date()))
	const queryClient = useQueryClient()

	// const [diff, setDiff] = React.useState(0)
	const [launchingAt, setLaunching] = React.useState("")
	// const [image, setImage] = React.useState("")

	let image = ""
	let diff=0

	diff = date - today

	if (diff < 0)
	{
		queryClient.invalidateQueries("porducts")
		queryClient.invalidateQueries("upcommingProduct")
	}

	if (itemData.product_icon[0] != undefined)
	{
		image = (itemData.product_icon[0].image)
	}

	//TODO fix memory leack here 
	// setTimeout(() => {
	// 	setLaunching(countRef.current)
	// },1000)


	window.setInterval(() => {
		diff -= 1000;
		setLaunching(msToDayTime(diff))

	}, 1000)
	


	return (
		<>
			<div className="bg-color5 p-4">
				<div className="flex justify-between">
					<div className="text-gray-50 space-y-5 ">
						<div>
							<h3 className="text-sm ">{itemData.title}</h3>
						<p className="text-xs text-gray-400 ">{itemData.tagline}</p>
							</div>
						<button
							className="outline-none border-none focus:outline-none 
							hover:opacity-70 bg-color6 text-xs
							pl-1 pr-1 text-gray-50 rounded-full"
						>
							Subscribe
						</button>
					</div>

					<div className="h-16 w-16 bg-gray-400 rounded-md">
						<img
							src={image || "./images/snapchat.png"}
							// src="./images/snapchat.png"
							alt="icon image "
							className="rounded-md h-full w-full object-cover"
						/>
					</div>
				</div>
				<div className="text-color6 flex justify-end text-xs">{launchingAt || "Remaing Time ..."}</div>
			</div>
			{/* <style jsx>
				{`
				 .image {
					object-fit: cover;
				 }
				`}
			</style> */}
		</>
	);
};

export default UpcomingItemList;
