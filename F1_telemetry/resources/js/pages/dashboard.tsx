import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import React, { useState, useEffect } from 'react';
import { LoadingDrivers } from '@/components/dashboard-loading-drivers';
import { DriverCard } from '@/components/dashboard-driver-card';

const breadcrumbs: BreadcrumbItem[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
	},
];

export default function Dashboard() {
	const [driver, setDrivers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
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
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	if (isLoading) {
		return <LoadingDrivers />
	}

	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Dashboard" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
				<div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[10vh] flex-1  rounded-xl border md:min-h-min">
					<Tabs defaultValue="driver" className="w-[100%]">
						<TabsList className="grid w-full grid-cols-2 w-[100%]">
							<TabsTrigger value="driver">
								Driver
							</TabsTrigger>
							<TabsTrigger value="team">
							   Team
							</TabsTrigger>
						</TabsList>
						<TabsContent value="driver">
							<DriverCard driver={driver} />
						</TabsContent>
						<TabsContent value="team">
							<Card>
								<CardHeader>
									<Label htmlFor="team">Team</Label>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="grid auto-rows-min gap-4 md:grid-cols-3">
										<div className="space-y-1">
											<Select>
												<SelectTrigger className="w-[100%]">
													<SelectValue placeholder="Team" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="red_bull">Red Bull</SelectItem>
												</SelectContent>
											</Select>
										</div>
										<div className="space-y-1">
											<Button className="w-[100%]">Search Teams</Button>
										</div>
										<div className="space-y-1 text-end">
											<Button className="w-[50%] overflow-hidden" variant="destructive">Reset Search</Button>
										</div>
									</div>
								</CardContent>
								<div className="p-4 grid auto-rows-min gap-4 md:grid-cols-2">
									<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative  rounded-xl border">
										<Label>
											Loop all returned Teams 
										</Label>
										<ul>
											<li>teamName</li>
											<li>nationality</li>
											<li>firstAppareance</li>
											<li>constructorsChampionships</li>
											<li>driversChampionships</li>
											<li>More Info (url)</li>
										</ul>                                    
									</div>
									<div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
										<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
									</div>
									<div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
										<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
									</div>
								</div>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</AppLayout>
	);
}
