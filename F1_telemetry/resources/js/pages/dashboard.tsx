import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React, { useState, useEffect } from 'react';
import { LoadingCard } from '@/components/loading-card';
import { DriverCard } from '@/components/dashboard-driver-card';
import { TeamsCard } from '@/components/dashboard-team-card';

const breadcrumbs: BreadcrumbItem[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
	},
];

export default function Dashboard() {
	const [driver, setDrivers] = useState([]);
	const [teams, setTeams] = useState([]);
	const [isLoadingDrivers, setIsLoadingDrivers] = useState(false);
	const [isLoadingTeams, setIsLoadingTeams] = useState(false);

	const [activeTab, setActiveTab] = useState('Driver');
	useEffect(() => {
		if(activeTab == 'Driver'){
			const fetchData = async () => {
				setIsLoadingDrivers(true);
				try {
					const response = await fetch('http://f1_telemetry.test/allDrivers/999');
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					let actualData = await response.json();
					setDrivers(actualData['drivers']);
				} catch (e) {
					const error = e;
				} finally {
					setIsLoadingDrivers(false);
				}
			};
			fetchData();
		}else{
			const fetchData = async () => {
			setIsLoadingTeams(true);
			try {
				const response = await fetch('http://f1_telemetry.test/allTeams/999');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				let actualData = await response.json();
				setTeams(actualData['teams']);
			} catch (e) {
				const error = e;
			} finally {
				setIsLoadingTeams(false);
			}
		};
		fetchData();
		}
	}, [activeTab]);

	if (isLoadingDrivers) {
		return <LoadingCard contentType="drivers" />;
	}

	function clickTeamTab() {
		setActiveTab('Team');
	}


	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Dashboard" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
				<div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[10vh] flex-1  rounded-xl md:min-h-min">
					<Tabs defaultValue="driver" className="w-[100%]">
						<TabsList className="grid w-full grid-cols-2 w-[100%]">
							<TabsTrigger value="driver">
								Driver
							</TabsTrigger>
							<TabsTrigger value="team" onClick={clickTeamTab}>
							   Team
							</TabsTrigger>
						</TabsList>
						<TabsContent value="driver">
							<DriverCard driver={driver} />
						</TabsContent>
						<TabsContent value="team">
							<TeamsCard teams={teams} />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</AppLayout>
	);
}
