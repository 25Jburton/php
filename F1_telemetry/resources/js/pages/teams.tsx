import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { LoadingCard } from '@/components/loading/loading-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList} from "@/components/ui/command"
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { TeamIndividualCard } from "@/components/teams/team-individual-card";
import { CardContent } from "@/components/ui/card";
import {Sheet,SheetContent,SheetHeader,SheetTitle,SheetTrigger} from "@/components/ui/sheet";
import TeamsNationalityGraph from "@/components/graphs/teams-nationality-graph";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Teams',
        href: '/teams',
    },
];

export default function Teams() {
    const [team, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [teamSearch, setTeamSearch] = useState([]);
    const [teamValue, setTeamValue] = useState("");
    const [count, setCount] = useState('50');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            if(teamValue){
                try {
                   const response = await fetch('http://f1_telemetry.test/getTeam/'+encodeURIComponent(teamValue));
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    let searchData = await response.json();
                    setTeamSearch(searchData['teams']);
      
                    const responseAll = await fetch('http://f1_telemetry.test/allTeams/'+count);
                    if (!responseAll.ok) {
                        throw new Error(`HTTP error! status: ${responseAll.status}`);
                    }
                    let actualData = await responseAll.json();
                    setTeams(actualData['teams']);
                } catch (e) {
                    const error = e;
                } finally {
                    setIsLoading(false);
                }
            }else{
                try {
                  const response = await fetch('http://f1_telemetry.test/allTeams/'+count);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    let actualData = await response.json();
                    setTeams(actualData['teams']);
                } catch (e) {
                    const error = e;
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchData();
    }, [count, teamValue]);
    if (isLoading) {
        return <LoadingCard contentType="teams" />
    }

    const totalCount = ['10','25','50','100','500'];
    const handleChange  = (yearValue: any) => {
        setCount(yearValue);
    };

    const handleReset  = () => {
        setTeamValue("");
        setTeamSearch([]);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Teams" />
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
                                    {teamValue ? team.find((item) => item['teamName']  === teamValue)?teamValue: "Searching Teams": "Search Teams"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[100%] p-0">
                                    <Command>
                                    <CommandInput placeholder="Search teams..." />
                                    <CommandList>
                                        <CommandEmpty>No circuits found.</CommandEmpty>
                                        <CommandGroup>
                                        {team.map((item) => (
                                            <CommandItem
                                            style={{cursor:'pointer'}}
                                            key={item['teamId']}
                                            value={item['teamName']}
                                            onSelect={(currentValue) => {
                                                setTeamValue(currentValue === teamValue ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                            >
                                            <Check
                                                className={cn(
                                                "mr-2 h-4 w-4",
                                                teamValue === item['teamId'] ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {item['teamName']}
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
								<SheetTrigger className="w-[150%] overflow-hidden p-4" variant="secondary">
									View Teams Breakdown
								</SheetTrigger>
								<SheetContent>
									<ScrollArea className="h-[100vh] rounded-md">
										<SheetHeader>
										<SheetTitle>Breakdown of Combined Teams Data</SheetTitle>
											<TeamsNationalityGraph />
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
                    <span className="drawer-header-text">Formula 1 Teams Search</span>
                    <ScrollArea className="h-[80vh] rounded-md">
                        <TeamIndividualCard teams={team}  teamSearch={teamSearch}/>
                    </ScrollArea>
                </div>
            </div>
        </AppLayout>
    );
}