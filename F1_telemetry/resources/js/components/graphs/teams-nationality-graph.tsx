import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import '../../../css/drawer.css';

export default function TeamsNationalityGraph(){
	const [nationalityData, setNationalityData] = useState([]);

	 useEffect(() => {
			const fetchData = async () => {
				try {
					const response = await fetch('http://f1_telemetry.test/getTeamsNationalities/');
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					let actualData = await response.json();
					setNationalityData(actualData);
					console.log(actualData);
				} catch (e) {
					const error = e;
				} 
			};
			fetchData();
		}, []);
	
		const chartData = [{}];
		if(nationalityData){
			const entries = Object.entries(nationalityData);
			entries.map((key, nationality) => (
				chartData.push({Nationality: entries[nationality][0] , Total: entries[nationality][1] })
			))
		}
	
		const chartConfig = {
			Nationality: {
				label: "Nationality",
				color: "hsl(var(--chart-1))",
			},
			label: {
				color: "hsl(var(--background))",
			},
		} satisfies ChartConfig;

	return (
        <Card className="p-4 h-[100%]">
            <CardHeader>
                <CardTitle>Nationality</CardTitle>
                <CardDescription>Nationality breakdown for all teams</CardDescription>
            </CardHeader>
            <CardContent className="h-[100%]">
                <ChartContainer config={chartConfig} className="h-[100vh] w-[45%]">
                    <BarChart accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            right: 16,
                        }}
                    >
                        <CartesianGrid horizontal={false} />
                        <YAxis
                            dataKey="Nationality"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 5)}
                            height={10}
                            hide
                        />
                        <XAxis
                            dataKey="Total" type="number" height={50} tickMargin={10}
                        />
                        <ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="Total" fill="var(--chart-2)" layout="vertical" radius={2} minPointSize={5} >
                            <LabelList
                                dataKey="Nationality"
                                position="right"
                                offset={50}
                                className="fill-foreground"
                                fontSize={8}
                                height={10}
                                style={{'margin': '15rem;'}}
                            />
                            <LabelList
                                dataKey="Total"
                                position="center"
                                offset={20}
                                className="fill-foreground"
                                fontSize={12}
                                height={10}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start  text-sm">
                <div className="leading-none text-muted-foreground">
                    Showing breakdown of all teams based on their nationality
                </div>
            </CardFooter>
        </Card>
	)
}