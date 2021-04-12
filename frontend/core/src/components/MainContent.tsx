import React from "react";
import ProductListCard from "./ProductListCard";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IconContext } from "react-icons/lib";

const MainContent: React.FC = () => {
	/**
	 * MainContent is the second main component
	 * It holds all the other component rendering in Home
	 * displays the product list and card etc.
	 */

	return (
		<>
			<div className="h-auto rounded-t-xl -mt-4 bg-drak_blue_background">
				<div className="w-16 h-16 m-auto -mt-8 relative mb-4">
					<div className="profile-image-back w-16 h-16 rounded-full absolute"></div>
					<div className="absolute">
						<img
							src="./images/michaeljackson.jpg"
							className="w-16 h-16 rounded-full"
						/>
					</div>
				</div>
				<IconContext.Provider value={{ color: "#ffffff", size: "1.5rem" }}>
					<div className="flex flex-row justify-items-center justify-center mt-2">
						<div className="w-6 h-6 -mt-3 relative">
							<div className="option-btn w-6 h-6 rounded-full absolute"></div>
							<div className="icon-btn rounded-full w-6 h-6 absolute bg-blue_secondary">
								<FiMoreHorizontal className="" />
							</div>
						</div>
						<div className="w-6 h-6 m-2 relative">
							<div className="option-btn w-6 h-6 rounded-full absolute"></div>
							<div className="icon-btn rounded-full w-6 h-6 absolute bg-blue_secondary">
								<MdAdd />
							</div>
						</div>
						<IconContext.Provider value={{ color: "#F39912", size: "1.3rem" }}>
							<div className="w-6 h-6 -mt-3 relative">
								<div className="option-btn w-6 h-6 rounded-full absolute"></div>
								<div className="icon-btn rounded-full w-6 h-6 absolute bg-blue_secondary">
									<IoMdNotifications className="m-auto" />
								</div>
							</div>
						</IconContext.Provider>
					</div>
				</IconContext.Provider>

				<div className="flex flex-row">
					<div className="h-auto w-3/4">
						<ProductListCard />
					</div>
					<div className="w-full h-auto bg-blue-700"></div>
				</div>
			</div>

			<style jsx>
				{`
					.profile-image-back {
						background: conic-gradient(
							from 180deg at 50% 50%,
							#f1239f 0deg,
							#00fc19 46.06deg,
							#ec1616 85.46deg,
							#2f80ed 147.09deg,
							#f39912 198.08deg,
							#cd0666 245.92deg,
							#11d2fc 304.76deg,
							#f1239f 360deg
						);
						filter: blur(5px);
						-webkit-animation: spin 4s linear infinite;
						-moz-animation: spin 4s linear infinite;
						animation: spin 4s linear infinite;
					}

					.option-btn {
						background: conic-gradient(
							from 180deg at 50% 50%,
							#f1239f 0deg,
							#00fc19 46.06deg,
							#ec1616 85.46deg,
							#2f80ed 147.09deg,
							#f39912 198.08deg,
							#cd0666 245.92deg,
							#11d2fc 304.76deg,
							#f1239f 360deg
						);
						filter: blur(2px);
					}

					.icon-btn:hover + .option-btn {
						-webkit-animation: spin 4s linear infinite;
						-moz-animation: spin 4s linear infinite;
						animation: spin 4s linear infinite;
					}

					// Animation for 360 rotation background
					@-moz-keyframes spin {
						100% {
							-moz-transform: rotate(360deg);
						}
					}
					@-webkit-keyframes spin {
						100% {
							-webkit-transform: rotate(360deg);
						}
					}
					@keyframes spin {
						100% {
							-webkit-transform: rotate(360deg);
							transform: rotate(360deg);
						}
					}
				`}
			</style>
		</>
	);
};

export default MainContent;
