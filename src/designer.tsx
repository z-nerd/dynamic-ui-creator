import { Button, Checkbox, TextField } from "@mui/material"
import { Card } from "./components/card"
import { IComponents } from "./types"


export interface DesignerProps {
    components: IComponents[]
}

export const Designer = ({ components }: DesignerProps) => {
    return (
        <Card title="Designer">
            {
                components.map(item => {
                    switch (item.type) {
                        case 'TextFeild':
                            return (<TextField key={item.id}>txt</TextField>)
                        case 'Button':
                            return (<Button key={item.id}>btn</Button>)
                        case 'Checkbox':
                            return (<Checkbox key={item.id} />)
                        default:
                            return (<></>)
                    }
                })
            }
        </Card>
    )
}