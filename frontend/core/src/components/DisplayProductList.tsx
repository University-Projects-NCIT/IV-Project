import React from "react";
import { useInfiniteQuery } from "react-query";
import { fecthProducts } from "../apis/productapi";
import { NEWEST, POPULAR } from "../constraints";
import { groupByDate } from "./utils";
import { useOnScreen } from "../hooks/useOnScreen";
import { v4 as uuidv4 } from "uuid";
import ProductListCard from "./ProductListCard";

const displayProductList: React.FC = () => {
	const [productOrderBy, setProductOrderBy] = React.useState(NEWEST);
	const ref = React.useRef(null)
	const [setRef, isIntersecting] = useOnScreen({
		root: null,
		rootMargin: "0px",
		threshold: 1.0,
	},ref);
	let productData = [];
	let launchedData;

	const {
		data,
		error,
		isLoading,
		isError,
		isFetching,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
	} = useInfiniteQuery(["products", productOrderBy], fecthProducts, {
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.next) {
				const array = lastPage.next?.split("=");
				const offset = array[array.length - 1];
				return offset ?? false;
			}
			return false;
		},
		refetchOnWindowFocus: false,
	});

	if (isError || error) {
		console.log(error);
		// return <h1>Error occurs </h1>;
	}

	if (typeof data != "undefined") {
		if (typeof data.pages != "undefined") {
			data.pages.map((page) => {
				productData = [...productData, ...page.results];
			});
		}
	}

	if (isIntersecting && hasNextPage) {
		console.log("Intersection apears .....")
		fetchNextPage();
	}

	if (typeof productData != "undefined" && productData.length != 0) {
		if (Array.isArray(productData)) {
			launchedData = groupByDate(productData);
		}
	}

	const LoadingPage = () => {
		return (
			<React.Fragment key={uuidv4()}>
				<div className="w-full h-28 mt-4 rounded-md flex-row bg-item_list_bg justify-items-center items-center animate-pulse"></div>
			</React.Fragment>
		);
	};

	return (
		<>
			<div className="flex flex-row text-white align-middle justify-end -mb-4">
				<button
					className="pl-2 pr-2 pt-1 btn bg-color4 opacity-60 hover:opacity-70"
					onClick={() => setProductOrderBy(POPULAR)}
				>
					Popular
				</button>
				<div className="line"></div>
				<button
					className="pl-2 pr-2 pt-1 btn bg-color4 opacity-60 hover:opacity-70"
					onClick={() => setProductOrderBy(NEWEST)}
				>
					Newest
				</button>
			</div>
			{isLoading ? (
				<div className="mt-8">{[1, 2, 3, 4].map((i) => LoadingPage())}</div>
			) : typeof data == "undefined" ? (
				<div className="animate-spin w-full h-full"></div>
			) : typeof launchedData != "undefined" ? (
				launchedData.map((cardData) => {
					return (
						<ProductListCard
							data={cardData}
							displayDate={true}
							key={uuidv4()}
						/>
					);
				})
			) : null}

			{/* Detects intersection points  */}
			{hasNextPage ? (
				<div className="h-24 w-full mb-4" ref={ref}>
					{isFetchingNextPage ? (
						<div className="animate-pulse rounded-sm w-full h-full bg-item_list_bg mb-12"></div>
					) : null}
				</div>
			) : (
				<div>
					<h1 className="text-gray-300 text-center text-lg mb-8">End of list</h1>
				</div>
			)}

			<style jsx>{`
				.btn {
					border: none;
					outline: none;
				}

				.line {
					width: 3px;
					height: auto;
					background: linear-gradient(#2f80ed, #ec1616);
				}
			`}</style>
		</>
	);
};

export default displayProductList;
