import { Popover,PopoverContent,PopoverTrigger } from "@/components/ui/popover"
import { Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList } from "@/components/ui/command"
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select";
import { ResultsDataTable } from '@/components/results/react-dataTable';
import CircuitResults from '@/components/results/circuit-data-card';
import DriverResults from '@/components/results/driver-data-card';
import TeamResults from '@/components/results/team-data-card';
import { useEffect, useState } from 'react';
import { LoadingCard } from '@/components/loading/loading-card';
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const breadcrumbs: BreadcrumbItem[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
	},
	{
		title: 'Session Results',
		href: '/results',
	},
];

export default function Results() {
	const [year, setYear] = useState('2025');
	const [isLoading, setIsLoading] = useState(false);
	const [circuit, setCircuit] = useState([]);
	const [open, setOpen] = useState(false);
	const [circuitValue, setCircuitValue] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://f1_telemetry.test/allCircuits/1000');
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
		};
		fetchData();
	}, [year]);

	if (isLoading) {
		return <LoadingCard contentType="circuits" />
	}


	const currentYear = new Date().getFullYear();
	const years = [];
	for(var i=1950; i <= currentYear; i++){
		years.push(i.toString());
	}
 
	const handleChangeYear = (value: any) => {
		setYear(value);
	};

	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Session Results" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<div className="space-y-1">
						<Select>
							<SelectTrigger className="w-[100%]">
								<SelectValue placeholder={year}/>
							</SelectTrigger>
							<SelectContent onSelect={handleChangeYear}>
							{years.map((year) => (
								<SelectItem key={year} value={year}>{year}</SelectItem>
							))}
							</SelectContent>
						</Select>
					</div>
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
					<div className="space-y-1">
						<Select>
							<SelectTrigger className="w-[100%]">
								<SelectValue placeholder="Session" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="race">Race</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<CircuitResults circuit={[]} />
					<DriverResults driver={[]} />
					<TeamResults team={[]} />
				</div>
				<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1  rounded-xl border md:min-h-min">
					<ResultsDataTable />
				</div>
			</div>
		</AppLayout>
	);
}