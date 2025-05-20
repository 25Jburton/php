import { Button } from '@/components/ui/button';
import { type TeamsItemType as TeamsItemType } from '@/types';
import { Drawer,DrawerContent,DrawerDescription,DrawerHeader,DrawerTitle,DrawerTrigger } from "@/components/ui/drawer"
import { Badge } from '../ui/badge';
import '../../../css/drawer.css';

export function TeamIndividualCard({ teams , teamSearch}: { teams: TeamsItemType[], teamSearch:TeamsItemType[]  }) {
    
    if(teamSearch.length > 0){
		teams = teamSearch;
	}
    return (
        <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-4">
            {teams.map((item) => (
                <Drawer key={item['teamId']}>
                    <DrawerTrigger className="drawer-trigger hover:bg-red-500 hover:text-accent-foreground"> 
                         <div className="drawer-trigger-content border-sidebar-border/70 dark:border-sidebar-border border">
                            <Badge className='drawer-trigger-badge'>{item['teamNationality']}</Badge>
                            <br/>
                            <span className='drawer-trigger-text'>
                                {item['teamName']}
                            </span>
                        </div>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader className='text-center'>
                            <DrawerTitle className='drawer-title'>{item['teamName']}</DrawerTitle>
                            <DrawerDescription className='m-3'>
                                General teams information.
                            </DrawerDescription>
                        </DrawerHeader>
                        <div className='text-center p-4 grid auto-rows-min gap-4 md:grid-cols-5 w-[100vw]'>
                            <span>{item['teamNationality'] && <span>Nationality: {item['teamNationality']}</span>}</span>
                            <span>{item['firstAppeareance'] && <span>First Appearance: {item['firstAppeareance']}</span>}</span>
                            <span>{item['constructorsChampionships'] && <span>Constructors Championships: {item['constructorsChampionships']}</span>}</span>
                            <span>{item['driversChampionships'] && <span>Drivers Championships: {item['driversChampionships']}</span>}</span>
                            <span>
                                <a href={item['url']} target='blank'>
                                    <Button variant="outline" className='text-green-500'>More Information</Button>
                                </a>
                            </span>
                        </div>
                    </DrawerContent>
                </Drawer>
            ))}
        </div>
    );
}