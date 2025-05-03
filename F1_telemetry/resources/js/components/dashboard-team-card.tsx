import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';
import { type TeamsItemType as TeamsItemType } from '@/types';
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "./ui/scroll-area";
import { TeamIndividualCard } from "./dashboard-individual-team-card";
import { TeamPopoverSearch } from "./team-popover-search";


export function TeamsCard({ teams }: { teams: TeamsItemType[]; }) {
    return (
        <Card>
            <CardHeader>
                <Label htmlFor="name">Teams Search</Label>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="space-y-1">
                        <TeamPopoverSearch teams={teams} />
                    </div>
                    <div className="space-y-1 grid md:grid-cols-2">
                        
                    </div>
                    <div className="space-y-1 text-end">
                        <Button className="w-[50%] overflow-hidden" variant="destructive">Reset Search</Button>
                    </div>
                </div>
            </CardContent>
            <ScrollArea className="h-[68vh] rounded-md border p-4">
                <TeamIndividualCard teams={teams} />
            </ScrollArea>
        </Card>
    );
}