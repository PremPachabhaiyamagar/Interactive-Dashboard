import React, { ReactNode } from "react";
import Tick from "../../UI/Tick";
import { TiTick } from "react-icons/ti";
import { FiEdit2 } from "react-icons/fi";

interface IExperience {
	item: {
		role: string;
		date: string;
		location: string;
		description?: string;
		title: string;
		icon: ReactNode;
	};
}

const Experience: React.FC<IExperience> = ({ item }) => {
	return (
		<div className="relative px-5">
			<h1 className="my-5">{item.title}</h1>
			<div className="flex gap-5 items-start ">
				<div
					style={{ fontSize: "2rem", color: "#8314ff", marginTop: "0.5rem" }}
					className="rounded-full p-2 bg-purple-200"
				>
					{item.icon}
				</div>

				<div>
					<h2 className="text-lg mb-2">{item.role}</h2>
					<span className="mb-3">{item.date}</span>
					<p className="mb-5">{item.location}</p>
					<p className=" font-semibold opacity-80 leading-7 text-lg">
						{item.description}
					</p>
				</div>
			</div>
			<div className="absolute -top-10 lg:top-0 right-0 lg:right-5 flex gap-5 mr-10">
				<Tick icon={<TiTick />} />
				<Tick icon={<FiEdit2 />} />
			</div>
		</div>
	);
};

export default Experience;
