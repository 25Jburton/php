import { Label } from '@/components/ui/label';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';


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


export default function Dashboard() {
 
	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Session Results" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
				<div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[10vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
					<div className="space-y-1 col-4">
						<Label htmlFor="year">Year</Label>
						<Select>
							<SelectTrigger className="w-[30%]">
								<SelectValue placeholder="Year" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="2025">2025</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-1 col-4">
						<Label htmlFor="circuit">Circuit</Label>
						<Select>
							<SelectTrigger className="w-[30%]">
								<SelectValue placeholder="Circuit" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="rd">Albert Park Circuit | Australia</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-1 col-4">
						<Label htmlFor="session">Session</Label>
						<Select>
							<SelectTrigger className="w-[30%]">
								<SelectValue placeholder="Session" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="race">Race</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
						<div>
							Circuit Data HERE
						</div>
					</div>
					<div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
						<div>
							Driver Data HERE  
						</div>
					</div>
					<div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
						<div>
							Team Data HERE
						</div>
					</div>
				</div>
				<div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
					<Label htmlFor="results">Output Session's Results</Label>
					<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
				</div>
			</div>
		</AppLayout>
	);
}