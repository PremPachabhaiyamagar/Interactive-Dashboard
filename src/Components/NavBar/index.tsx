import React, { useRef, useState } from "react";
import Logo from "../../UI/Logo";
import SearchBar from "./SearchBar";
import IconCard from "../../UI/IconCard";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import MobinleNavbar from "../MobNavbar";
import { RiArrowDownSLine } from "react-icons/ri";
import { Transition } from "react-transition-group";
import SideNavBar from "./SideNavBar";
const imgUrl3 = new URL("../../assets/images/image3.jpeg", import.meta.url)
	.href;
const imgUrl2 = new URL("../../assets/images/image2.jpeg", import.meta.url)
	.href;
const Navbar = () => {
	const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);
	const navRef = useRef<HTMLDivElement | null>(null);
	const defaultStyle = {
		transition: `opacity 300ms ease-in-out`,
		opacity: 0,
	};

	const transitionStyles = {
		entering: { opacity: 1 },
		entered: { opacity: 1 },
		exiting: { opacity: 0 },
		exited: { opacity: 0 },
		unmounted: {},
	};
	return (
		<div>
			<div className="w-full py-2 border-2 border-slate-300  h-16 flex items-center justify-between px-5 lg:px-10">
				<div className="lg:hidden">
					<VscThreeBars
						style={{ fontSize: "1.5rem" }}
						onClick={() => setSideBarOpen(true)}
					/>
				</div>
				<Logo />
				{/* <div className="lg:hidden">
					<FiSettings style={{ fontSize: "1.5rem" }} />
				</div> */}

				<div className="hidden lg:flex gap-5 items-center">
					<SearchBar />
					<IconCard icon={<IoMdNotificationsOutline />} noti={true} />
					<IconCard icon={<AiOutlineMail />} />
					<div className=" relative w-10 h-10 ">
						<img src={imgUrl2} className="rounded-full max-h-10 min-w-10" />
						<div className="absolute -right-3 -bottom-2 bg-gray-300 scale-50 p-1 rounded-full">
							<RiArrowDownSLine style={{ fontSize: "1.5rem" }} />
						</div>
					</div>
				</div>
				<div className=" lg:hidden relative w-10 h-10 ">
					<img src={imgUrl3} className="rounded-full max-h-10 min-w-10" />
					<div className="absolute -right-3 -bottom-2 bg-gray-300 scale-50 p-1 rounded-full">
						<RiArrowDownSLine style={{ fontSize: "1.5rem" }} />
					</div>
				</div>
			</div>
			<MobinleNavbar />
			<Transition
				nodeRef={navRef}
				in={isSideBarOpen}
				timeout={500}
				mountOnEnter
				unmountOnExit
			>
				{(state) => {
					console.log(state);
					return (
						<>
							<SideNavBar
								ref={navRef}
								state={state}
								onClose={() => setSideBarOpen(false)}
							/>

							<div
								className={`fixed inset-0 z-[9] bg-black/60
                  
                  `}
								style={{
									...defaultStyle,
									...transitionStyles[state],
								}}
								onClick={() => setSideBarOpen(false)}
							></div>
						</>
					);
				}}
			</Transition>
		</div>
	);
};

export default Navbar;
