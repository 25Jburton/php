import { type CircuitsItemType } from '@/types';

export default function CircuitResults({ circuit }: { circuit: CircuitsItemType[] }){
    if(circuit.length == 0){
        return (
            <div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
                <div>
                    Select Year & Circuit Values From Dropdowns  
                </div>
            </div>
        )
    }
    return(
        <div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video  rounded-xl border">
            <div>
                Circuit Data HERE
                - circuitName
                - country, city
                - circuitLength
                - firstParticipationYear
                - lapRecord
                - numberOfCorners
                - fastestLapYear
                - fastestLapDriverId / fastestLapTeamId
                - More Info (url)
            </div>
        </div>
    )
}