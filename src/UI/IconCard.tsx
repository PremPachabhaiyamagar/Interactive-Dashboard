import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { IoMdNotificationsOutline } from "react-icons/io";
interface IiconCard {
	icon: ReactNode;
	noti?: boolean;
}
const IconCard: React.FC<IiconCard> = ({ icon, noti }) => {
	return (
		<div
			className="p-2 lg:p-2 relative shadow-sm bg-white rounded-md border-2 border-slate-300"
			style={{ fontSize: "1.5rem" }}
		>
			{icon}
			{noti && (
				<div className="absolute top-2 right-3 w-2 h-2 rounded-full bg-red-500"></div>
			)}
		</div>
	);
};

export default IconCard;
