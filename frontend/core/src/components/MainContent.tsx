import React from "react";
import ProductListCard from "./ProductListCard";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import Search from "./Search";
import UpcomingProductCard from "./UpcomingProductCard";
import NewsLetterCard from "./NewsLetterCard";

const MainContent: React.FC = () => {
	/**
	 * MainContent is the second main component
	 * It holds all the other component rendering in Home
	 * displays the product list and card etc.
	 */

	return (
		<>
			<div className="h-auto w-full rounded-t-lg -mt-4 bg-drak_blue_background z-10">
				<div className="w-16 h-16 rounded-full m-auto relative -mt-8 mb-4">
					<div className="profile-image-back w-16 h-16 rounded-full absolute"></div>
					<div className="absolute cursor-pointer">
						<img
							src="./images/michaeljackson.jpg"
							className="w-16 h-16 rounded-full"
						/>
					</div>
				</div>
				<IconContext.Provider value={{ color: "#ffffff", size: "1.5rem" }}>
					<div>
						<div className="flex flex-row w-32 m-auto justify-center">
							<div className="w-6 h-6 -mt-3 realtive cursor-pointer">
								<div className="option-btn w-6 h-6 rounded-full absolute"></div>
								<div className="icon-btn rounded-full w-6 h-6 absolute bg-blue_secondary">
									<FiMoreHorizontal />
								</div>
							</div>
							<div className="w-6 h-6 m-2 realtive cursor-pointer">
								<div className="option-btn w-6 h-6 rounded-full absolute"></div>
								<div className="icon-btn rounded-full w-6 h-6 absolute bg-blue_secondary">
									<MdAdd />
								</div>
							</div>
							<IconContext.Provider
								value={{ color: "#F39912", size: "1.3rem" }}
							>
								<div className="w-6 h-6 -mt-3 realtive cursor-pointer">
									<div className="option-btn w-6 h-6 rounded-full absolute"></div>
									<div className="icon-btn rounded-full w-6 h-6 absolute bg-blue_secondary">
										<IoMdNotifications className="m-auto" />
									</div>
								</div>
							</IconContext.Provider>
						</div>
						<div className="ml-16 md:-mt-8 mr-16">
							<Search />
						</div>
					</div>
				</IconContext.Provider>

				<div className="w-screen flex flex-row mt-8">
					<div className="left-container h-auto flex flex-col md:pl-32 pr-4 pl-4">
						<div className="flex flex-row text-white justify-end -mb-4">
							<button className="pl-2 pr-2 pt-1 btn bg-color4 opacity-60 hover:opacity-70">
								Popular
							</button>
							<div className="line"></div>
							<button className="pl-2 pr-2 pt-1 btn bg-color4 opacity-60 hover:opacity-70">
								Newest
							</button>
						</div>
						<ProductListCard />
						<ProductListCard />
						<ProductListCard />
					</div>
					<div className="right-container h-auto pt-1 mr-4 lg:mr-40">
						<UpcomingProductCard />
						<NewsLetterCard />
					</div>
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

					.btn {
						border: none;
						outline: none;
					}

					.line {
						width: 3px;
						height: 100%;
						background: linear-gradient(#2f80ed, #ec1616);
					}

					.left-container {
						width: 100%;
					}

					.right-container {
						display: none;
					}

					@media only screen and (min-width: 768px) {
						.left-container {
							width: 65%;
						}

						.right-container {
							width: 35%;
							display: block;
						}
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
