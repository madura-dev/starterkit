import React, { FC } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";

type SelectInputProps = {
   children: React.ReactNode;
   name: string,
   errors?: string,
   placeholder?: string,
   help?: string,
   className?: string,
   onSelect?: (value: string) => void,
   variant?: 'simple' | 'select2'
   options: Array<{ value: string, label: string }>
}

const SelectInput: React.FC<SelectInputProps> & { Item: FC<SelectItemProps> } = ({
   children, variant = 'simple', options = [], ...props
}) => {
   const [open, setOpen] = React.useState(false)
   const [value, setValue] = React.useState("")


   const handleSelect = (value: string) => {
	  setOpen(false)
	  setValue(value)
   }

   if (variant == 'simple') {
	  return (
		  <div className="grid w-full max-w-sm items-center gap-1.5">
			 <Select onValueChange={props.onSelect}>
				<SelectTrigger className="w-full">
				   <SelectValue placeholder={props.placeholder} />
				</SelectTrigger>
				<SelectContent>
				   {children}
				</SelectContent>
			 </Select>
		  </div>
	  )
   } else {
	  return (
		  <Popover open={open} onOpenChange={setOpen}>
			 <PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					className={cn('w-full justify-between')}
				>
				   {value
					   ? options.find((option) => option.value === value)?.label
					   : props.placeholder}
				   <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			 </PopoverTrigger>
			 <PopoverContent className="w-full p-0 popover-content">
				<Command>
				   <CommandInput placeholder={`Cari daftar ${props.name}...`} className="h-9" />
				   <CommandEmpty>No {props.name} found.</CommandEmpty>
				   <CommandGroup>
					  <CommandList className={'w-full'}>
						 {options.map((option) => (
							 <CommandItem
								 key={option.value}
								 value={option.value}
								 onSelect={(value) => handleSelect(value)}
							 >
								{option.label}
								<CheckIcon
									className={cn(
										"ml-auto h-4 w-4",
										value === option.value ? "opacity-100" : "opacity-0"
									)}
								/>
							 </CommandItem>
						 ))}
					  </CommandList>
				   </CommandGroup>
				</Command>
			 </PopoverContent>
		  </Popover>
	  )
   }
}

type SelectItemProps = {
   value: string;
   label: string;
}
const Item: React.FC<SelectItemProps> = ({ value, label }) => {
   return (
	   <SelectItem value={value}>{label}</SelectItem>
   )
}

SelectInput.Item = Item;

export default SelectInput;