import React, { useState } from "react";

export const Toggler = () => {
	const [isOn, setIsOn] = useState(true);

	const handleClick = () => {
		setIsOn(!isOn);
	};

	return (
		<button
			className={`absolute right-1 w-10 h-5 rounded-full bg-blue ${
				isOn ? "bg-[#8314ff]" : "bg-gray-300"
			} transition-colors duration-300`}
			onClick={handleClick}
		>
			<span
				className={`block w-4 h-4 rounded-full bg-white shadow ${
					isOn ? "transform translate-x-5" : ""
				} transition-transform duration-300`}
			></span>
		</button>
	);
};

export default Toggler;
