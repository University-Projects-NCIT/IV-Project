import React, { useState } from "react";
import { UserInterface } from "../../interfaces/Interfaces";

const ProductHunter: React.FC<UserInterface> = (props) => {
	return (
		<>
			<div className="bg-item_list_bg text-white text-sm p-4 rounded-sm">
				<div>
					<h3 className="text-xs">MAKERS</h3>
				</div>

				<div>
					<div className="flex py-3 space-x-3">
						<div
							className="img w-14 h-14 rounded-full"
							style={{
								backgroundImage: `url() `,
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center center",
								backgroundSize: "cover",
							}}
						></div>

						<div className="">
							<h1 className="text-sm font-semibold hover:text-gray-300 cursor-pointer">
								{props.first_name + " " + props.last_name}
							</h1>
						</div>
					</div>
				</div>
			</div>

			{/* <style jsx>
				{`
					.img {
						background-image: url({props.profile_image});
					}
				`}
			</style> */}
		</>
	);
};

export default ProductHunter;
