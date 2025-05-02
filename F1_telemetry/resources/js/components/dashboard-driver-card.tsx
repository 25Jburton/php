import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { type DriversItemType as DriversItemType } from '@/types';
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "./ui/scroll-area";
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from "@/components/ui/select"
import { DriverIndividualCard } from "./dashboard-individual-driver-card";
import { DriverPopoverSearch } from "./driver-popover-search";


export function DriverCard({ driver}: { driver: DriversItemType[]; }) {
	return (
		<Card>
			<CardHeader>
				<Label htmlFor="name">Driver Search</Label>
			</CardHeader>
			<CardContent className="space-y-2">
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<div className="space-y-1">
						<DriverPopoverSearch driver={driver} />
					</div>
					<div className="space-y-1 grid md:grid-cols-2">
						<Button className="w-[100%]">Search Driver</Button>
					</div>
					<div className="space-y-1 text-end">
						<Button className="w-[50%] overflow-hidden" variant="destructive">Reset Search</Button>
					</div>
				</div>
			</CardContent>
			<ScrollArea className="h-[68vh] rounded-md border p-4">
				<DriverIndividualCard driver={driver} />
			</ScrollArea>
		</Card>
	);
}