import { Button } from '@/components/ui/button';
import { type ConstructorsStandingItemType } from '@/types';
import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Icon } from '../universal/icon';
import { CrownIcon, Trophy } from 'lucide-react';
import { Badge } from '../ui/badge';
import '../../../css/drawer.css';

export function ConstructorStandingsIndividualCard({ standings, year }: { standings: ConstructorsStandingItemType[], year: string }) {
	return (
		<div className="p-4 grid auto-rows-min gap-4 md:grid-cols-3">
			{standings && standings.map((item) => (
				<div key={item['position']} className="drawer-trigger p-4 border-sidebar-border/70 dark:border-sidebar-border relative rounded-xl border text-center hover:bg-red-500 drawer-trigger-text">
					<Dialog>
						<DialogTrigger asChild className='m-3'>
							<div>
								<span className='p-3'>
									{item['team']['teamName']}
								</span>
								<Badge variant="secondary" className='w-[100%] p-3'>
									{item['position']}
									<br/>
									{item['points']} Points 
								</Badge>
                            </div>
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