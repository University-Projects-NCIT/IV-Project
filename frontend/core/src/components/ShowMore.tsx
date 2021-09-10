import React from "react";
import { IoMdLogIn } from "react-icons/io";
import { useContext } from "react";
import { ToggleContext } from "../Contexts/ToggleContext";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const ShowMore: React.FC = () => {
	const context = useContext(ToggleContext);
	const toggle: any = context;

	return (
		<>
			<div className='w-full h-auto p-2 sm:w-1/2 md:w-10/12 m-auto pt-4 text-white'>
				<IoMdLogIn
					onClick={() => toggle()}
					size={50}
					color={"white"}
					className='m-auto cursor-pointer'
				/>
				<p className='m-auto text-white opacity-70 text-center text-xl'>
					Sign in
				</p>
			</div>

			<div>
				<h1 className='text-gray-50 pl-4 mb-2'> Developers </h1>
				<div className='text-white text-sm pl-8 mb-2'>
					<div className='inline'>
						Jeevan Rupacha
						<Link href='/jeevantwitter'>
							<a target='blank'>
								<AiFillTwitterCircle
									size={18}
									className='ml-2 inline cursor-pointer'
								/>{" "}
							</a>
						</Link>
						<Link href='/jeevangithub'>
							<a target='blank'>
								<AiFillGithub
									size={18}
									className='ml-2 inline cursor-pointer'
								/>{" "}
							</a>
						</Link>
					</div>
				</div>

				<div className='text-white text-sm pl-8 mb-2'>
					<div className='inline'>
						Grishmin Karki
						<Link href='/grishmintwitter'>
							<a target='blank'>
								<AiFillTwitterCircle
									size={18}
									className='ml-2 inline cursor-pointer'
								/>{" "}
							</a>
						</Link>
						<Link href='/grishmingithub'>
							<a target='blank'>
								<AiFillGithub
									size={18}
									className='ml-2 inline cursor-pointer'
								/>{" "}
							</a>
						</Link>
					</div>
				</div>

				<div className='text-white text-sm pl-8 pb-8'>
					<div>
						Nishant Adhikari
						<a>
							<AiFillTwitterCircle size={18} className='ml-2 inline' />{" "}
						</a>
						<a>
							<AiFillGithub size={18} className='inline' />{" "}
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShowMore;
