import React from "react";

const Footer = () => {
	let footerList = [
		"About",
		"Accessibility",
		"Help",
		"Privacy & Terms",
		"Advertise",
		"More",
	];
	return (
		<div className="lg:hidden px-5 mt-10">
			<div className="flex w-full pl-0 justify-center flex-wrap gap-3 opacity-60">
				{footerList.map((item, index) => (
					<span className="text-sm" key={index}>
						{item}
					</span>
				))}
			</div>
			<div className="w-full flex justify-center items-center gap-3">
				<span className="font-extrabold text-lg text-[#8314ff] ">
					sphere.io
				</span>
				<span>{"©"} 2023</span>
			</div>
		</div>
	);
};

export default Footer;
