import { Button } from '@/components/ui/button';
import { type CircuitsItemType } from '@/types';
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"

export function CircuitIndividualCard({ circuit }: { circuit: CircuitsItemType[] }) {
    return (
        <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-6">
            {circuit.map((item) => (
                <div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative rounded-xl border text-center">
                    <Drawer>
                        <DrawerTrigger className="p-4 rounded-xl hover:bg-red-500 hover:text-accent-foreground ">{item['circuitName']}</DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader className='text-center'>
                                <DrawerTitle><h1>{item['circuitName']}</h1></DrawerTitle>
                                <DrawerDescription>
                                    General circuit information.
                                </DrawerDescription>
                            </DrawerHeader>
                            <div className='text-center p-4 grid auto-rows-min gap-4 md:grid-cols-3 w-[100vw]'>
                                <span>Country: {item['country']} <br/> City: {item['city']}</span>
                                {item['circuitLength'] && <span>Circuit Length {item['circuitLength']}</span>}
                                {item['numberOfCorners'] && <span>Number Of Corners: {item['numberOfCorners']}</span>}
                                {item['firstParticipationYear'] && <span>First Year: {item['firstParticipationYear']}</span>}
                                <span>
                                    {item['lapRecord'] && <span>Lap Record: {item['lapRecord']} {item['fastestLapYear']}</span>}
                                    {item['fastestLapDriverId'] && <span><br/>Driver: {item['fastestLapDriverId']} <br/> Team: {item['fastestLapTeamId']}</span>}
                                </span>
                                <span >
                                    <a href={item['url']} target='blank'>
                                        <Button variant="outline" className='text-green-500'>More Information</Button>
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