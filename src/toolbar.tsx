import { Box, styled } from "@mui/material"
import { Card } from "./components/card"
import { useRef } from "react"
import { CustomId } from "./utility"
import { IComponent } from "./types"


const Item = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    color: '#707070'
}))


export interface ToolBarProps {
    onComponentsAdd?: (data: IComponent) => void
    onComponentsRemove?: () => void
}

export const ToolBar = ({ onComponentsAdd }: ToolBarProps) => {
    const TextFeildId = useRef(new CustomId('txt'))
    const ButtonId = useRef(new CustomId('btn'))
    const CheckboxId = useRef(new CustomId('chb'))

    const generateComponent = (type: IComponent['dataType']): IComponent => {
        let id
        switch (type) {
            case 'Button':
                id = ButtonId.current.getId()
                return {
                    dataId: id,
                    dataType: 'Button',
                    children: id,
                    variant: 'outlined',
                }
            case 'TextFeild':
                id = TextFeildId.current.getId()
                return {
                    dataId: id,
                    dataType: 'TextFeild',
                    label: id,
                    variant: 'filled'
                }
            case 'Checkbox':
                id = CheckboxId.current.getId()
                return {
                    dataId: id,
                    dataType: 'Checkbox',
                    color: 'error'
                }
        }
    }


    return (
        <Card title="Toolbar" paddingInlineStart={0}>
            <Item onClick={() => {
                if (onComponentsAdd) onComponentsAdd(generateComponent('Button'))
            }}>Button</Item>

            <Item onClick={() => {
                if (onComponentsAdd) onComponentsAdd(generateComponent('TextFeild'))
            }}>TextFeild</Item>

            <Item onClick={() => {
                if (onComponentsAdd) onComponentsAdd(generateComponent('Checkbox'))
            }}>Checkbox</Item>
        </Card>
    )
}