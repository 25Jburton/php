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
		title: 'Standings',
		href: '/standings',
	},
];


export default function Dashboard() {
 
	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Standings" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
				<div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[10vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
					<div className="space-y-1 col-12">
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
				</div>
				<div className="grid auto-rows-min gap-4 md:grid-cols-2">
					<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
						<div>
							Drivers Data HERE
						</div>
					</div>
					<div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
						<div>
							Constructors Data HERE  
						</div>
					</div>
				</div>
			</div>
		</AppLayout>
	);
}