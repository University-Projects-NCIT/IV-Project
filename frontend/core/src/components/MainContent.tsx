import React, { useState} from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import Search from "./Search";
import UpcomingProductCard from "./UpcomingProductCard";
import NewsLetterCard from "./NewsLetterCard";
import { useToggle } from "../hooks/Toggle";
import AuthForm from "./authentications/Auth";
import { useRouter } from "next/router";
import { ToggleContext } from "../Contexts/ToggleContext";
import { connect } from "react-redux";
import DisplayProductList from "./DisplayProductList";
import SearchedResults from "./SearchedResults";
import DisplayProfile from "./DisplayProfile";
import { useQuery } from "react-query";
import { getProfileImage } from "../apis/productapi";

const MainContent: React.FC = React.memo(
	({ user, isAuthenticated }: any): JSX.Element => {
		/**
		 * MainContent is the second main component
		 * It holds all the other component rendering in Home
		 * displays the product list and card etc.
		 */

		//Pop us when click to profile image if loged in is false
		const [loginForm, toggle] = useToggle(false);
		const [searchKey, setSeachKey] = useState("");
		const [isDisplayProductList, setIsDisplayProductList] = useState(true);
		const [isDisplayProfile, setIsDisplayProfile] = useState(false);
		const [isDisplaySearchedResults, setIsDisplaySeachedResults] = useState(false);
		const router = useRouter();
		let userid;

		if (user != null && typeof user.pk != "undefined")
		{
			userid = user.pk
		}

		
		// if (user != null && typeof userid != "undefined")
		// {
		const profileImageQuery = useQuery(["getProfileImage", userid ], getProfileImage, {
				onError: (err) => console.log(err),
				refetchOnWindowFocus: false,
				
			});
		// }
	

		const search = (key) => {
			setSeachKey(key);
			setIsDisplaySeachedResults(true);
			setIsDisplayProductList(false);
			setIsDisplayProfile(false);
		};

		const displayProfile = () => {
			if (isDisplayProfile) {
				setIsDisplayProfile(false);
			} else {
				setIsDisplayProfile(true);
			}
			setIsDisplayProductList(false);
			setIsDisplaySeachedResults(false);
		};

		return (
			<>
				{loginForm && !isAuthenticated ? (
					<ToggleContext.Provider value={toggle}>
						<AuthForm />
					</ToggleContext.Provider>
				) : null}

				<div className="h-auto m-auto w-full rounded-t-lg -mt-4 bg-drak_blue_background z-10">
					<div className="w-16 h-16 rounded-full m-auto relative -mt-8 mb-4">
						<div className="profile-image-back w-16 h-16 rounded-full absolute"></div>
						<div
							className="absolute cursor-pointer"
							onClick={user == null ? () => toggle() : () => displayProfile()}
						>
							<img
								src={user != null && typeof profileImageQuery.data != "undefined" ? 
									profileImageQuery.data[0].imageUrl :
									"images/cryptopunk8550.png"
							}
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
									<div
										onClick={() => router.push("/post/")}
										className="icon-btn rounded-full w-6 h-6 absolute bg-blue_secondary">
										<MdAdd />
									</div>
								</div>
								<IconContext.Provider
									value={{ color: "#F39912"}}
								>
									<div className="w-6 h-6 -mt-3 realtive cursor-pointer">
										<div className="option-btn w-6 h-6 rounded-full absolute"></div>
										<div className="icon-btn rounded-full w-6 h-6 absolute bg-blue_secondary">
											<IoMdNotifications className="m-auto text-2xl" />
										</div>
									</div>
								</IconContext.Provider>
							</div>
							<div className="ml-4 mr-4 mt-2 md:ml-4 md:-mt-8 md:mr-16">
								<Search search={search} />
							</div>
						</div>
					</IconContext.Provider>

					<div className="w-full flex md:flex-row flex-col-reverse mt-8">
						<div className="left-container h-auto flex flex-col md:pl-32 pr-4 pl-4">
							{isDisplayProfile ? (
								<DisplayProfile />
							) : isDisplaySearchedResults ? (
								<SearchedResults search_key={searchKey} />
							) : (
								<DisplayProductList />
							)}
						</div>
						<div className="right-container h-auto pt-1 mr-4 ml-4 lg:mr-40">
							<div>
								<UpcomingProductCard />
							</div>
							<div className="newscard mb-8 md:">
								<NewsLetterCard />
							</div>
						</div>
					</div>
				</div>

				<style jsx>
					{`

						.newscard{
							display : none;
						}

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
							filter: blur(4px);
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

						.left-container {
							width: 100%;
						}
						.right-container {
							display: block;
						}

						@media only screen and (min-width: 768px) {
							.left-container {
								width: 65%;
							}
							.right-container {
								width: 35%;
								display: block;
							}

							.newscard{
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
	}
);

const mapStateToProps = (state) => ({
	user: state.auth.user,
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(MainContent);
