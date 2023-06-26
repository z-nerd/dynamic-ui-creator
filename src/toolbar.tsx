import { Box, styled } from "@mui/material"
import { Card } from "./components/card"
import { useEffect, useRef } from "react"
import { CustomId } from "./utility"


const Item = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    color: '#707070'
}))


export interface ToolBarProps {
    onComponentsAdd?: (data: any) => void
    onComponentsRemove?: () => void
}

export const ToolBar = ({ onComponentsAdd }: ToolBarProps) => {
    const TextFeildId = useRef(new CustomId('txt'))
    const ButtonId = useRef(new CustomId('btn'))
    const CheckboxId = useRef(new CustomId('fil'))


    return (
        <Card title="Toolbar" paddingInlineStart={0}>
            <Item onClick={() => {
                if (onComponentsAdd) onComponentsAdd({ id: ButtonId.current.getId(), type: 'Button' })
            }}>Button</Item>

            <Item onClick={() => {
                if (onComponentsAdd) onComponentsAdd({ id: TextFeildId.current.getId(), type: 'TextFeild' })
            }}>TextFeild</Item>

            <Item onClick={() => {
                if (onComponentsAdd) onComponentsAdd({ id: CheckboxId.current.getId(), type: 'Checkbox' })
            }}>Checkbox</Item>
        </Card>
    )
}