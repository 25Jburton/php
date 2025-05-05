import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface DriversItemType {
    driverId: string;
    name: string;
    surname: string;
    number: string;
    nationality: string;
    birthday: string;
    url: string;
}

export interface TeamsItemType {
    teamId: string;
    teamName: string;
    firstAppeareance: string;
    constructorsChampionships: string;
    teamNationality: string;
    driversChampionships: string;
    url: string;
}

export interface DriversStandingItemType {
    classificationId: string;
    points: string;
    position: string;
    wins: string;
    driver: Array;
    team: Array;
}

export interface ConstructorsStandingItemType {
    classificationId: string;
    points: string;
    position: string;
    wins: string;
    team: Array;
}

export interface CircuitsItemType {
    circuitId: string;
    circuitName: string;
    country: string;
    city: string;
    circuitLength: string;
    firstParticipationYear: string;
    lapRecord: string;
    numberOfCorners: string;
    fastestLapYear: string;
    fastestLapDriverId: string;
    fastestLapTeamId: string;
    url: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
