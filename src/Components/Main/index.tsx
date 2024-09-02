import React from "react";

import ProfileCard from "../../UI/ProfileCard";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import { FiEdit2 } from "react-icons/fi";

const Main = () => {
	return (
		<div className="main w-full h-full">
			<div className="relative w-full bg-blue-800 h-40">
				<div
					className="absolute right-5 -top-3 bg-white  p-2 rounded-full  flex justify-center items-center  mt-10"
					style={{ color: "#8314ff", fontSize: "0.8rem" }}
				>
					<FiEdit2 />
				</div>
			</div>
			<div className="flex-col lg:flex lg:flex-row h-full bg-white px-7 lg:px-0 ">
				<MainLeft />
				<MainRight />
			</div>
		</div>
	);
};

export default Main;
