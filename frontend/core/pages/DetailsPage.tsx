import React, { useState } from "react";
import { useQuery } from "react-query";
import ProductComment from "../src/components/product_details/ProductComment";
import ProductDescription from "../src/components/product_details/ProductDescription";
import { fetchProductByID, fetchUserByID } from "../src/apis/productapi";
import { useRouter } from "next/router";

const Details: React.FC = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data, error, isError, isFetching, isLoading } = useQuery(
		["selectProduct", id],
		fetchProductByID
	);


	return (
		// container for the details
		<div className='bg-drak_blue_background p-4 sm:p-8'>
			{data ? (
				<div className='w-full'>
					<div className='text-gray-100 flex space-x-5 items-center'>
						<div className="flex-shrink-0">
							{
							data.product_icon !== "undefined" &&
							data.product_icon.length !== 0 ? (
								<img
									src={data.product_icon[0]["image"] || "./images/snapchat.png"}
									alt='icon'
									className='w-20 h-20 object-cover items-center'
								/>
							) : null}
						</div>

						<div className='space-y-1'>
							<h1 className='text-base'>{data.title}</h1>
							<p className='text-sm text-gray-300'>{data.tagline}</p>
							<div className='flex space-x-3 text-xs '>
								{typeof data.categories !== "undefined"
									? data.categories.map(({ name }) => (
											<div className='cursor-pointer border-gray-300 border px-2 py-1'>
												{name}
											</div>
									  ))
									: null}
							</div>
						</div>
					</div>

					<ProductDescription {...data} />

					{/* Comment component */}
					<div className='mt-8 text-white '>
						<h3 className='uppercase text-xs py-5'>Comment</h3>
							<ProductComment key={data.productID} id={String(id)}/>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Details;
