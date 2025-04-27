import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import React from 'react';
import { Button } from '@/components/ui/button';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];


export default function Dashboard() {
const [goal, setGoal] = React.useState(350)
 
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[10vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <Tabs defaultValue="driver" className="w-[100%]">
                        <TabsList className="grid w-full grid-cols-3 w-[100%]">
                            <TabsTrigger value="driver">
                                Driver
                            </TabsTrigger>
                            <TabsTrigger value="team">
                               Team
                            </TabsTrigger>
                            <TabsTrigger value="combined">
                               Combined
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="driver">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Search Options</CardTitle>
                                    <CardDescription>
                                        Apply filters to modify card page content.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Select>
                                            <SelectTrigger className="w-[30%]">
                                                <SelectValue placeholder="Driver Name" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="carlos_sainz">Carlos Sainz</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-[30%]">Search Drivers</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="team">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Search Options</CardTitle>
                                    <CardDescription>
                                        Apply filters to modify card page content.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="team">Team</Label>
                                        <Select>
                                            <SelectTrigger className="w-[30%]">
                                                <SelectValue placeholder="Theme" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="red_bull">Red Bull</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-[30%]">Search Teams</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="combined">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Search Options</CardTitle>
                                    <CardDescription>
                                        Apply filters to modify card page content.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="combined">Year</Label>
                                        <Select>
                                            <SelectTrigger className="w-[30%]">
                                                <SelectValue placeholder="Theme" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="2025">2025</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-[30%]">Search Driver & Team</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
