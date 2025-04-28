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
		title: 'Standings',
		href: '/standings',
	},
];


export default function Dashboard() {
 
	return (
		<AppLayout breadcrumbs={breadcrumbs}>
			<Head title="Standings" />
			<div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
				<div className="grid auto-rows-min gap-4 md:grid-cols-1">
					<div className="space-y-1">
						<Label htmlFor="year">Year</Label>
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
				<div className="grid auto-rows-min gap-4 md:grid-cols-2">
					<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
						<div className="grid auto-rows-min gap-4 md:grid-cols-1">
							<Label htmlFor="driver">Driver Data HERE</Label>
							<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
								<div>
									<ul>
										<li>position</li>
										<li>surname , name (shortName)</li>
										<li>nationality</li>
										<li>number</li>
										<li>birthday</li>
										<li>teamName (nationality)</li>
										<li>More Info (url)</li>
									</ul>
									<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
								</div>
							</div>
							<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
								<div>
									<ul>
										<li>position</li>
										<li>surname , name (shortName)</li>
										<li>nationality</li>
										<li>number</li>
										<li>birthday</li>
										<li>teamName (nationality)</li>
										<li>More Info (url)</li>
									</ul>
									<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />  
								</div>
							</div>
							<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
								<div>
									<ul>
										<li>position</li>
										<li>surname , name (shortName)</li>
										<li>nationality</li>
										<li>number</li>
										<li>birthday</li>
										<li>teamName (nationality)</li>
										<li>More Info (url)</li>
									</ul>
									<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
								</div>
							</div>
						</div>
					</div>
					<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video rounded-xl border">
					<div className="grid auto-rows-min gap-4 md:grid-cols-1">
							<Label htmlFor="constructors">Constructors Data HERE</Label>
							<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
								<div>
									<ul>
										<li>position</li>
										<li>surname , name (shortName)</li>
										<li>nationality</li>
										<li>number</li>
										<li>birthday</li>
										<li>More Info (url)</li>
									</ul>
									<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
								</div>
							</div>
							<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
								<div>
									<ul>
										<li>position</li>
										<li>wins</li>
										<li>teamName</li>
										<li>country</li>
										<li>firstAppareance</li>
										<li>constructorsChampionships</li>
										<li>driversChampionships</li>
										<li>More Info (url)</li>
									</ul>
									<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />  
								</div>
							</div>
							<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
								<div>
									<ul>
										<li>position</li>
										<li>surname , name (shortName)</li>
										<li>nationality</li>
										<li>number</li>
										<li>birthday</li>
										<li>More Info (url)</li>
									</ul>
									<PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AppLayout>
	);
}