import { Button } from '@/components/ui/button';
import { type DriversItemType as DriversItemType } from '@/types';
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import { Badge } from '../ui/badge';
import '../../../css/drivers.css';

export function DriverIndividualCard({ driver, driverSearch }: { driver: DriversItemType[], driverSearch: DriversItemType[]  }) {

    if(driverSearch.length > 0){
		driver = driverSearch;
	}
    return (
        <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-4">
            {driver.map((item) => (
                <Drawer key={item['driverId']}>
                    <DrawerTrigger className="drawer-trigger hover:bg-red-500 hover:text-accent-foreground focus:bg-red-500">
                        <div className="drawer-trigger-content border-sidebar-border/70 dark:border-sidebar-border border">
                                <Badge className='drawer-trigger-badge'>{item['nationality']}</Badge>
                                <br/>
                                <span className='drawer-trigger-text'>
                                    {item['name']} {item['surname']}
                                </span>
                        </div>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader className='text-center'>
                            <DrawerTitle className='drawer-title'>{item['name']} {item['surname']}</DrawerTitle>
                            <DrawerDescription>
                                General driver information.
                            </DrawerDescription>
                        </DrawerHeader>
                        <div className='text-center p-4 grid auto-rows-min gap-4 md:grid-cols-4 w-[100vw]'>
                            <span>{item['number'] && <span>Car Number: {item['number']}</span>}</span>
                            <span>
                                Nationality: 
                                <span>{item['nationality']}</span>
                            </span>
                            <span>DOB: {item['birthday']}</span>
                            <span >
                                <a href={item['url']} target='blank'>
                                    <Button variant="outline" className='text-green-500'>More Information</Button>
                                </a>
                            </span>
                        </div>
                        <DrawerFooter>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            ))}
        </div>
    );
}