import React from "react";
import { AiOutlineDropbox } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";

const LinksBox = () => {
	return (
		<div className=" relative bottom-5 w-full bg-gray-100 px-3 py-2 flex justify-center gap-3">
			<AiOutlineDropbox style={{ fontSize: "2rem", color: "#8314ff" }} />
			<BsSpotify style={{ fontSize: "2rem", color: "#6cca71" }} />
			<AiOutlineDropbox style={{ fontSize: "2rem", color: "#8314ff" }} />
		</div>
	);
};

export default LinksBox;
