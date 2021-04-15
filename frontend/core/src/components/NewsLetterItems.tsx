import React, { useState } from "react";

const NewsLetterItems: React.FC = () => {
	const initialValues = {
		value: "We are launching the new IOS app",
		date: "23-4-2021",
	};

	interface NewsInterface {
		value: string;
		date: string;
	}

	const [data, setData] = useState<NewsInterface>(initialValues);

	return (
		<div className="bg-color5 opacity-70 text-white pt-4 pl-4 pr-4 ">
			<div className="">{data.value}</div>
			<div className="mt-2">{data.date}</div>
		</div>
	);
};

export default NewsLetterItems;
