import React from "react";
import MainContent from "./MainContent";

const MainComponent: React.FC = () => {


	return (
		<>
			<div className="w-full h-auto bg-white-500 flex flex-col">
				
				<div className="w-full h-32 sm:h-60">
					
					<div className="header w-full h-32 sm:h-60 fixed z-0 pr-16">
						<div className="logo-div h-10 sm:h-20 fixed">
					<img src="./images/logo1.png" className="h-full w-full cursor-pointer"></img>
				</div>
						{/* <img src="./images/startup/Start_up.jpg" className="image object-cover w-full h-full align-middle"></img> */}
					</div>
				</div>
					<MainContent />
			</div>

			<style jsx>
				{`
					.header {
						background-image: url("./images/banner7.png");
						background-size: cover;
						background-repeat: no-repeat;
						background-position:center;
					}

					.main-container {
					}

					.image{
						filter : blur(0px);
					}

					.logo-div{
						position: absolute;
						top :0px;
						left: 0px;
						z-index: 20;
					}
				`}
			</style>
		</>
	);
};

export default MainComponent;
