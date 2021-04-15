import React, { useState } from "react";

const ImageGallery: React.FC = () => {
	const initialValue = {
		title: "Instagram App",
		tagline: "The way to share your photo to the world .",
		category: ["IOS", "Android", "Website"],
		img: "./images/snapchat.png",
	};

	const [data, setData] = useState(initialValue);
	return (
		<div>
			<div className="w-10 cursor-pointer">
				<img src={data.img} alt="" />
			</div>
		</div>
	);
};

export default ImageGallery;
