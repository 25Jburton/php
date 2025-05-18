import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis } from "recharts"

export default function LengthGraph(){	
	const [data, setData] = useState([]);
	const [avg, setAvg] = useState(0);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://f1_telemetry.test/getCircuitsLength/');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				let actualData = await response.json();
				setData(actualData['circuits']);
				setAvg(actualData['avg'].toFixed(2));
			} catch (e) {
				const error = e;
			} 
		};
		fetchData();
	}, []);

	const chartData = [{}];
	const chartConfig: any  = {} satisfies ChartConfig;
	
	if(data){
		const entries = Object.entries(data);
		entries.map((key, item) => (
			chartData.push({track: entries[item][0] , Distance: entries[item][1], fill: "var(--chart-1)" }),
			chartConfig[entries[item][0]] = {
									label: entries[item][0],
									color: "hsl(var(--chart-2))",
								}
		));


	}

	return (
		<Card className="mt-4 p-4 h-[50%] w-[100%]">
			<CardHeader>
				<CardTitle>Distance of Tracks</CardTitle>
				<CardDescription>Track distance by miles</CardDescription>
			</CardHeader>
			<CardContent className="h-[50%]">
				<ChartContainer config={chartConfig} className="h-[33vh] w-[100%]">
				<LineChart
					accessibilityLayer
					data={chartData}
					margin={{
						top: 24,
						left: 24,
						right: 24,
					}}
				>
					<CartesianGrid vertical={false} />
					<XAxis
						dataKey="Distance"
						tickLine={false}
						axisLine={false}
						tickMargin={8}
						
					/>
					<ChartTooltip
						cursor={false}
						content={
							<ChartTooltipContent
							indicator="line"
							nameKey="track"
							hideLabel
							/>
						}
					/>
					<Line
						dataKey="Distance"
						type="natural"
						stroke="var(--chart-2)"
						strokeWidth={2}
						dot={{
							fill: "var(--chart-2)",
						}}
						activeDot={{
							r: 6,
						}}
					>
						<LabelList
							position="outside"
							offset={12}
							className="fill-foreground"
							fontSize={12}
							dataKey="Distance"
							formatter={(value: keyof typeof chartConfig) =>
								chartConfig[value]?.label
							}
						/>
					</Line>
				</LineChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 font-medium leading-none">
					Average circuit length {avg} miles
				</div>
				<div className="leading-none text-muted-foreground">
					Showing total distance for all circuits in miles
				</div>
			</CardFooter>
		</Card>
	)
}