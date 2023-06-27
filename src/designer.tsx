import { Button, Checkbox, Grid, TextField } from "@mui/material"
import { Card } from "./components/card"
import { IComponent } from "./types"
import { UiItem } from "./components/ui-item"
import { SyntheticEvent } from "react"


export interface DesignerProps {
    components: IComponent[]
    onSelect?: (e: IComponent) => void
    onRemove?: (e: IComponent) => void
}

export const Designer = ({ onRemove, onSelect, components }: DesignerProps) => {
    const handleSelect = (e: SyntheticEvent<HTMLDivElement>) => {
        if (onSelect) {
            const element = components.find(item => item.dataId === e.currentTarget.children[0].getAttribute('data-id'))
            if (element) onSelect(element)
        }
    }

    const handleRemove = (e: SyntheticEvent<HTMLButtonElement>) => {
        if (onRemove) {
            const element = components.find(item => item.dataId === e.currentTarget.parentElement?.children[0].getAttribute('data-id'))
            if (element) onRemove(element)
        }
    }


    return (
        <Card title="Designer">
            <Grid container alignItems={'center'}>
                {
                    components.map(item => {
                        const { dataId, dataType, ...allProps } = item
                        switch (item.dataType) {
                            case 'TextFeild':
                                return (
                                    <UiItem item xs={6}
                                        key={dataId}
                                        onSelect={(e) => {
                                            handleSelect(e)
                                        }}
                                        onRemove={(e) => {
                                            handleRemove(e)
                                        }}>
                                        <TextField
                                            data-id={dataId}
                                            data-type={dataType}
                                            {...allProps as any}
                                        >txt</TextField>
                                    </UiItem>
                                )
                            case 'Button':
                                return (
                                    <UiItem item xs={6}
                                        key={dataId}
                                        onSelect={(e) => {
                                            handleSelect(e)
                                        }}
                                        onRemove={(e) => {
                                            handleRemove(e)
                                        }}>
                                        <Button
                                            data-id={dataId}
                                            data-type={dataType}
                                            {...allProps as any}
                                        />
                                    </UiItem>
                                )
                            case 'Checkbox':
                                return (
                                    <UiItem item xs={6} md={6} lg={6}
                                        key={dataId}
                                        onSelect={(e) => {
                                            handleSelect(e)
                                        }}
                                        onRemove={(e) => {
                                            handleRemove(e)
                                        }}>
                                        <Checkbox
                                            data-id={dataId}
                                            data-type={dataType}
                                            {...allProps as any}
                                        />
                                    </UiItem>
                                )
                            default:
                                return (<></>)
                        }
                    })
                }
            </Grid>
        </Card>
    )
}