import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Icon } from '@/components/ui/icon';
import { CarIcon, InfoIcon, LogsIcon, MapIcon, PersonStandingIcon, TrophyIcon } from 'lucide-react';
import '../../css/dashboard.css';
import raceCar from '../../assets/raceCar.png';
import team from '../../assets/teamwork.png';
import circuit from '../../assets/circuit.png';
import flag from '../../assets/flags.png';
import standings from '../../assets/standings.png';

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
				<div className="m-4 border-sidebar-border/70 dark:border-sidebar-border relative min-h-[10vh] flex-1 rounded-xl md:min-h-min auto-rows-min gap-4 parent-card grid lg:grid-cols-2">
					<Card className='parent-card'>
						<a href='/drivers' className='text-center'>
							<CardHeader className='parent-card-drivers'>
								<Icon iconNode={PersonStandingIcon}></Icon>
								<CardTitle className='text-center'>Drivers </CardTitle>
								<CardDescription className='text-center'>Collection of all Drivers to compete in Formula 1. Basic details for driver based on selection or filtered search.</CardDescription>
							</CardHeader>
						</a>
					</Card>
					<a href='/drivers'>
						<div className='animated-icon' title='View Drivers Page'>
							<img src={raceCar}></img>
						</div>
					</a>
					<a href='/teams' className='text-center' title='View Teams Page'>
						<div className='animated-icon'>
							<img src={team}></img>
						</div>
					</a>
					<Card className='parent-card'>
						<a href='/teams' className='text-center'>
							<CardHeader className='parent-card-teams'>
								<Icon iconNode={CarIcon}></Icon>
								<CardTitle className='text-center'>Teams </CardTitle>
								<CardDescription className='text-center'>Collection of all Teams to compete in Formula 1. Basic details for team based on selection or filtered search.</CardDescription>
							</CardHeader>
						</a>
					</Card>

					<Card className='parent-card'>
						<a href='/circuits' className='text-center'>
							<CardHeader className='parent-card-circuits'>
								<Icon iconNode={MapIcon}></Icon>
								<CardTitle className='text-center'>Circuits </CardTitle>
								<CardDescription className='text-center'>Information for all tracks utilized throughout the history of Formula 1. Displays basic track length, location, total corners and more.</CardDescription>
							</CardHeader>
						</a>
					</Card>
					<a href='/circuits' className='text-center' title='View Circuit Page'>
						<div className='animated-icon'>
							<img src={circuit}></img>
						</div>
					</a>
					<a href='/standings' className='text-center' title='View Standings Page'>
						<div className='animated-icon'>
							<img src={standings}></img>
						</div>
					</a>
					<Card className='parent-card'>
						<a href='/standings'  className='text-center' title='View Standings Page'>
							<CardHeader className='parent-card-standings'>
								<Icon iconNode={LogsIcon}></Icon>
								<CardTitle className='text-center'>Standings </CardTitle>
								<CardDescription className='text-center'>Current & Historic Standings, Drivers & Constructors. Displays points along with driver & team basic information.</CardDescription>
							</CardHeader>
						</a>
					</Card>

					<Card className='p-4 parent-card'>
						<a href='/results'  className='text-center' title='View Results Page'>
							<CardHeader className='parent-card-results'>
								<Icon iconNode={TrophyIcon}></Icon>
								<CardTitle className='text-center'>Results</CardTitle>
								<CardDescription className='text-center'>Current & Historic Results Based on Session & Year</CardDescription>
							</CardHeader>
						</a>
					</Card>
					<a href='/results'  className='text-center' title='View Results Page'>
						<div className='animated-icon'>
							<img src={flag}></img>
						</div>
					</a>
				</div>
				<Card className='p-4 parent-card'>
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
		</AppLayout>
	);
}
