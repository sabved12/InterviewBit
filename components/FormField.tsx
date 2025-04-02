import React from 'react'
import { FormControl, FormDescription, FormItem, FormLabel
    , FormMessage } from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { FieldValues, Control, Path, Controller} from 'react-hook-form'

interface FormFieldProps<T extends FieldValues>{
    control: Control<T>;
    name: Path<T>;
    label:string;
    placeholder:string;
    type:'text'|'email'|'password';
}

const FormField = ({control, name, label, placeholder, 
    type="text"}: FormFieldProps<T>) => {
 return(
 <Controller 
    name={name} 
    control={control} 
    render={({field})=>(
      <FormItem>
        <FormLabel className='label'>{label}</FormLabel>
        <FormControl>
          <Input 
            type={type}
            className='input'
            placeholder={placeholder}
            {...field} />
        </FormControl>
         
      </FormItem>
    )}
  />
  )
}

export default FormField