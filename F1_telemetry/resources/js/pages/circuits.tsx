import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { CircuitPopoverSearch } from '@/components/circuits-popover-search';
import { LoadingDashboard } from '@/components/dashboard-loading';
import { CircuitIndividualCard } from '@/components/circuit-individual-card';

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
 	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://f1_telemetry.test/allCircuits/999');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				let actualData = await response.json();
				setCircuit(actualData['circuits']);
				console.log(actualData);
			} catch (e) {
				const error = e;
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	if (isLoading) {
		return <LoadingDashboard contentType="circuits" />
	}

	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Circuits" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
				<div className="grid auto-rows-min gap-4 md:grid-cols-1">
					<div className="space-y-1">
						<CircuitPopoverSearch circuit={circuit} />
					</div>
				</div>
				<CircuitIndividualCard circuit={circuit} />
			</div>
		</AppLayout>
	);
}