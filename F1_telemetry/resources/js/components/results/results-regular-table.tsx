import { Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow } from "@/components/ui/table"

const sessionResults = [
  {
	driver: "Max Verstappen",
	carNumber: "1",
	team: "Red Bull Racing",
	position: "1",
	sessionTime: "1:31:44",
	retired: ""
  },
  {
	driver: "Yuki S",
	carNumber: "22",
	team: "Red Bull Racing",
	position: "2",
	sessionTime: "1:31:55",
	retired: ""
  }
]

export function ResultsTable() {

	function updateDriverCard(e: any){
		alert("Clicked Driver");
	}

  return (
	<Table>
	  <TableCaption>Driver Results from Session</TableCaption>
	  <TableHeader>
{/* 
	{"position":1,"points":26,"grid":1,"time":"1:31:44","fastLap":null,"retired":null,
	"driver":{"driverId":"max_verstappen","number":33,"shortName":"VER","url":"https://en.wikipedia.org/wiki/Max_Verstappen","name":"Max","surname":"Verstappen","nationality":"Netherlands","birthday":"30/09/1997"},
	"team":{"teamId":"red_bull","teamName":"Red Bull Racing","nationality":"Austria","firstAppareance":2005,"constructorsChampionships":6,"driversChampionships":8,"url":"https://en.wikipedia.org/wiki/Red_Bull_Racing"}} 
*/}
		<TableRow>
			<TableHead className="w-[100px] text-center">Driver</TableHead>
			<TableHead className="text-center">Car Number</TableHead>
			<TableHead className="text-center">Team</TableHead>
			<TableHead className="text-center">Position (Grid/Finish)</TableHead>
			<TableHead className="text-center">Session Time</TableHead>
			<TableHead className="text-right">Retired</TableHead>
		</TableRow>
	  </TableHeader>
	  <TableBody>
		{sessionResults.map((result) => (
		  <TableRow key={result.driver} className="text-center">
			<TableCell className="font-medium"  onClick={updateDriverCard}>{result.driver}</TableCell>
			<TableCell className="font-medium">{result.carNumber}</TableCell>
			<TableCell className="font-medium">{result.team}</TableCell>
			<TableCell>{result.position}</TableCell>
			<TableCell>{result.sessionTime}</TableCell>
			<TableCell className="text-right">{result.retired}</TableCell>
		  </TableRow>
		))}
	  </TableBody>
	</Table>
  )
}
