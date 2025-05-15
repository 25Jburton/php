import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { LoadingCard } from '@/components/loading/loading-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import { Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList} from "@/components/ui/command"
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DriverIndividualCard } from "@/components/drivers/individual-driver-card";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CartesianGrid, XAxis, Bar, BarChart, LineChart, Line, LabelList } from "recharts";
import {Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger} from "@/components/ui/sheet";
import NationalityGraph from '@/components/graphs/drivers-nationality-graph';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Drivers',
        href: '/drivers',
    },
];

export default function Drivers() {
    const [driver, setDrivers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [driverSearch, setDriverSearch] = useState([]);
	const [driverValue, setDriverValue] = useState("");
    const [count, setCount] = useState('50');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            if(driverValue){
                try {
                   const response = await fetch('http://f1_telemetry.test/getDriver/'+encodeURIComponent(driverValue));
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					let searchData = await response.json();
					setDriverSearch(searchData['drivers']);
                    console.log('http://f1_telemetry.test/getDriver/'+encodeURIComponent(driverValue));


					const responseAll = await fetch('http://f1_telemetry.test/allDrivers/'+1000);
					if (!responseAll.ok) {
						throw new Error(`HTTP error! status: ${responseAll.status}`);
					}
					let actualData = await responseAll.json();
					setDrivers(actualData['drivers']);
                } catch (e) {
                    const error = e;
                } finally {
                    setIsLoading(false);
                }
            }else{
                try {
                    const response = await fetch('http://f1_telemetry.test/allDrivers/'+count);
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					let searchData = await response.json();

                    setDriverSearch(searchData['drivers']);

                  const responseAll = await fetch('http://f1_telemetry.test/allDrivers/'+1000);
					if (!responseAll.ok) {
						throw new Error(`HTTP error! status: ${responseAll.status}`);
					}
					let actualDataAll = await responseAll.json();
					setDrivers(actualDataAll['drivers']);
                } catch (e) {
                    const error = e;
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchData();
    }, [count, driverValue]);
    if (isLoading) {
        return <LoadingCard contentType="drivers" />
    }

    const totalCount = ['10','25','50','100','500'];
    const handleChange  = (yearValue: any) => {
        setCount(yearValue);
    };

    const handleReset  = () => {
        setDriverValue("");
        setDriverSearch([]);
    };

    const chartData = [
		{ nationality: "British", Total: 24 },
		{ nationality: "Italian", Total: 32 },
		{ nationality: "Name", Total: 5 },
		{ nationality: "Name", Total: 3 },
		{ nationality: "Name", Total: 2 },
		{ nationality: "Name", Total: 14 },
		{ nationality: "Name", Total: 16 },
		{ nationality: "Name", Total: 5 },
		{ nationality: "Name", Total: 7 },
	];
	const chartConfig = {
		nationality: {
			label: "Nationality",
			color: "hsl(var(--chart-1))",
		},
	} satisfies ChartConfig;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Drivers" />
            <div>
                <CardContent className="space-y-2 p-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="space-y-1">
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    style={{cursor:'pointer'}}
                                    className="w-[100%] justify-between"
                                    >
                                    {driverValue ? driver.find((item) => item['surname']  === driverValue)?driverValue: "Searching Drivers": "Search Drivers"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[100%] p-0">
                                    <Command>
                                    <CommandInput placeholder="Search drivers..." />
                                    <CommandList>
                                        <CommandEmpty>No drivers found.</CommandEmpty>
                                        <CommandGroup>
                                        {driver.map((item) => (
                                            <CommandItem
                                            style={{cursor:'pointer'}}
                                            key={item['driverId']}
                                            value={item['surname']}
                                            onSelect={(currentValue) => {
                                                setDriverValue(currentValue === driverValue ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                            >
                                            <Check
                                                className={cn(
                                                "mr-2 h-4 w-4",
                                                driverValue === item['driverId'] ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {item['name']+' '+item['surname']}
                                            </CommandItem>
                                        ))}
                                        </CommandGroup>
                                    </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="space-y-1 grid md:grid-cols-2">
                            <Select onValueChange={handleChange}>
                                <SelectTrigger className="w-[50%]">
                                    <SelectValue placeholder={count}/>
                                </SelectTrigger>
                                <SelectContent>
                                {totalCount.map((displayAmount) => (
                                    <SelectItem value={displayAmount} key={displayAmount}>{displayAmount}</SelectItem>
                                ))}
                                </SelectContent>
                            </Select>

                            <Sheet>
								<SheetTrigger>
									<a className="w-[150%] overflow-hidden p-4" >View Drivers Breakdown</a>
								</SheetTrigger>
								<SheetContent>
									<ScrollArea className="h-[100vh] rounded-md">
										<SheetHeader>
										<SheetTitle>Breakdown of Combined Driver Data</SheetTitle>
										
                                            <NationalityGraph />

										</SheetHeader>
									</ScrollArea>
								</SheetContent>
							</Sheet>
                        </div>
                        <div className="space-y-1 text-end">
                            <Button className="w-[50%] overflow-hidden" variant="destructive" onClick={handleReset}>Reset Search</Button>
                        </div>
                    </div>
                </CardContent>

                <div className="grid auto-rows-min gap-4 md:grid-cols-1 rounded-xl border">
                    <ScrollArea className="h-[80vh] rounded-md">
                        <DriverIndividualCard driver={driver}  driverSearch={driverSearch}/>
                    </ScrollArea>
                </div>
            </div>
        </AppLayout>
    );
}