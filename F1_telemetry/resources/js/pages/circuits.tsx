import { Label } from '@/components/ui/label';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
  } from "@/components/ui/select";

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


export default function Dashboard() {
 
	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Circuits" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
				<div className="grid auto-rows-min gap-4 md:grid-cols-1">
					<div className="space-y-1">
						<Label htmlFor="circuit">Filter Circuits</Label>
						<Select>
							<SelectTrigger className="w-[100%] mt-4">
								<SelectValue placeholder="Circuit" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="rd">Albert Park Circuit | Australia</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div>
							<Label htmlFor="results">Output Session's Results</Label>
							<ul>
								<li>circuitName</li>
								<li>country, city</li>
								<li>circuitLength</li>
								<li>firstParticipationYear</li>
								<li>lapRecord</li>
								<li>numberOfCorners</li>
								<li>fastestLapYear</li>
								<li>fastestLapDriverId / fastestLapTeamId</li>
								<li>More Info (url)</li>
							</ul>
							<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
						</div>
					</div>
					<div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div>
							<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" /> 
						</div>
					</div>
					<div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div>
							<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
						</div>
					</div>
				</div>
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div>
							<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
						</div>
					</div>
					<div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div>
							<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />  
						</div>
					</div>
					<div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div>
							<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />  
						</div>
					</div>
				</div>
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div>
							<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
						</div>
					</div>
					<div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div>
							<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />  
						</div>
					</div>
					<div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div>
							<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
						</div>
					</div>
				</div>
			</div>
		</AppLayout>
	);
}