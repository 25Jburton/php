import { Label } from '@/components/ui/label';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "@/components/ui/select";
import { ResultsDataTable } from '@/components/results/react-dataTable';

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
 
	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Session Results" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
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
					<div className="space-y-1">
						<Select>
							<SelectTrigger className="w-[100%]">
								<SelectValue placeholder="Circuit" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="rd">Albert Park Circuit | Australia</SelectItem>
							</SelectContent>
						</Select>
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
					<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div>
							Circuit Data HERE
							- circuitName
							- country, city
							- circuitLength
							- firstParticipationYear
							- lapRecord
							- numberOfCorners
							- fastestLapYear
							- fastestLapDriverId / fastestLapTeamId
							- More Info (url)
						</div>
					</div>
					<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div>
							Driver Data HERE 
							- surname , name (shortName)
							- nationality
							- number
							- birthday
							- More Info (url)

							-----------------------
							- Session selected
							- raceName
							- round
							- date / time
							- time
						</div>
					</div>
					<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div>
							Team Data HERE
							- teamName
							- nationality
							- firstAppareance
							- constructorsChampionships
							- driversChampionships
							- More Info (url)
						</div>
					</div>
				</div>
				<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1  rounded-xl border md:min-h-min">
					<ResultsDataTable />
				</div>
			</div>
		</AppLayout>
	);
}