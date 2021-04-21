import NewsLetterItems from "./NewsLetterItems";

const NewsLetterCard: React.FC = () => {
	/**
	 * @returns  Notice News Latter List  as card
	 */

	return (
		<>
			<div className="flex flex-row pb-4 text-white justify-end">
				<div className="text-lg"> Your News Letter </div>
			</div>
			<div className="rounded-lg mb-4 overflow-hidden w-full h-auto">
				<NewsLetterItems />
				<NewsLetterItems />
				<NewsLetterItems />
			</div>
		</>
	);
};

export default NewsLetterCard;
