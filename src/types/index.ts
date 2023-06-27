import { ButtonProps, CheckboxProps, TextFieldProps } from "@mui/material"


export type ITextFeild = {
    dataId: string
    dataType: 'TextFeild'
} & Partial<TextFieldProps>


export type IButton = Partial<ButtonProps> & {
    dataId: string
    dataType: 'Button'
}


export type ICheckbox = Partial<CheckboxProps> & {
    dataId: string
    dataType: 'Checkbox'
} 


export type IComponent = ITextFeild |
    IButton |
    ICheckbox