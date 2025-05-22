import { type TeamsItemType } from '@/types';

export default function TeamResults({ team }: { team: TeamsItemType[] }){
    if(team.length == 0){
        return (
            <div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
                <div>
                    Select A Driver From The Table Results 
                </div>
            </div>
        )
    }
    return(
        <div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
            <div>
                Team Data HERE
                    - teamName
                    - nationality
                    - firstAppareance
                    - constructorsChampionships
                    - driversChampionships
                    - More Info (url)
            </div>
        </div>
    )
}	