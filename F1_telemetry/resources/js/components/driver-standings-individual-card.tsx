import { Button } from '@/components/ui/button';
import { type DriversStandingItemType } from '@/types';
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Icon } from './ui/icon';
import { CrownIcon } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
export function DriverStandingsIndividualCard({ standings, year }: { standings: DriversStandingItemType[], year:string }) {
	return (
		<div className="p-4 grid auto-rows-min gap-4 md:grid-cols-3">
			{standings && standings.map((item) => (
				<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative rounded-xl border text-center">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="ghost"><Label className="text-right">{item['position']}</Label> {item['driver']['name']} {item['driver']['surname']}
						</Button>
					</DialogTrigger>
						<br/>
						<Badge>{item['points']}</Badge>
						<br/>
						<Badge variant="outline">{item['team']['teamName']}</Badge>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>{item['driver']['name']} {item['driver']['surname']} - {item['driver']['nationality']}</DialogTitle>
							<DialogDescription>
								General Standings Information {year}
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<DialogDescription>
								Driver Information
							</DialogDescription>
							<div className="grid grid-cols-6 items-center gap-4">
								<Label className="text-right">
									Position
								</Label>
								<span> 
									<p className='mb-1'>{item['position']} </p>
								</span>

								<Label className="text-right">
									Points
								</Label>
								<span>
									<p className='mb-1'>{item['points']} </p>
								</span>
								
								<Label htmlFor="name" className="text-center">
									Wins
									<br/>
									<p className='mb-1 p-4'>
										{parseInt(item['wins']) > 0 ? item['wins'] : 0} 
									</p>
								</Label>
								<span> 
									<p className='mb-1 p-4'>
										{(() => {
											const elements = [];
											for (let i = 0; i < parseInt(item['wins']); i++) {
												elements.push(<Icon iconNode={CrownIcon}></Icon>);
											}
											return elements;
										})()}
									</p>
								</span>





							</div>
							<div className="grid grid-cols-1 items-center gap-4 text-center">
								<span>
									<a href={item['driver']['url']} target='blank'>
										<Button variant="outline" className='text-green-500 mb-3'>More Driver Information</Button>
									</a>
								</span>
							</div>
							<DialogDescription>
								Teams Information
							</DialogDescription>
							<div className="grid grid-cols-1 items-center gap-4">
								<span> 
									<p className='mb-1'>{item['team']['teamName']} </p>
								</span>
								<span>
									<p className='mb-1'>{item['team']['country']} </p>
								</span>
							</div>
							<div className="grid grid-cols-1 items-center gap-4 text-center">
								<span>
									<a href={item['team']['url']} target='blank'>
										<Button variant="outline" className='text-green-500'>More Team Information</Button>
									</a>
								</span>
							</div>
						</div>
					</DialogContent>
				</Dialog>
				</div>
			))}
		</div>
	);
}