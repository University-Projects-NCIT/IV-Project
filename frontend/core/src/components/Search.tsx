import React from "react";
import BiSearchAlt from "react-icons/bi";
import { VscSearch } from "react-icons/vsc";

interface propsInterface {
	search: (key: string ) => void;
}

const Search: React.FC<propsInterface> = (props) => {

	const [inputData, setInput] = React.useState("")

	const onChange = (e) => {
		setInput(e.target.value)
		props.search(inputData)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (inputData == "") return;
		props.search(inputData)
		setInput("")
	}
	return (
		<>
			<div>
				<form onSubmit={onSubmit} className="w-full flex flex-row">
					<input
					type="text"
						className="input w-full md:w-2/5 bg-item_list_bg rounded-md border-none"
						value={inputData}
						onChange={onChange}
				></input>
				<VscSearch className="-ml-7 mt-1" onClick={onSubmit}/>
				</form>
			</div>

			<style jsx>
				{`
					.input {
						color: #ffffff;
						padding: 0.2rem;
						padding-left: 1rem;
						-webkit-transition: box-shadow 0.3s;
						transition: box-shadow 0.3s;
					}
					.input:focus {
						outline-offset: 0px;
						outline: none;
						box-shadow: 1px 0.3px 9px 0.1px #111e6c;
					}
				`}
			</style>
		</>
	);
};

export default Search;
