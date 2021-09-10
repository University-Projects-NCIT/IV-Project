import React from "react";

const DetailPageButtons: React.FC = () => {
	return (
		<div className='text-white flex justify-between '>
			<button
				className='bg-white hover:bg-gray-200 hover:text-gray-900 text-black 
      text-xs lg:text-sm px-7 py-2  lg:py-4 font-medium focus:outline-none rounded'
			>
				GET IT
			</button>
			<button
				className='bg-red-900 hover:bg-red-800 text-xs lg:text-sm px-16 py-3 lg:py-4 
      font-medium focus:outline-none rounded'
			>
				UPVOTE
			</button>
		</div>
	);
};

export default DetailPageButtons;
