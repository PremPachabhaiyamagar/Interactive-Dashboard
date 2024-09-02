import React from "react";

interface LoaderProps {
	progress: number;
}

const Loader: React.FC<LoaderProps> = ({ progress }) => {
	return (
		<div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
			<div className="relative h-full ">
				<div
					className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-500"
					style={{ width: `${progress}%` }}
				>
					<span className="h-4 w-4 bg-purple-400 absolute rounded-full -right-2 bottom-0"></span>
				</div>
				<div className="absolute right-0 top-0 transform translate-x-full">
					<div className="w-4 h-4 bg-white rounded-full"></div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
