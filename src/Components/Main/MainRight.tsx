import React from "react";

import Tick from "../../UI/Tick";
import Experience from "./Experience";
import { FiEdit2 } from "react-icons/fi";
import { BsBagCheckFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
const employeeInfo = [
	{ title: "About", active: true },
	{ title: "Skills & Certificates", active: false },
	{ title: "Posts", active: false },
	{ title: "Spaces", active: false },
];
const MainRight = () => {
	let expInfo = [
		{
			title: "Experience",
			role: "Crisis Intervention Specialist",
			date: "January 2023-Present",
			location: "Lcoderz- Ahmedabad,India",
			icon: <BsBagCheckFill />,
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetursaepe molestias doloremque dolorum doloribus, debitis magni velasperiores maiores, molestiae aperiam quidem id. Excepturi temporibus ut ipsum nostrum molestiasofficia commodi atque, quibusdam expraesentium earum odit prspiciatis provident? Culpa.",
		},
		{
			title: "Eductaion",
			role: "Crisis Intervention Specialist",
			date: "January 2023-Present",
			location: "Lcoderz- Ahmedabad,India",
			icon: <HiAcademicCap />,
		},
	];
	return (
		<div className="w-full lg:w-3/4 bg-white h-full mt-16 lg:mt-0">
			<div className=" w-full h-10  flex justify-between items-center border-b-2 border-gray-300 py-6 px-5">
				{employeeInfo.map((item, index) => (
					<h2 key={index} className={`relative ${item.active ? "link" : ""}`}>
						{item.title}
					</h2>
				))}
			</div>
			<div className="flex  px-5 justify-between">
				<p className="py-5 opacity-80 w-[90%] leading-6 desc mt-5">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
					porro velit dolores nam. Cupiditate quas iusto eius labore culpa hic
					vero ad. Impedit quis temporibus optio quos deserunt. Tempore quisquam
					voluptate nihil non ipsam illum quis ipsum dolor, consectetur sunt
					Tempore quisquam voluptate nihil non ipsam illum quis ipsum dolor,
					consectetur sunt officiis earum, nemo
				</p>
				<Tick icon={<FiEdit2 />} />
			</div>
			<hr className="mt-5 border-t-2 border-gray-300" />

			<div className="flex flex-col gap-10">
				{expInfo.map((item, index) => (
					<div key={index}>
						<Experience item={item} />
						<hr />
					</div>
				))}
			</div>
		</div>
	);
};

export default MainRight;
