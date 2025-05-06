import { Skeleton } from "./ui/skeleton";

export function LoadingBlock(){
	return (
		<>
			<div className="space-y-3">
				<Skeleton className="h-[125px]  rounded-xl" />
				<div className="space-y-2">
					<Skeleton className="h-4 " />
					<Skeleton className="h-4 w-[200px]" />
				</div>
			</div>
		</>
	);
} 