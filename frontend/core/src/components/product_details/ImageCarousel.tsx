import React, { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { ProductImagesProps } from "../../interfaces/Interfaces";

const ImageCarousel: React.FC<ProductImagesProps> = ({
	product_images,
}: ProductImagesProps) => {
	let defaultData = [
		{
			image: "./images/default_image.png",
		},
	];

	const [data, setdata] = useState(defaultData);
	const [current, setCurrent] = useState(0);
	const [imgUrl, setImgUrl] = useState(data[current].image);

	const nextImage = () => {
		const index = (current + 1) % data.length;
		setCurrent(index);
		setImgUrl(data[index].image);
	};

	const previousImage = () => {
		const index = current == 0 ? data.length - 1 : (current - 1) % data.length;
		console.log("prev " + index);
		setCurrent(index);
		setImgUrl(data[index].image);
	};

	useEffect(() => {
		// Checking if api response if giving not
		// Empty data or not , sets default if empty
		if (product_images.length !== 0) {
			setdata(product_images);

			// Display the first image to image board
			setImgUrl(product_images[0].image);
		}
	}, []);

	return (
		<>
			<div className='w-full flex space-between items-center'>
				<div className='text-3xl z-10 cursor-pointer' onClick={previousImage}>
					<FaArrowAltCircleLeft />
				</div>
				<div className='w-full h-96 p-16  overflow-hidden flex items-center'>
					<img src={imgUrl} width='100%;' className='active' />
				</div>

				<div className='text-3xl z-10 cursor-pointer' onClick={nextImage}>
					<FaArrowAltCircleRight />
				</div>
			</div>
			<div className=' h-14 mt-6 overflow-hidden w-full flex flex-row items-center'>
				{data.map((img, i) => {
					return (
						<div key={i}>
							<img
								src={img.image}
								className='w-28'
								onClick={() => setImgUrl(img.image)}
							></img>
						</div>
					);
				})}
			</div>

			<style jsx>
				{`
					.slide {
						opacity: 0;
						transition-duration: 1s ease;
					}

					.active {
						opacity: 1;
						transition-duration: 1s;
						transform: scale(1.08);
					}
				`}
			</style>
		</>
	);
};

export default ImageCarousel;
