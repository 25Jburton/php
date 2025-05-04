import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList} from "@/components/ui/command"
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import { CircuitsItemType } from "@/types";
import { Label } from '@/components/ui/label';

export function CircuitPopoverSearch({ circuit }: { circuit: CircuitsItemType[]; }) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    return (
        <>
            <Label htmlFor="circuit">Search Circuits</Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[100%] justify-between"
                    >
                    {value ? circuit.find((item) => item['circuitName']  === value)?value: "Searching circuits": "Search circuits"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[100%] p-0">
                    <Command>
                    <CommandInput placeholder="Search circuits..." />
                    <CommandList>
                        <CommandEmpty>No circuits found.</CommandEmpty>
                        <CommandGroup>
                        {circuit.map((item) => (
                            <CommandItem
                            key={item['circuitId']}
                            value={item['circuitName'] }
                            onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                            }}
                            >
                            <Check
                                className={cn(
                                "mr-2 h-4 w-4",
                                value === item['circuitId'] ? "opacity-100" : "opacity-0"
                                )}
                            />
                            {item['circuitName']}
                            </CommandItem>
                        ))}
                        </CommandGroup>
                    </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </>
    );
}