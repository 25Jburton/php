import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Card } from "./ui/card";
import { LoadingBlock } from "./loading-skeleton-block";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export function ErrorLoadingCard({ contentMsg }: { contentMsg: string }) {
    let loadingDescription = contentMsg;
   

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs} >
                <Head title="Dashboard" />
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[10vh] flex-1  rounded-xl  md:min-h-min">
                        <Card className="text-center">
                        <span className='text-red-500'>ERROR LOADING API CALL!<br/>{loadingDescription}</span>
                            <ScrollArea className="h-[80vh] rounded-md p-4 grid auto-rows-min gap-4 md:grid-cols-3 aspect-video">
                                    <LoadingBlock />
                                    <LoadingBlock />
                                    <LoadingBlock />
                                    
                                    <LoadingBlock />
                                    <LoadingBlock />
                                    <LoadingBlock />

                                    <LoadingBlock />
                                    <LoadingBlock />
                                    <LoadingBlock />

                                    <LoadingBlock />
                                    <LoadingBlock />
                                    <LoadingBlock />
                            </ScrollArea>
                        </Card>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}