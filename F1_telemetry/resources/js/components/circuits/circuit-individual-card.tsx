import { type CircuitsItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { Drawer,DrawerContent,DrawerDescription,DrawerHeader,DrawerTitle,DrawerTrigger } from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from "@/components/ui/carousel";
import '../../../css/drawer.css';

export function CircuitIndividualCard({ circuit, circuitSearch }: { circuit: CircuitsItemType[], circuitSearch: CircuitsItemType[] }) {

	function getKmLength(length:string){
		return parseInt(length) / 1000;
	}
	function getMileLength(length:string){
		let lengthKm = parseInt(length) / 1000;
		return (lengthKm / 1.60934).toFixed(2);
	}

	if(circuitSearch.length > 0){
		circuit = circuitSearch;
	}
	return (
		<div className="p-4 grid auto-rows-min gap-4 md:grid-cols-4">
			{circuit.map((item) => (
				<Drawer key={item['circuitId']}>
                    <DrawerTrigger className="drawer-trigger hover:bg-red-500 hover:text-accent-foreground"> 
						<div className="drawer-trigger-content border-sidebar-border/70 dark:border-sidebar-border border">
							<Badge className='drawer-trigger-badge'>{item['country']}</Badge>
							<br/>
							<span className='drawer-trigger-text'>
								{item['circuitName']}
							</span>
						</div>
					</DrawerTrigger>
					<DrawerContent>
						<DrawerHeader className='text-center'>
                            <DrawerTitle className='drawer-title'>{item['circuitName']}</DrawerTitle>
							<DrawerDescription className='m-3'>
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
							<div></div>
						</div>
						<div className='text-center p-4 grid auto-rows-min gap-4 md:grid-cols-1'>
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