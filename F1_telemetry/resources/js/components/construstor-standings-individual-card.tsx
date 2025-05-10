import { Button } from '@/components/ui/button';
import { type ConstructorsStandingItemType } from '@/types';
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Icon } from './icon';
import {CrownIcon, Trophy } from 'lucide-react';
export function ConstructorStandingsIndividualCard({ standings, year }: { standings: ConstructorsStandingItemType[], year: string }) {
	return (
		<div className="p-4 grid auto-rows-min gap-4 md:grid-cols-3">
			{standings && standings.map((item) => (
				<div className="p-4 border-sidebar-border/70 dark:border-sidebar-border relative rounded-xl border text-center">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="ghost"><Label className="text-right">{item['position']}</Label> {item['team']['teamName']}</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle>{item['team']['teamName']} - {item['team']['country']}</DialogTitle>
								<DialogDescription>
									General Standings Information {year}
								</DialogDescription>
							</DialogHeader>
							<div className="grid gap-4 py-4">
								<DialogDescription>
									Team Information
								</DialogDescription>
								<div className="grid grid-cols-6 items-center gap-4">
									<Label htmlFor="name" className="text-right">
										Position
									</Label>
									<span> 
										<p className='mb-1'>{item['position']} </p>
									</span>

									<Label htmlFor="name" className="text-right">
										Points
									</Label>
									<span>
										<p className='mb-1'>{item['points']} </p>
									</span>

									<Label htmlFor="name" className="text-right">
										Wins
									</Label>
									<span>
										<p className='mb-1'>{parseInt(item['wins']) > 0 ? item['wins'] : 0} </p>
									</span>
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="name" className="text-center">
										Constructors Championships
										<br/>
										<p className='mb-1 p-4'>
											{parseInt(item['team']['constructorsChampionships']) > 0 ? item['team']['constructorsChampionships'] : 0} 
										</p>
									</Label>
									<span> 
										<p className='mb-1 p-4'>
											{(() => {
												const elements = [];
												for (let i = 0; i < parseInt(item['team']['constructorsChampionships']); i++) {
													elements.push(<Icon iconNode={Trophy}></Icon>);
												}
												return elements;
											})()}
										</p>
									</span>

									<Label htmlFor="name" className="text-center">
										Drivers Championships
										<br/>
										<p className='mb-1 p-4'>
											{parseInt(item['team']['driversChampionships']) > 0 ? item['team']['driversChampionships'] : 0} 
										</p>
									</Label>
									<span> 
										<p className='mb-1 p-4'>
											{(() => {
												const elements = [];
												for (let i = 0; i < parseInt(item['team']['driversChampionships']); i++) {
													elements.push(<Icon iconNode={CrownIcon}></Icon>);
												}
												return elements;
											})()}
										</p>
									</span>
								</div>
								<DialogDescription>
									First Appearance {item['team']['firstAppareance']}
								</DialogDescription>
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