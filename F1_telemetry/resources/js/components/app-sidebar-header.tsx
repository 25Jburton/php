import { Breadcrumbs } from '@/components/universal/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import AppLogoIcon from './app-logo-icon';
import { Link } from '@inertiajs/react';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    return (
        <header className="border-sidebar-border/50 flex h-16 shrink-0 items-center gap-2 border-b px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <div className=" m-3 ml-1 grid flex-1 text-end justify-end text-lg text-sidebar-primary-foreground flex">
                <span className="mb-0.5 truncate leading-none font-semibold size-12">
                    <Link href='/dashboard'>
                        <AppLogoIcon />
                    </Link>
                </span>
            </div>
        </header>
    );
}
