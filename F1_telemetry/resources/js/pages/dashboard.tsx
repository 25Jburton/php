import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];


export default function Dashboard() {
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
                                    <Label htmlFor="name">Driver Search</Label>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                                        <div className="space-y-1">
                                            <Select>
                                                <SelectTrigger className="w-[100%]">
                                                    <SelectValue placeholder="Driver Name" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="carlos_sainz">Carlos Sainz</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-1">
                                            <Button className="w-[100%]">Search Drivers</Button>
                                        </div>
                                        <div className="space-y-1 text-end">
                                            <Button className="w-[25%]" variant="destructive">Reset Search</Button>
                                        </div>
                                    </div>
                                </CardContent>
                                <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-3">
                                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                    </div>
                                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                    </div>
                                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                    </div>
                                </div>
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
                                            <Button className="w-[25%]" variant="destructive">Reset Search</Button>
                                        </div>
                                    </div>
                                </CardContent>
                                <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-3">
                                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                    </div>
                                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                    </div>
                                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>
                        <TabsContent value="combined">
                            <Card>
                                <CardHeader>
                                    <Label htmlFor="combined">Year</Label>
                                </CardHeader>
                                <CardContent className="space-y-2">
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
                                            <Button className="w-[100%]">Search Driver & Team</Button>
                                        </div>
                                        <div className="space-y-1 text-end">
                                            <Button className="w-[25%]" variant="destructive">Reset Search</Button>
                                        </div>
                                    </div>
                                </CardContent>
                                <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-3">
                                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                    </div>
                                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                    </div>
                                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
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
