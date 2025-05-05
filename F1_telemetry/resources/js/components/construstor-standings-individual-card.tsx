import { Button } from '@/components/ui/button';
import { type ConstructorsStandingItemType } from '@/types';
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"

export function ConstructorStandingsIndividualCard({ standings }: { standings: ConstructorsStandingItemType[] }) {
    return (
        <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-3">
            {standings.map((item) => (
                <div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative rounded-xl border text-center">
                    <Drawer>
                        <DrawerTrigger className="p-4 rounded-xl hover:bg-red-500 hover:text-accent-foreground ">{item['position']} - {item['team']['teamName']}</DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader className='text-center'>
                                <DrawerTitle><h1>{item['position']} - {item['team']['teamName']}</h1></DrawerTitle>
                                <DrawerDescription>
                                    General Constructors standings information.
                                </DrawerDescription>
                            </DrawerHeader>
                            <div className='text-center p-4 grid auto-rows-min gap-4 md:grid-cols-4 w-[100vw]'>
                                <span>Position: {item['position']} <br/> Points: {item['points']} <br/> Wins: {item['wins']}</span>
                                <span>Team: {item['team']['teamName']} <br/> Nationality: {item['team']['country']}</span>
                                {item['team']['constructorsChampionships'] && <span>Constructors Championships: {item['team']['constructorsChampionships']} <br/> Drivers Championships: {item['team']['driversChampionships']}</span>}
                                <span >
                                    <a href={item['team']['url']} target='blank'>
                                        <Button variant="outline" className='text-green-500'>More Team Information</Button>
                                    </a>
                                </span>
                            </div>
                            <DrawerFooter>
                            <DrawerClose>
                                <Button variant="outline" className='text-red-500'>Cancel</Button>
                            </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            ))}
        </div>
    );
}