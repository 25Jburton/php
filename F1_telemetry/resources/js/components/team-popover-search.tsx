import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList} from "@/components/ui/command"
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import { TeamsItemType } from "@/types";

export function TeamPopoverSearch({ teams }: { teams: TeamsItemType[] }) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[100%] justify-between"
                >
                {value ? teams.find((item) => item['teamName'] === value)?value: "Searching Teams": "Search Teams"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[100%] p-0">
                <Command>
                <CommandInput placeholder="Search teams..." />
                <CommandList>
                    <CommandEmpty>No teams found.</CommandEmpty>
                    <CommandGroup>
                    {teams.map((item) => (
                        <CommandItem
                        key={item['teamId']}
                        value={item['teamName']}
                        onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                        }}
                        >
                        <Check
                            className={cn(
                            "mr-2 h-4 w-4",
                            value === item['teamId'] ? "opacity-100" : "opacity-0"
                            )}
                        />
                        {item['teamName']}
                        </CommandItem>
                    ))}
                    </CommandGroup>
                </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}