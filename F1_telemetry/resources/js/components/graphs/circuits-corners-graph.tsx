import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

export default function CornersGraph(){
	const [data, setData] = useState([]);
	const [avg, setAvg] = useState(0);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://f1_telemetry.test/getCircuitsCorners/');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				let actualData = await response.json();
				setData(actualData['corners']);
				setAvg(actualData['avg'].toFixed(2));
			} catch (e) {
				const error = e;
			} 
		};
		fetchData();
	}, []);

	const chartData = [{}];
	if(data){
		const entries = Object.entries(data);
		entries.map((key, item) => (
			chartData.push({corner: entries[item][0] , tracks: entries[item][1] })
		));
	}

	const chartConfig = {
		tracks: {
			label: "Tracks",
			color: "hsl(var(--chart-1))",
		}
	} satisfies ChartConfig;

	return (
	<Card className="mt-4 p-4 h-[50%] w-[100%]">
		<CardHeader>
			<CardTitle>Corners</CardTitle>
			<CardDescription>Average Number of Corners on Track</CardDescription>
		</CardHeader>
		<CardContent className="h-[50%]">
			<ChartContainer config={chartConfig} className="h-[33vh] w-[100%]">
				<BarChart accessibilityLayer data={chartData}>
					<CartesianGrid vertical={false} />
						<XAxis
						dataKey="corner"
						tickLine={false}
						tickMargin={10}
						axisLine={false}
						tickFormatter={(value) => value.slice(0, 3)}
						/>
						<YAxis
						dataKey="tracks"
						/>
						<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent hideLabel />}
						/>
					<Bar dataKey="tracks" fill="var(--chart-2)" radius={8} />
				</BarChart>
			</ChartContainer>
		</CardContent>
		<CardFooter className="flex-col items-start gap-2 text-sm">
			<div className="flex gap-2 font-medium leading-none">
				Average corner count {avg} 
			</div>
			<div className="leading-none text-muted-foreground">
				Showing total number of corners on each track
			</div>
		</CardFooter>
	</Card>
	)
}