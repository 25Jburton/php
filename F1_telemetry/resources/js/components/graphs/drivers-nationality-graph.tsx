import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { CartesianGrid, XAxis, Bar, BarChart } from "recharts";

export default function NationalityGraph(){
    const [nationalityData, setNationalityData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://f1_telemetry.test/getDriversNationalities/');
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
	} satisfies ChartConfig;

    return (
        <Card className="p-4">
            <CardHeader>
                <CardTitle>Nationality</CardTitle>
                <CardDescription>Nationality breakdown for all drivers</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                            <XAxis
                            dataKey="Nationality"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                            />
                        <Bar dataKey="Total" fill="var(--chart-2)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="leading-none text-muted-foreground">
                    Showing breakdown of all drivers based on their nationality
                </div>
            </CardFooter>
        </Card>
    )
}