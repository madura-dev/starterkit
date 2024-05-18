import React, { forwardRef, Fragment } from 'react'
import { cn } from '@/lib/utils.js'
import { Label } from "@/components/ui/label";
import LabelHelp from "@/components/form/label-help";
import { Input } from "@/components/ui/input";


type TextInputProps = {
   label?: string
   name: string
   errors?: string
   placeholder?: string
   help?: string
   icon?: React.ReactNode
   className?: string
   onChange: (value: string) => void
   iconPosition?: 'start' | 'end',
   required?: boolean
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(props, ref) {
   const {
	  label,
	  name,
	  errors,
	  placeholder,
	  help,
	  icon,
	  className,
	  onChange,
	  iconPosition = 'start',
	  ...otherProps
   } = props

   return (
	   <>
		  {label && (
			  <Label htmlFor={name} className={cn('flex  items-center gap-1 mb-2')}>
				 <span>{label}</span>
				 {help && <LabelHelp text={help} />}
				 {props.required && (
					 <span className={'text-rose-600 font-medium'}>*</span>
				 )}
			  </Label>
		  )}
		  {icon != null ? (
			  <>
				 {iconPosition == 'end' ? (
					 <div
						 className={cn(
							 'flex h-10 focus-within:border-1 overflow-hidden focus-within:border-primary focus-within:shadow-none border rounded-md pe-1 items-center gap-1 ' +
							 className)}
					 >
						<Input
							placeholder={placeholder}
							className={cn('peer border-0 focus-visible:ring-0 shadow-none', className)}
							id={name}
							name={name}
							{...otherProps}
							onChange={e => onChange(e.target.value)}
						/>
						<span className="input-icon-addon h-100 bg-slate-100 p-1 px-3 rounded-sm">{icon}</span>
					 </div>
				 ) : (<div
						 className={cn(
							 'flex h-10 overflow-hidden border rounded-md px-3 items-center gap-1 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
							 className,
							 errors ? 'border border-rose-500 ' : ''
						 )}
					 >
						<span className="input-icon-addon">{icon}</span>
						<Input
							placeholder={placeholder}
							className={cn('peer border-0 focus-visible:ring-0 shadow-none', className)}
							id={name}
							name={name}
							{...otherProps}
							onChange={e => onChange(e.target.value)}
						/>
					 </div>
				 )}
			  </>
		  ) : (<Fragment>
				 <Input
					 {...otherProps}
					 className={cn('peer h-10', errors ? 'border border-rose-500 ' : '', props.className)}
					 placeholder={placeholder}
					 onChange={e => onChange(e.target.value)}
					 id={name}
					 name={name}
				 />
			  </Fragment>
		  )}
		  {errors && <small className="text-rose-500 mt-0">{errors}</small>}
	   </>
   )
})

export default TextInput