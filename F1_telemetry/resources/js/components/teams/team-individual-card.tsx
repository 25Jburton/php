import { Button } from '@/components/ui/button';
import { type TeamsItemType as TeamsItemType } from '@/types';
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import { Badge } from '../ui/badge';

export function TeamIndividualCard({ teams , teamSearch}: { teams: TeamsItemType[], teamSearch:TeamsItemType[]  }) {
    
    if(teamSearch.length > 0){
		teams = teamSearch;
	}
    return (
        <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-4">
            {teams.map((item) => (
                <div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative rounded-xl border text-center">
                    <Drawer>
                        <DrawerTrigger className="p-4 rounded-xl hover:bg-red-500 hover:text-accent-foreground "> 
                            <Badge>{item['teamNationality']}</Badge><br/>{item['teamName']}
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader className='text-center'>
                                <DrawerTitle><h1>{item['teamName']}</h1></DrawerTitle>
                                <DrawerDescription>
                                    General teams information.
                                </DrawerDescription>
                            </DrawerHeader>
                            <div className='text-center p-4 grid auto-rows-min gap-4 md:grid-cols-5 w-[100vw]'>
                                <span>{item['teamNationality'] && <span>Nationality: {item['teamNationality']}</span>}</span>
                                <span>{item['firstAppeareance'] && <span>First Appearance: {item['firstAppeareance']}</span>}</span>
                                <span>{item['constructorsChampionships'] && <span>Constructors Championships: {item['constructorsChampionships']}</span>}</span>
                                <span>{item['driversChampionships'] && <span>Drivers Championships: {item['driversChampionships']}</span>}</span>
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