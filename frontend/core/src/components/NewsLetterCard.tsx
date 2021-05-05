import NewsLetterItems from "./NewsLetterItems";
import React from 'react'

const NewsLetterCard: React.FC = () => {
	/**
	 * @returns  Notice News Latter List  as card
	 */
	const [newsData, setNewsData] = React.useState(null)

	const displayEmptyMsg = () => {
		return <React.Fragment>
			<div> Your News are empty !</div>
		</React.Fragment>
	}

	return (
		<>
			<div className="flex flex-row pb-4 text-white justify-end">
				<div className="text-lg"> Your News Letter </div>
			</div>
			<div className="rounded-lg mb-4 overflow-hidden w-full h-auto bg-color5 opacity-70 text-white pt-4 pl-4 pr-4 ">
				{
					newsData == null ? displayEmptyMsg() : <NewsLetterItems/>	
				}
			</div>
		</>
	);
};

export default NewsLetterCard;
