import { type CircuitsItemType } from '@/types';
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from "@/components/ui/carousel"
export function CircuitIndividualCard({ circuit, circuitSearch }: { circuit: CircuitsItemType[], circuitSearch: CircuitsItemType[] }) {

	function getKmLength(length:string){
		return parseInt(length) / 100;
	}
	function getMileLength(length:string){
		let lengthKm = parseInt(length) / 100;
		return (lengthKm / 1.60934).toFixed(2);
	}

	if(circuitSearch.length > 0){
		circuit = circuitSearch;
	}
	return (
		<div className="p-4 grid auto-rows-min gap-4 md:grid-cols-6">
			{circuit.map((item) => (
				<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative rounded-xl border text-center" key={item['circuitId']}>
					<Drawer>
						<DrawerTrigger className="p-4 rounded-xl hover:bg-red-500 hover:text-accent-foreground ">
							{item['circuitName']}
							<br/>
							<Badge>{item['country']}</Badge>
						</DrawerTrigger>
						<DrawerContent>
							<DrawerHeader className='text-center'>
								<DrawerTitle >{item['circuitName']}</DrawerTitle>
								<DrawerDescription>
									General circuit information.
								</DrawerDescription>
							</DrawerHeader>
							<div className='text-center p-4 grid auto-rows-min gap-4 md:grid-cols-3'>
								<div></div>
								<Carousel opts={{align: "start"}}>
									<CarouselContent>
										<CarouselItem className="md:basis-1/2 lg:basis-1/3">
											<div className="p-1">
											<Card>
												<CardContent className="flex aspect-square items-center justify-center p-6">
												<span>{item['country']} <br/> City: {item['city']}</span>
												</CardContent>
											</Card>
											</div>
										</CarouselItem>
										{item['circuitLength'] &&
										<CarouselItem  className="md:basis-1/2 lg:basis-1/3">
											<div className="p-1">
											<Card>
												<CardContent className="flex aspect-square items-center justify-center p-6">
												<span>Circuit Length {getKmLength(item['circuitLength'])} Km <br/>({getMileLength(item['circuitLength'])} Miles)</span>
												</CardContent>
											</Card>
											</div>
										</CarouselItem>
										}
										{item['numberOfCorners'] && 
										<CarouselItem  className="md:basis-1/2 lg:basis-1/3">
											<div className="p-1">
											<Card>
												<CardContent className="flex aspect-square items-center justify-center p-6">
												<span>{item['numberOfCorners']} Corners</span>
												</CardContent>
											</Card>
											</div>
										</CarouselItem>
										}
										{item['firstParticipationYear'] &&
										<CarouselItem  className="md:basis-1/2 lg:basis-1/3">
											<div className="p-1">
											<Card>
												<CardContent className="flex aspect-square items-center justify-center p-6">
												<span>First Year: {item['firstParticipationYear']}</span>
												</CardContent>
											</Card>
											</div>
										</CarouselItem>
										}
										{item['lapRecord'] &&
										<CarouselItem  className="md:basis-1/2 lg:basis-1/3">
											<div className="p-1">
											<Card>
												<CardContent className="flex aspect-square items-center justify-center p-6">
													<span>
														Lap Record: {item['lapRecord']} - {item['fastestLapYear']}
														<br/>
														Driver: {item['fastestLapDriverId']} 
														<br/> 
														Team: {item['fastestLapTeamId']}
													</span>
												</CardContent>
											</Card>
											</div>
										</CarouselItem>
										}
									</CarouselContent>
									<CarouselPrevious />
									<CarouselNext />
								</Carousel>
								{/* <span>Country: {item['country']} <br/> City: {item['city']}</span>
								{item['circuitLength'] && <span>Circuit Length {getKmLength(item['circuitLength'])} Km ({getMileLength(item['circuitLength'])} Miles)</span>}
								{item['numberOfCorners'] && <span>Number Of Corners: {item['numberOfCorners']}</span>}
								{item['firstParticipationYear'] && <span>First Year: {item['firstParticipationYear']}</span>}
								<span>
									{item['lapRecord'] && <span>Lap Record: {item['lapRecord']} - {item['fastestLapYear']}</span>}
									{item['fastestLapDriverId'] && <span><br/>Driver: {item['fastestLapDriverId']} <br/> Team: {item['fastestLapTeamId']}</span>}
								</span> */}
								<div></div>
							</div>
							<div className='text-center p-4 grid auto-rows-min gap-4 md:grid-cols-1'>
								<span>
									<a href={item['url']} target='blank'>
										<Badge variant="outline" className='text-green-500 p-4 hover:bg-primary hover:text-destructive'>More Information</Badge>
									</a>
								</span>
							</div>
							<DrawerFooter>
							<DrawerClose>
								<Badge variant="outline" className='text-red-500 p-4 hover:bg-primary' style={{cursor:'pointer'}}>Cancel</Badge>
							</DrawerClose>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</div>
			))}
		</div>
	);
}