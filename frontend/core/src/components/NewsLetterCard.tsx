import NewsLetterItems from "./NewsLetterItems";
import React from 'react'
import { fetchQuote } from "../apis/adviceslipapi";
import { useQuery } from 'react-query'


const NewsLetterCard: React.FC = () => {


	/**
	 * @returns  Notice News Latter List  as card
	 */

	const { data, error, isLoading } = useQuery("fetchQuoteAdvice", fetchQuote, {
		onError: (err) => console.log("here error ", err)
	})
	

	const displayEmptyMsg = () => {
		return <React.Fragment>
			<div>
				<img src="./images/empty.svg" className="h-52 w-52 m-auto"></img>
			</div>
		</React.Fragment>
	}



	return (
		<>
			<div className="flex flex-row pb-2 mt-2 text-white justify-end">
				<div className="text-lg"> Your News Letter </div>
			</div>
			<div className="rounded-lg mb-4 overflow-hidden w-full h-auto bg-color5 opacity-70 text-white pt-4 pl-4 pr-4 ">
				{
					data == null ? displayEmptyMsg() :
						isLoading ? (<div className="w-full h-full bg-color5 animate-pulse"></div>):
						<NewsLetterItems data={data}/>
				}
			</div>
		</>
	);
};

export default NewsLetterCard;
