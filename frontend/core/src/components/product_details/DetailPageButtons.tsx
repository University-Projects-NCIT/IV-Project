import React from "react";

const DetailPageButtons: React.FC = () => {
	return (
		<div className="text-white space-x-5 ">
			<button
				className="bg-white hover:bg-gray-200 hover:text-gray-900 text-black 
      text-sm px-7 py-4 font-medium focus:outline-none rounded"
			>
				GET IT
			</button>
			<button
				className="bg-red-900 hover:bg-red-800 text-sm px-20 py-4 
      font-medium focus:outline-none rounded"
			>
				UPVOTE
			</button>
		</div>
	);
};

export default DetailPageButtons;
