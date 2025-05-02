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
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList} from "@/components/ui/command"
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"

const breadcrumbs: BreadcrumbItem[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
	},
];

export default function Dashboard() {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState("")
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

				console.log(actualData['drivers']);
			} catch (e) {
				const error = e;
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	if (isLoading) {
		return  <AppLayout breadcrumbs={breadcrumbs}>
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
											<Label htmlFor="name">Driver Search</Label>
										</CardHeader>
										<CardContent className="space-y-2">
											<div className="grid auto-rows-min gap-4 md:grid-cols-3">
												<div className="space-y-1">
													<Select>
														<SelectTrigger className="w-[100%]">
															<SelectValue placeholder="Loading Drivers" />
														</SelectTrigger>
														<SelectContent>
														</SelectContent>
													</Select>
												</div>
												<div className="space-y-1">
													<Button className="w-[100%]">Search Drivers</Button>
												</div>
												<div className="space-y-1 text-end">
													<Button className="w-[50%] overflow-hidden" variant="destructive">Reset Search</Button>
												</div>
											</div>
										</CardContent>
										<ScrollArea className="h-[68vh] rounded-md border p-4">
											<div className="p-4 grid auto-rows-min gap-4 md:grid-cols-1 aspect-video  text-center">
												<Skeleton className="h-[100%] w-[100%] rounded-xl" />
												<span className='text-red-500'>Just a moment, loading list of Drivers from F1 API's database!</span>
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
				</AppLayout>;
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
							<Card>
								<CardHeader>
									<Label htmlFor="name">Driver Search</Label>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="grid auto-rows-min gap-4 md:grid-cols-3">
										<div className="space-y-1">

										<Popover open={open} onOpenChange={setOpen}>
											<PopoverTrigger asChild>
												<Button
												variant="outline"
												role="combobox"
												aria-expanded={open}
												className="w-[100%] justify-between"
												>
												{value ? driver.find((item) => item['driverId'] === value)?['name']: "Select Driver...": "Select Driver..."}
												<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
												</Button>
											</PopoverTrigger>
											<PopoverContent className="w-[100%] p-0">
												<Command>
												<CommandInput placeholder="Search framework..." />
												<CommandList>
													<CommandEmpty>No framework found.</CommandEmpty>
													<CommandGroup>
													{driver.map((item) => (
														<CommandItem
														key={item['driverId']}
														value={item['driverId']}
														onSelect={(currentValue) => {
															setValue(currentValue === value ? "" : currentValue)
															setOpen(false)
														}}
														>
														<Check
															className={cn(
															"mr-2 h-4 w-4",
															value === item['driverId'] ? "opacity-100" : "opacity-0"
															)}
														/>
														{item['name']} {item['surname']}
														</CommandItem>
													))}
													</CommandGroup>
												</CommandList>
												</Command>
											</PopoverContent>
										</Popover>


											{/* <Select>
												<SelectTrigger className="w-[100%]">
													<SelectValue placeholder="Driver Name" />
												</SelectTrigger>
												<SelectContent>
													{driver.map((item) => (
														<SelectItem key={item['driverId']} value={item['driverId']}>{item['name']} {item['surname']}</SelectItem>
													))}
												</SelectContent>
											</Select> */}
										</div>
										<div className="space-y-1">
											<Button className="w-[100%]">Search Drivers</Button>
										</div>
										<div className="space-y-1 text-end">
											<Button className="w-[50%] overflow-hidden" variant="destructive">Reset Search</Button>
										</div>
									</div>
								</CardContent>
								<ScrollArea className="h-[68vh] rounded-md border p-4">
									<div className="p-4 grid auto-rows-min gap-4 md:grid-cols-6">
										{driver.map((item) => (
											<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative rounded-xl border text-center">
												<Drawer>
													<DrawerTrigger><Button variant='ghost' size='lg'>{item['name']} {item['surname']}</Button></DrawerTrigger>
													<DrawerContent>
														<DrawerHeader className='text-center'>
															<DrawerTitle><h1>{item['name']} {item['surname']}</h1></DrawerTitle>
															<DrawerDescription>
																General driver information.
															</DrawerDescription>
														</DrawerHeader>
														<div className='text-center p-4 grid auto-rows-min gap-4 md:grid-cols-4 w-[100vw]'>
															<span>{item['number'] && <span>Car Number: {item['number']}</span>}</span>
															<span>Nationality: {item['nationality']}</span>
															<span>DOB: {item['birthday']}</span>
															<span >
																<a href={item['url']} target='blank'>
																	<Button variant="outline" className='text-green-500'>More Information</Button>
																</a>
															</span>
														</div>
														<DrawerFooter>
														<DrawerClose>
															<Button variant="outline" className='text-red-500'>Cancel</Button>
														</DrawerClose>
														</DrawerFooter>
													</DrawerContent>
												</Drawer>
											</div>
										))}
									</div>
								</ScrollArea>
							</Card>
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
