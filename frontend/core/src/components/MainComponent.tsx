import React from "react";
import MainContent from "./MainContent";

const MainComponent: React.FC = () => {


	return (
		<>
			<div className="w-full h-auto bg-white-500 flex flex-col">
				<div className="w-full h-32 sm:h-60">
					<div className="header w-full h-32 sm:h-60 fixed z-0">
						<img src="./images/startup.jpg" className="object-cover w-full h-full"></img>
					</div>
				</div>
					<MainContent />
			</div>

			<style jsx>
				{`
					// .header {
					// 	background-image: url("./images/startup.jpg");
					// 	background-size: cover;
					// 	background-repeat: no-repeat;
					// 	background-position:center;
					// }

					.main-container {
					}
				`}
			</style>
		</>
	);
};

export default MainComponent;
