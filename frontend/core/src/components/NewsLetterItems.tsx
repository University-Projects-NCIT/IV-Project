import React, { useState } from "react";
import {AdviceApiInterface} from '../interfaces/Interfaces'



const NewsLetterItems: React.FC<AdviceApiInterface> = ({ data } : any) => {
	
	// const initialValues = {
	// 	value: "We are launching the new IOS app",
	// 	date: "23-4-2021",
	// };

	// interface NewsInterface {
	// 	value: string;
	// 	date: string;
	// }

	// const [data, setData] = useState<NewsInterface>(initialValues);

	return (
		<div className="bg-color5 text-white text-center pl-4 pr-4 pt-8 pb-10 min-h-full">
			<div className="text-yellow-400 text-xl font-serif">{data.slip.advice}</div>
			{/* <div className="mt-2">{data.date}</div> */}
		</div>
	);
};

export default NewsLetterItems;
