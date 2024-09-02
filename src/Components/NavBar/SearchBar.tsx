import React from "react";
import { BiSearch } from "react-icons/bi";
import IconCard from "../../UI/IconCard";

const SearchBar = () => {
	return (
		<div className="flex items-center gap-2 lg:mr-5 border-2 border-slate-300 ">
			{/* <IconCard icon={<BiSearch />} /> */}
			<BiSearch
				style={{ fontSize: "3rem", paddingLeft: "1rem", opacity: "0.5" }}
			/>
			<span className="text-black/40 text-3xl">|</span>
			<input
				type="text"
				placeholder="Search"
				className="h-full px-5 rounded-md shadow-sm  w-3/4 lg:w-full"
			/>
		</div>
	);
};

export default SearchBar;
