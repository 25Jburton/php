import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList} from "@/components/ui/command"
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import { DriversItemType } from "@/types";

export function DriverPopoverSearch({ driver }: { driver: DriversItemType[] }) {
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
                {value ? driver.find((item) => item['name'] +' '+ item['surname'] === value)?value: "Searching Drivers": "Search Drivers"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[100%] p-0">
                <Command>
                <CommandInput placeholder="Search Drivers..." />
                <CommandList>
                    <CommandEmpty>No Drivers found.</CommandEmpty>
                    <CommandGroup>
                    {driver.map((item) => (
                        <CommandItem
                        key={item['driverId']}
                        value={item['name'] +' '+ item['surname']}
                        onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                        }}
                        >
                        <Check
                            className={cn(
                            "mr-2 h-4 w-4",
                            value === item['driverId'] ? "opacity-100" : "opacity-0"
                            )}
                        />
                        {item['name']} {item['surname']}
                        </CommandItem>
                    ))}
                    </CommandGroup>
                </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}