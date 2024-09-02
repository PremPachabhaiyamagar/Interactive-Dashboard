import React, { ReactNode } from "react";
import { TiTick } from "react-icons/ti";
interface ITick {
	icon: ReactNode;
}
const Tick: React.FC<ITick> = ({ icon }) => {
	return (
		<div
			className="h-5 w-5 rounded-full bg-[#8314ff] flex justify-center items-center  mt-10"
			style={{ color: "white" }}
		>
			{icon}
		</div>
	);
};

export default Tick;
