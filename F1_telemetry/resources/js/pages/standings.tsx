import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";
import { DriverStandingsIndividualCard } from '@/components/standings/driver-standings-individual-card';
import { LoadingCard } from '@/components/loading/loading-card';
import { useState, useEffect, ChangeEvent } from 'react';
import { ConstructorStandingsIndividualCard } from '@/components/standings/constructor-standings-individual-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ErrorLoadingCard } from '@/components/loading/error-loading-card';
import { Label } from '@/components/ui/label';
import { CrownIcon, Trophy } from 'lucide-react';
import { Icon } from '@/components/ui/icon';

export default function Standings() {
	const [error, setError] = useState<string | null>(null);
 	const [isLoading, setIsLoading] = useState(false);
	const [driverStandings, setDriverStandings] = useState([]);
	const [teamStandings, setTeamStandings] = useState([]);
	const [year, setYear] = useState('2025');
	useEffect(() => {
		const fetchDriverData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://f1_telemetry.test/standingsDrivers/'+year+'/99');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				let actualData = await response.json();
				setDriverStandings(actualData['drivers_championship']);
			} catch (e:any) {
				setError(e.message);
			} finally {
				setIsLoading(false);
			}
		};

		const fetchTeamData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://f1_telemetry.test/standingsConstructors/'+year+'/99');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				let actualData = await response.json();
				setTeamStandings(actualData['constructors_championship']);
			} catch (e:any) {
				setError(e.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchDriverData();
		fetchTeamData();
	}, [year]);
	if (isLoading) {
		return <LoadingCard contentType="standings" />
	}
	if (error) {
		return <ErrorLoadingCard contentMsg={error} />
	}

	const currentYear = new Date().getFullYear();
	const years = [];
	for(var i=1950; i <= currentYear; i++){
		years.push(i.toString());
	}

	const handleChange  = (value: any) => {
		setYear(value);
	};


	const breadcrumbs: BreadcrumbItem[] = [
		{
			title: 'Dashboard',
			href: '/dashboard',
		},
		{
			title: 'Standings '+year,
			href: '/standings '+year,
		},
	];
	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Standings" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
				<div className="grid auto-rows-min gap-4 md:grid-cols-1">
					<div className="space-y-1">
						<Select onValueChange={handleChange}>
							<SelectTrigger className="w-[10%]">
								<SelectValue placeholder={year}/>
							</SelectTrigger>
							<SelectContent onSelect={handleChange}>
							{years.map((year) => (
								<SelectItem key={year} value={year}>{year}</SelectItem>
							))}
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="grid auto-rows-min gap-4 md:grid-cols-2 rounded-xl border">
					<ScrollArea className="h-[80vh] rounded-md text-center">
								{(() => {
									if(driverStandings[0]){
										let result = [];
										let driver_name = driverStandings[0]['driver']['name'] +' '+driverStandings[0]['driver']['surname'];
										if(currentYear > parseInt(year)){
											result.push(<Label key={driver_name} className='m-3'>Driver Champion: {driver_name} <Icon iconNode={CrownIcon}></Icon></Label>);
										}else{
											result.push(<Label key={driver_name} className='m-3'>Leader: {driver_name}</Label>);
										}
										return result;
									}
								})()}
						<DriverStandingsIndividualCard standings={driverStandings} year={year} />
					</ScrollArea>
					<ScrollArea className="h-[80vh] rounded-md text-center">
						<ConstructorStandingsIndividualCard standings={teamStandings} year={year} />
					</ScrollArea>
				</div>
			</div>
		</AppLayout>
	);
}