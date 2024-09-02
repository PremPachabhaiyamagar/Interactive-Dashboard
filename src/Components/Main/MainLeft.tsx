import React from "react";
import ProfileCard from "../../UI/ProfileCard";
import Toggler from "../../UI/Toogler";
import { AiFillPlusCircle } from "react-icons/ai";
import LinksBox from "./LinksBox";
import WheelChart from "../../UI/Chart";

import Loader from "../../UI/LoadingBar";
let info = [1, 2, 3];
const chartData = [10, 5, 5, 20, 20, 5, 10, 15];
const chartLabels = ["Label 1", "Label 2", "Label 3", "Label 4"];
const MainLeft = () => {
	return (
		<div className="py-3 w-full lg:w-1/4 h-full bg-white">
			<ProfileCard />
			<div className="relative bottom-10 flex gap-1 items-start">
				<div>
					<h2 className="text-md font-extrabold">
						Make my profile visible to employers
					</h2>
					<p className="text-sm mt-1 opacity-80">
						Make my profile visible to other employees
					</p>
				</div>
				<Toggler />
				{/* <div className="w-10 h-5 bg-blue-700"></div> */}
			</div>
			<div className="mt-10 relative bottom-10 flex gap-1 items-start justify-between">
				<div>
					<h2 className="text-md font-extrabold">Other Links</h2>
					<p className="text-sm mt-1 opacity-80">
						Lorem ipsum dolor sit amet, consectetur adig elit. Provident
						blanditiis modi aperiam
					</p>
				</div>
				{/* <div className="w-6 h-6 rounded-full bg-blue-700 absolute right-1">
					<AiFillPlusCircle />
				</div> */}
				<AiFillPlusCircle style={{ fontSize: "3rem", color: "#8314ff" }} />
			</div>
			<LinksBox />
			<div className="w-full height-60  mx-auto bg-[#eee4ff] px-5 mt-5 flex flex-col items-center mb-2 border-2 border-slate-300 rounded-md shadow-sm">
				<h2 className="">wheel of Opportunities</h2>
				<WheelChart data={chartData} labels={chartLabels} />
			</div>
			<div className="w-2/3 mt-10  ">
				<h2 className="mb-3">Your Ranking</h2>
				<Loader progress={80} />
				<p className="mt-2 lg:mt-0">
					Hurray !You are in top{"  "}
					<span className="text-lg text-purple-700 font-bold text-center mt-5 w-full">
						75%
					</span>
				</p>
			</div>
		</div>
	);
};

export default MainLeft;
