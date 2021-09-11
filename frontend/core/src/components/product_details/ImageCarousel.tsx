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
			{/* product images */}
			<div className=' flex flex-row items-center overflow-hidden'>
					<div className='flex-none sm:w-32 z-10 cursor-pointer'
					onClick={previousImage}
					>
						<FaArrowAltCircleLeft size={40} color="white"/>
					</div>
				<div className='flex-grow rounded-md m-4 sm:m-8 h-80'>
					<img src={imgUrl} className='active rounded-md h-full w-full object-cover text-center' />
				</div>

					<div
					className='flex-none sm:p-0 sm:w-32 z-10 cursor-pointer flex justify-end justify-items-end'
					onClick={nextImage}
					>
					<div><FaArrowAltCircleRight  size={40} color="white" className=""/></div>
				</div>
			</div>

			<div className=' h-14 mt-6 overflow-hidden w-full flex flex-row items-center'>
				{data.map((img, i) => {
					return (
						<div key={i}>
							<img
								src={img.image}
								className='w-28 cursor-pointer'
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
