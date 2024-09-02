import React, { ReactNode } from "react";
import { MdWindow } from "react-icons/md";

interface ISideList {
	icon: ReactNode;
	label: string;
	active: boolean;
}
const SideList: React.FC<ISideList> = ({ icon, label, active }) => {
	return (
		<div
			className={`flex items-center gap-3 py-3 rounded-sm ${
				active && "border-2 border-slate-100 bg-[#f8f8fe] font-bold py-3"
			}`}
		>
			<div
				style={{ fontSize: "1.5rem", color: "#8314ff" }}
				className={`${active ? "opacity-100" : "opacity-40"}`}
			>
				{icon}
			</div>
			<h2 className={`${active ? "opacity-100" : "opacity-60 text-[#8314ff]"}`}>
				{label}
			</h2>
		</div>
	);
};

export default SideList;
