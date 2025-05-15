import { Button } from '@/components/ui/button';
import { type DriversItemType as DriversItemType } from '@/types';
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import { Badge } from '../ui/badge';

export function DriverIndividualCard({ driver, driverSearch }: { driver: DriversItemType[], driverSearch: DriversItemType[]  }) {

    if(driverSearch.length > 0){
		driver = driverSearch;
	}
    return (
        <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-4">
            {driver.map((item) => (
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative rounded-xl border text-center" key={item['driverId']}>
                    <Drawer>
                        <DrawerTrigger className="p-4 rounded-xl hover:bg-red-500 hover:text-accent-foreground ">
                            <Badge>{item['nationality']}</Badge><br/>{item['name']} {item['surname']}
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader className='text-center'>
                                <DrawerTitle><h1>{item['name']} {item['surname']}</h1></DrawerTitle>
                                <DrawerDescription>
                                    General driver information.
                                </DrawerDescription>
                            </DrawerHeader>
                            <div className='text-center p-4 grid auto-rows-min gap-4 md:grid-cols-4 w-[100vw]'>
                                <span>{item['number'] && <span>Car Number: {item['number']}</span>}</span>
                                <span>Nationality: {item['nationality']}</span>
                                <span>DOB: {item['birthday']}</span>
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