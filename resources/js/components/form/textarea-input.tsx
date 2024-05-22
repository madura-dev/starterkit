import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { TextareaInputProps } from "@/types/form";
import { Textarea } from "@/components/ui/textarea";

const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(function TextAreaInput(props, ref) {

   const {
	  label,
	  name,
	  errors,
	  placeholder,
	  help,
	  className,
	  ...otherProps
   } = props

   return (
	   <div className="grid w-full max-w-sm items-center gap-1.5">
		  <Textarea
			  id={name}
			  placeholder={placeholder}
			  className={cn(errors ? 'border-rose-400 focus-visible:ring-1 focus-visible:ring-rose-500' : '')}
			  {...otherProps}
		  />
		  {errors && (
			  <div className="text-rose-500 text-xs font-normal">{errors}</div>
		  )}
	   </div>
   )
})

export default TextareaInput;