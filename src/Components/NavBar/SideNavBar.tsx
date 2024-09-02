import React, { useRef, forwardRef } from "react";
import { IoClose } from "react-icons/io5";
import "./navbar.css";
import { devList, footerList } from "../../mock/constants";
import { sidelist } from "../SideBar";
import SideList from "../SideBar/SideList";
import DevList from "../SideBar/DevList";
// import Logo from "../Logo";
// import SideNavContent from "./SideNavContent";
// import HotDeals from "./HotDeals";
// import DropDownMenuV2 from "../dropdown/DropDownMenuV2";

interface NavBarProps {
	innerRef: any;
	state: any;
	onClose: any;
}
interface props {
	state?: string;
	onClose: () => void;
	children?: React.ReactNode;
	ref: React.HTMLProps<HTMLDivElement>;
}

const SideNavBar = forwardRef<HTMLDivElement, props>(
	({ state, onClose }, ref) => {
		const getAnimationClassName = () => {
			switch (state) {
				case "entering":
					return "entering";
				case "entered":
					return "entered";
				case "exiting":
					return "exiting";
				default:
					return "";
			}
		};
		return (
			// <div
			// 	className="w-[100%] h-[100vh] bg-black/20 fixed top-0 z-10 side"
			// 	ref={ref}
			// >

			<div
				className={`navbar w-[80vw] h-full bg-white fixed z-[1000] top-0 -left-[25rem] py-3  ${getAnimationClassName()}`}
				ref={ref}
			>
				<div className="flex flex-col relative">
					<h1 className="text-gradient">Spehre</h1>
					<IoClose onClick={onClose} className="absolute right-0 text-lg " />
					<div className=" flex flex-col w-full pl-5 justify-center flex-wrap gap-3 opacity-60 mt-10">
						{sidelist.map((item, index) => (
							<SideList
								key={index}
								icon={item.icon}
								label={item.label}
								active={item.active}
							/>
						))}
					</div>
					<hr className="mt-10" />
					<h2 className="pl-8 my-5">Communities Feed</h2>
					<div className="flex flex-col gap-6 mt-5 px-5">
						{devList.map((item, index) => (
							<DevList key={index} item={item} />
						))}
					</div>
				</div>
			</div>

			// </div>
		);
	}
);

export default SideNavBar;
