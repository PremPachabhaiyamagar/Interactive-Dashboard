import React from "react";
import { IoIosPeople } from "react-icons/io";
const imgUrl = new URL("../assets/images/man.jpeg", import.meta.url);

const ProfileCard = () => {
	return (
		<div className=" w-full ">
			<div
				className="relative bottom-20  h-40 w-40 rounded-full bg-orange-200 left-[50%] -translate-x-[50%]"
				style={{
					backgroundImage: `url(${imgUrl})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					// Adjust the height as per your requirement
				}}
			></div>
			<div className="relative bottom-20 flex flex-col w-full items-center">
				<h1 className="mt-1">Ayaat Khanna</h1>
				<p className="">UI/UX Developer</p>
				<div className="flex gap-5 mt-1">
					<div className="flex items-center gap-2">
						<span>
							<IoIosPeople style={{ fontSize: "1.5rem" }} />
						</span>
						<span>21 followers</span>
					</div>

					<span>41 following</span>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
