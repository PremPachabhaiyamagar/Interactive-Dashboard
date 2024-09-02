import React from "react";
import SearchBar from "../NavBar/SearchBar";
import IconCard from "../../UI/IconCard";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const MobinleNavbar = () => {
	return (
		<div className="lg:hidden px-5 lg:px-2 py-3 flex justify-center  lg:hideen gap-5">
			<SearchBar />
			<IconCard icon={<IoMdNotificationsOutline />} noti={true} />
			<IconCard icon={<AiOutlineMail />} />
		</div>
	);
};

export default MobinleNavbar;
