import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Icon } from '@/components/ui/icon';
import { CarIcon, InfoIcon, LogsIcon, MapIcon, PersonStandingIcon, TrophyIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
	},
];

export default function Dashboard() {

	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Dashboard" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
				<div className="m-4 border-sidebar-border/70 dark:border-sidebar-border relative min-h-[10vh] flex-1 rounded-xl md:min-h-min auto-rows-min gap-4 grid lg:grid-cols-2">
					
					<Card className='p-4'>
						<CardHeader>
							<Icon iconNode={PersonStandingIcon}></Icon>
							<CardTitle className='text-center'>Drivers </CardTitle>
							<CardDescription className='text-center'>Collection of all Drivers to compete in Formula 1. Basic details for driver based on selection or filtered search.</CardDescription>
							<a href='/drivers' className='text-center'>
								<Button variant="destructive">
									View Drivers
								</Button>
							</a>
						</CardHeader>
					</Card>

					<Card className='p-4'>
						<CardHeader>
							<Icon iconNode={CarIcon}></Icon>
							<CardTitle className='text-center'>Teams </CardTitle>
							<CardDescription className='text-center'>Collection of all Teams to compete in Formula 1. Basic details for team based on selection or filtered search.</CardDescription>
							<a href='/teams' className='text-center'>
								<Button variant="destructive">
									View Teams
								</Button>
							</a>
						</CardHeader>
					</Card>

					<Card className='p-4'>
						<CardHeader>
							<Icon iconNode={MapIcon}></Icon>
							<CardTitle className='text-center'>Circuits </CardTitle>
							<CardDescription className='text-center'>Information for all tracks utilized throughout the history of Formula 1. Displays basic track length, location, total corners and more.</CardDescription>
							<a href='/circuits' className='text-center'>
								<Button variant="destructive">
									View Circuits
								</Button>
							</a>
						</CardHeader>
					</Card>

					<Card className='p-4'>
						<CardHeader>
							<Icon iconNode={LogsIcon}></Icon>
							<CardTitle className='text-center'>Standings </CardTitle>
							<CardDescription className='text-center'>Current & Historic Standings, Drivers & Constructors. Displays points along with driver & team basic information.</CardDescription>
							<a href='/standings' className='text-center'>
								<Button variant="destructive">
									View Standings
								</Button>
							</a>
						</CardHeader>
					</Card>

					<Card className='p-4'>
						<CardHeader>
							<Icon iconNode={TrophyIcon}></Icon>
							<CardTitle className='text-center'>Results</CardTitle>
							<CardDescription className='text-center'>Current & Historic Results Based on Session & Year</CardDescription>
							<a href='/results'  className='text-center'>
								<Button variant="destructive">
									View Results
								</Button>
							</a>
						</CardHeader>
					</Card>

					<Card className='p-4'>
						<CardHeader>
							<Icon iconNode={InfoIcon}></Icon>
							<CardTitle className='text-center'>API Information </CardTitle>
							<CardDescription className='text-center'>
								This site pulls all returned data from the <a href='https://f1api.dev/'>f1api</a>. 
								API provides access to data related to Formula 1 races, drivers, teams, circuits & more.
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>
		</AppLayout>
	);
}
