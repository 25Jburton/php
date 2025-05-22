import { type DriversItemType } from '@/types';

export default function DriverResults({ driver }: { driver: DriversItemType[] }){
    if(driver.length == 0){
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
               Driver Data HERE 
                - surname , name (shortName)
                - nationality
                - number
                - birthday
                - More Info (url)

                -----------------------
                - Session selected
                - raceName
                - round
                - date / time
                - time
            </div>
        </div>
    )
}