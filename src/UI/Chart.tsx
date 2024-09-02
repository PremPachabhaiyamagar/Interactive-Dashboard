import React, { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, registerables } from "chart.js";

interface WheelChartProps {
	data: number[];
	labels: string[];
}

const WheelChart: React.FC<WheelChartProps> = ({ data, labels }) => {
	const chartRef = useRef<HTMLCanvasElement | null>(null);
	const chart = useRef<Chart | null>(null);

	useEffect(() => {
		if (chartRef.current) {
			const ctx = chartRef.current.getContext("2d");
			if (ctx) {
				Chart.register(...registerables);
				const chartData = {
					datasets: [
						{
							data,
							backgroundColor: [
								"#8314ff",
								"#8314ff",
								"#c69cf6",
								"#c69cf6",
								"#c69cf6",
								"#c69cf6",
								"#dec5fa",
							],
						},
					],
				};

				const chartOptions = {
					type: "doughnut",
					data: chartData,
					options: {
						cutout: "70%" as any,
						animation: false,
					},
				} as ChartConfiguration;

				chart.current = new Chart(ctx, chartOptions);
			}
		}

		return () => {
			if (chart.current) {
				chart.current.destroy();
				chart.current = null;
			}
		};
	}, [data, labels]);

	return (
		<div className="relative h-[15rem]">
			<canvas ref={chartRef} style={{ height: "200px" }} className="chart" />
			<h2 className="absolute left-[50%] bottom-[50%] -translate-x-[50%] translate-y-[50%] text-center">
				<b className="">320</b>
				<br />
				Sphere Rating
			</h2>
		</div>
	);
};

export default WheelChart;
