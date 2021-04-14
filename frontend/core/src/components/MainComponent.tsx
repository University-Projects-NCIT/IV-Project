import React from "react";
import MainContent from "./MainContent";

const MainComponent: React.FC = () => {
	return (
		<>
			<div className="h-auto bg-white-500 flex flex-col overflow-x-hidden">
				<div className="w-full h-60">
					<div className="header w-full h-60 fixed z-0"></div>
				</div>
				<MainContent />
			</div>

			<style jsx>
				{`
					.header {
						background-image: url("./images/startup.jpg");
						background-size: cover;
						background-repeat: no-repeat;
						background-position: center;
					}

					.main-container {
					}
				`}
			</style>
		</>
	);
};

export default MainComponent;
