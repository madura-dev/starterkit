import React, { forwardRef } from 'react'
import { TextInputProps } from '@/types/form'
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(props, ref) {
   const {
	  label,
	  name,
	  errors,
	  placeholder,
	  help,
	  icon,
	  className,
	  type = 'text',
	  iconPosition = 'start',
	  ...otherProps
   } = props

   if (icon && iconPosition === 'start') {
	  return (
		  <div className="grid w-full max-w-sm items-center gap-1.5">
			 <div className="inner-input flex gap-2 items-center relative">
				<span className="input-icon bg-slate-50 border min-h-[80%] border-slate-100 w-auto flex items-center px-1 m-1 rounded-sm absolute">{icon}</span>
				<Input
					type={type}
					id={name}
					className={cn(
						'ps-12 ',
						errors ? 'border-rose-400 focus-visible:ring-1 focus-visible:ring-rose-500' : ''
					)}
					placeholder={placeholder}
					{...otherProps}
				/>
			 </div>
			 {errors && (
				 <div className="text-rose-500 text-xs font-normal">{errors}</div>
			 )}
		  </div>
	  )
   } else if (icon && iconPosition === 'end') {
	  return (
		  <div className="grid w-full max-w-sm items-center gap-1.5">
			 <div className="inner-input flex gap-2 items-center relative">
				<Input
					type={type}
					id={name}
					className={cn(
						'ps-12 ',
						errors ? 'border-rose-400 focus-visible:ring-1 focus-visible:ring-rose-500' : ''
					)}
					placeholder={placeholder}
					{...otherProps}
				/>
				<span className="input-icon bg-slate-50 border min-h-[80%] border-slate-100 w-auto flex items-center px-1 m-1 right-0 rounded-sm absolute">{icon}</span>
			 </div>
			 {errors && (
				 <div className="text-rose-500 text-xs font-normal">{errors}</div>
			 )}
		  </div>
	  )
   } else {
	  return (
		  <div className="grid w-full max-w-sm items-center gap-1.5">
			 <Input
				 type={type}
				 id={name}
				 placeholder={placeholder}
				 className={cn(
					 'ps-12 ',
					 errors ? 'border-rose-400 focus-visible:ring-1 focus-visible:ring-rose-500' : ''
				 )}
				 {...otherProps}
			 />
			 {errors && (
				 <div className="text-rose-500 text-xs font-normal">{errors}</div>
			 )}
		  </div>
	  )
   }
})

export default TextInput