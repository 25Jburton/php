import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { CircuitPopoverSearch } from '@/components/circuits-popover-search';
import { LoadingCard } from '@/components/loading-card';
import { CircuitIndividualCard } from '@/components/circuit-individual-card';
import { ScrollArea } from '@/components/ui/scroll-area';

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
	const [count, setCount] = useState('1000');

 	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
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
		};
		fetchData();
	}, [count]);
	if (isLoading) {
		return <LoadingCard contentType="circuits" />
	}

	const totalCount = ['10','25','50','100','500'];
	const handleChange  = (value: any) => {
		setCount(value);
	};

	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Circuits" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">					
				<CircuitPopoverSearch circuit={circuit} />
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<Select onValueChange={handleChange}>
						<SelectTrigger className="w-[25%]">
							<SelectValue placeholder={count}/>
						</SelectTrigger>
						<SelectContent onSelect={handleChange}>
						{totalCount.map((displayAmount) => (
							<SelectItem value={displayAmount}>{displayAmount}</SelectItem>
						))}
						</SelectContent>
					</Select>
				</div>
				<div className="grid auto-rows-min gap-4 md:grid-cols-1 rounded-xl border">
					<ScrollArea className="h-[80vh] rounded-md">
						<CircuitIndividualCard circuit={circuit} />
					</ScrollArea>
				</div>
			</div>
		</AppLayout>
	);
}