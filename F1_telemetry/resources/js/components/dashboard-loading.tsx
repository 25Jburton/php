import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Select, SelectTrigger, SelectValue, SelectContent } from "@radix-ui/react-select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const breadcrumbs: BreadcrumbItem[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
	},
];
export function LoadingDashboard({ contentType }: { contentType: string }) {
	let loadingDescription = '';
	if(contentType == 'drivers'){
		loadingDescription = "Drivers";
	}else if(contentType == 'circuits'){
		loadingDescription = "Circuits";
	}else if(contentType == 'standings'){
		loadingDescription = "Driver & Constructors Standings";
	}

	return (
		<>
			<AppLayout breadcrumbs={breadcrumbs} >
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
								<Card>
									<CardHeader>
										<Label htmlFor="name">{loadingDescription} Search</Label>
									</CardHeader>
									<CardContent className="space-y-2">
										<div className="grid auto-rows-min gap-4 md:grid-cols-3">
											<div className="space-y-1">
												<Select>
													<SelectTrigger className="w-[100%]">
														<SelectValue placeholder="Loading..." />
													</SelectTrigger>
													<SelectContent>
													</SelectContent>
												</Select>
											</div>
											<div className="space-y-1 grid md:grid-cols-2">
												
											</div>
											<div className="space-y-1 text-end">
												<Button className="w-[50%] overflow-hidden" variant="destructive">Reset Search</Button>
											</div>
										</div>
									</CardContent>
									<ScrollArea className="h-[68vh] rounded-md border p-4">
										<div className="p-4 grid auto-rows-min gap-4 md:grid-cols-1 aspect-video  text-center">
											<Skeleton className="h-[100%] w-[100%] rounded-xl" />
											<span className='text-red-500'>Just a moment, loading list of {loadingDescription} from F1 API's database!</span>
											<div className="space-y-2">
												<Skeleton className="h-6 w-[100%]" />
												<Skeleton className="h-6 w-[100%]" />
												<Skeleton className="h-6 w-[100%]" />
												<Skeleton className="h-6 w-[100%]" />
											</div>
										</div>
									</ScrollArea>
								</Card>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</AppLayout>
		</>
	);
}