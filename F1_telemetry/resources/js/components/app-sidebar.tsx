import { NavFooter } from '@/components/nav/nav-footer';
import { NavMain } from '@/components/nav/nav-main';
import { NavUser } from '@/components/user-settings/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, CarIcon, LayoutGrid, LogsIcon, MapIcon, PersonStandingIcon, TrophyIcon } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
		icon: LayoutGrid,
	},
	{
		title: 'Drivers',
		href: '/drivers',
		icon: PersonStandingIcon,
	},
	{
		title: 'Teams',
		href: '/teams',
		icon: CarIcon,
	},
	{
		title: 'Circuits',
		href: '/circuits',
		icon: MapIcon,
	},
	{
		title: 'Standings',
		href: '/standings',
		icon: LogsIcon,
	},
	{
		title: 'Results',
		href: '/results',
		icon: TrophyIcon,
	},
];
const footerNavItems: NavItem[] = [
	{
		title: 'F1',
		href: 'https://f1.com',
		icon: CarIcon,
	},
	{
		title: 'F1 API',
		href: 'https://f1api.dev/',
		icon: BookOpen,
	},
];

export function AppSidebar() {
	return (
		<Sidebar collapsible="icon" variant="inset">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link href="/dashboard" prefetch>
								<AppLogo />
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				<NavMain items={mainNavItems} />
			</SidebarContent>

			<SidebarFooter>
				<NavFooter items={footerNavItems} className="mt-auto" />
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	);
}
