import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { LoadingCard } from '@/components/loading/loading-card';
import { CircuitIndividualCard } from '@/components/circuits/circuit-individual-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList} from "@/components/ui/command"
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CartesianGrid, XAxis, Bar, BarChart, LineChart, Line, LabelList } from "recharts";
import {Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger} from "@/components/ui/sheet";
import CornersGraph from "@/components/graphs/circuits-corners-graph";
import LengthGraph from "@/components/graphs/circuits-length-graph";

const breadcrumbs: BreadcrumbItem[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
	},
	{
		title: 'Circuits',
		href: '/circuits',
	},
];

export default function Circuits() {
	const [isLoading, setIsLoading] = useState(false);
	const [circuit, setCircuit] = useState([]);
	const [circuitSearch, setCircuitSearch] = useState([]);
	const [count, setCount] = useState('1000');
	const [open, setOpen] = useState(false);
	const [circuitValue, setCircuitValue] = useState("");

 	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			if(circuitValue){
				try {
					const response = await fetch('http://f1_telemetry.test/getCircuit/'+encodeURIComponent(circuitValue));
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					console.log('http://f1_telemetry.test/getCircuit/'+encodeURIComponent(circuitValue));
					let searchData = await response.json();
					setCircuitSearch(searchData['circuits']);

					const responseAll = await fetch('http://f1_telemetry.test/allCircuits/'+count);
					if (!responseAll.ok) {
						throw new Error(`HTTP error! status: ${responseAll.status}`);
					}
					let actualData = await responseAll.json();
					setCircuit(actualData['circuits']);
				} catch (e) {
					const error = e;
				} finally {
					setIsLoading(false);
				}
			}else{
				try {
					const response = await fetch('http://f1_telemetry.test/allCircuits/'+count);
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					let actualData = await response.json();
					setCircuit(actualData['circuits']);
				} catch (e) {
					const error = e;
				} finally {
					setIsLoading(false);
				}
			}
		};
		fetchData();
	}, [count, circuitValue]);
	if (isLoading) {
		return <LoadingCard contentType="circuits" />
	}

	const totalCount = ['10','25','50','100','500'];
	const handleChange  = (yearValue: any) => {
		setCount(yearValue);
	};

	const handleReset  = () => {
		setCircuitValue("");
		setCircuitSearch([]);
	};

	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Circuits" />
			<div>
				<CardContent className="space-y-2 p-4">
					<div className="grid auto-rows-min gap-4 md:grid-cols-3">
						<div className="space-y-1">
							<Popover open={open} onOpenChange={setOpen}>
								<PopoverTrigger asChild>
									<Button
									variant="outline"
									role="combobox"
									aria-expanded={open}
									style={{cursor:'pointer'}}
									className="w-[100%] justify-between"
									>
									{circuitValue ? circuit.find((item) => item['circuitName']  === circuitValue)?circuitValue: "Searching circuits": "Search circuits"}
									<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-[100%] p-0">
									<Command>
									<CommandInput placeholder="Search circuits..." />
									<CommandList>
										<CommandEmpty>No circuits found.</CommandEmpty>
										<CommandGroup>
										{circuit.map((item) => (
											<CommandItem
											style={{cursor:'pointer'}}
											key={item['circuitId']}
											value={item['circuitName'] }
											onSelect={(currentValue) => {
												setCircuitValue(currentValue === circuitValue ? "" : currentValue)
												setOpen(false)
											}}
											>
											<Check
												className={cn(
												"mr-2 h-4 w-4",
												circuitValue === item['circuitId'] ? "opacity-100" : "opacity-0"
												)}
											/>
											{item['circuitName']}
											</CommandItem>
										))}
										</CommandGroup>
									</CommandList>
									</Command>
								</PopoverContent>
							</Popover>
						</div>
						<div className="space-y-1 grid md:grid-cols-2">
							<Select onValueChange={handleChange}>
								<SelectTrigger className="w-[50%]">
									<SelectValue placeholder={count}/>
								</SelectTrigger>
								<SelectContent>
								{totalCount.map((displayAmount) => (
									<SelectItem value={displayAmount} key={displayAmount}>{displayAmount}</SelectItem>
								))}
								</SelectContent>
							</Select>

							<Sheet>
								<SheetTrigger className="w-[150%] overflow-hidden p-4" variant="secondary">
									View Circuits Stats
								</SheetTrigger>
								<SheetContent>
									<ScrollArea className="h-[100vh] rounded-md">
										<SheetHeader>
										<SheetTitle>Breakdown of Combined Circuits Data</SheetTitle>
											<CornersGraph />
											<LengthGraph />
										</SheetHeader>
									</ScrollArea>
								</SheetContent>
							</Sheet>
						</div>
						<div className="space-y-1 text-end">
							<Button className="w-[50%] overflow-hidden p-4" variant="destructive" onClick={handleReset}>Reset Search</Button>
						</div>
					</div>
				</CardContent>

				<div className="grid auto-rows-min gap-4 md:grid-cols-1 rounded-xl border">
					<ScrollArea className="h-[80vh] rounded-md">
						<CircuitIndividualCard circuit={circuit} circuitSearch={circuitSearch}/>
					</ScrollArea>
				</div>
			</div>
		</AppLayout>
	);
}