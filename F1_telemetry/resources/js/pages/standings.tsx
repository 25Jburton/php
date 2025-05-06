import { Label } from '@/components/ui/label';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";
import { DriverStandingsIndividualCard } from '@/components/driver-standings-individual-card';
import { LoadingCard } from '@/components/loading-card';
import { useState, useEffect } from 'react';
import { ConstructorStandingsIndividualCard } from '@/components/construstor-standings-individual-card';
import { ScrollArea } from '@/components/ui/scroll-area';

const breadcrumbs: BreadcrumbItem[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
	},
	{
		title: 'Standings',
		href: '/standings',
	},
];


export default function Standings() {
 	const [isLoading, setIsLoading] = useState(false);
	const [driverStandings, setDriverStandings] = useState([]);
	const [teamStandings, setTeamStandings] = useState([]);
	useEffect(() => {
		const fetchDriverData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://f1_telemetry.test/standingsDrivers/2024/99');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				let actualData = await response.json();
				setDriverStandings(actualData['drivers_championship']);
				console.log(actualData);
			} catch (e) {
				const error = e;
			} finally {
				setIsLoading(false);
			}
		};

		const fetchTeamData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://f1_telemetry.test/standingsConstructors/2024/99');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				let actualData = await response.json();
				setTeamStandings(actualData['constructors_championship']);
				console.log(actualData);
			} catch (e) {
				const error = e;
			} finally {
				setIsLoading(false);
			}
		};

		fetchDriverData();
		fetchTeamData();
	}, []);
	if (isLoading) {
		return <LoadingCard contentType="standings" />
	}
	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Standings" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
				<div className="grid auto-rows-min gap-4 md:grid-cols-1">
					<div className="space-y-1">
						<Select>
							<SelectTrigger className="w-[100%]">
								<SelectValue placeholder="Year" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="2025">2025</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="grid auto-rows-min gap-4 md:grid-cols-2 rounded-xl border">
				<ScrollArea className="h-[80vh] rounded-md">
					<DriverStandingsIndividualCard standings={driverStandings} />
				</ScrollArea>
				<ScrollArea className="h-[80vh] rounded-md">
					<ConstructorStandingsIndividualCard standings={teamStandings} />
				</ScrollArea>
				</div>
			</div>
		</AppLayout>
	);
}