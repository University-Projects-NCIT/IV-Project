import React from "react";
import { CardUpcommingListInterface } from "../interfaces/Interfaces";
import { msToDayTime } from './utils'
import { useQueryClient} from 'react-query'
import { MdWatchLater } from "react-icons/md";

const UpcomingItemList: React.FC<CardUpcommingListInterface> = ({itemData}) => {

	const queryClient = useQueryClient()

	// const [diff, setDiff] = React.useState(0)
	const [launchingAt, setLaunching] = React.useState("")
	// const [image, setImage] = React.useState("")

	let image = ""


	if (Date.parse(itemData.launch_at)-Date.parse(String(new Date())) < 0)
	{
		queryClient.invalidateQueries("porducts")
		queryClient.invalidateQueries("upcommingProduct")
	}

	if (itemData.product_icon[0] != undefined)
	{
		image = (itemData.product_icon[0].image)
	}

	//TODO fix memory leack here 
	
React.useEffect(() => {
	
	const diff =Date.parse(itemData.launch_at)-Date.parse(String(new Date()))
	const timer = setTimeout(() => {
		setLaunching(msToDayTime(Date.parse(itemData.launch_at)-Date.parse(String(new Date()))))
	}, 1000)
	
	return () => clearTimeout(timer)
})



	return (
		<>
			<div className="bg-color5 p-4">
				<div className="flex justify-between">
					<div className="text-gray-50 space-y-5 ">
						<div>
							<h3 className="text-sm capitalize">{itemData.title}</h3>
							<div>	<p className="text-xs text-white opacity-70 mr-2">{itemData.tagline}</p></div>
						</div>
						<button
							className="outline-none border-none focus:outline-none 
							hover:opacity-70 bg-color6 text-xs
							pl-1 pr-1 text-gray-50 rounded-full"
						>
							Subscribe
						</button>
					</div>

					<div className="h-16 w-16 bg-white rounded-md flex-shrink-0">
						<img
							src={image || "./images/snapchat.png"}
							alt="icon image "
							className="rounded-md h-full w-full object-cover"
						/>
					</div>
				</div>
				<div className="text-color6 flex justify-end text-xs"><div><MdWatchLater className="mr-1 text-base align-middle inline"/><p className="inline align-bottom">{launchingAt || "Remaing Time ..."}</p></div></div>
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
