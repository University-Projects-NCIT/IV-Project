import React, { useState } from "react";

const ProductComment: React.FC = () => {
	const cols = 10;
	const rows = 8;

	const value = [
		{
			userName: "Grishmin",
			comment:
				"Great stuff! I'll make sure to share with clients who struggle and get lost in the process. Super helpful.",
			avatar: "./images/michaeljackson.jpg",
			id: 1,
		},
		{
			userName: "Grish",
			comment:
				"It's insane! I like it and build my landing pages with this cool Checklist. ",
			avatar: "./images/michaeljackson.jpg",
			id: 2,
		},
	];

	const [comments, setComments] = useState(value);

	
	return (
		<>
			<div className="bg-item_list_bg rounded-sm p-6 w-3/5">
				{/* textarea */}
				<div>
					<textarea
						cols={cols}
						rows={rows}
						className="bg-drak_blue_background w-full rounded-md p-2 
					 text-sm border border-gray-600 focus:ring-2  focus:ring-blue-600 
					 focus:outline-none focus:border-transparent"
						placeholder="Leave a comment"
					></textarea>
					<div className="flex justify-end mt-2">
						<button
							className="bg-buttonGreen px-5 py-2 text-sm rounded-md 
						focus:outline-none focus:border-transparent"
						>
							Comment
						</button>
					</div>
				</div>

				{/* comments */}
				<div>
					{comments.map((comment) => {
						return (
							<div key={comment.id} className="flex mb-3 space-x-3">
								<div className="w-10">
									<img
										src={comment.avatar}
										alt="avatar"
										className="rounded-full"
									/>
								</div>

								<div className="space-y-3 text-sm">
									<h4 className="font-semibold">{comment.userName}</h4>
									<p>{comment.comment}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* <style jsx>
				{`
					.btn-bg-green {
						background-color: rgba(34, 132, 53, 0.6);
					}
				`}
			</style> */}
		</>
	);
};

export default ProductComment;
