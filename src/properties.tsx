import { styled } from "@mui/material"
import { Card } from "./components/card"
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { IComponent } from "./types"


const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    "& .MuiDataGrid-columnHeaders": { display: "none" },
    // "& .MuiDataGrid-virtualScroller": { overflow: 'hidden' },
    "& .MuiDataGrid-cell": {
        borderInlineStart: "2px solid lightgray",
    },
    '& .MuiDataGrid-cell:first-of-type': {
        borderInlineStart: "none",
    },
    '& .MuiDataGrid-cell:last-child': {
        borderInlineStart: "none",
    },

    "& .MuiDataGrid-row": {
        borderBlockStart: "2px solid lightgray",
    },
    "& .MuiDataGrid-row:first-of-type": {
        borderBlockStart: "none",
    },
}))


export interface PropertiesProps {
    component?: IComponent
    onComponentsUpdate?: (item: IComponent) => void
}


export const Properties = ({ component, onComponentsUpdate }: PropertiesProps) => {
    const rows: GridRowsProp = component
        ?
        (() => {
            const { dataId, dataType, ...show } = component

            return Object.entries(show).map((item, index) => {
                return {
                    id: index,
                    key: item[0],
                    value: item[1],
                }
            })
        })()
        : []

    const columns: GridColDef[] = [
        { field: 'key', headerName: 'Key', flex: 1 },
        { field: 'value', headerName: 'Value', flex: 1, editable: true },
    ]

    return (
        <Card title="Properties" paddingInlineStart={0}>
            <StyledDataGrid
                autoHeight
                rows={rows}
                columns={columns}
                hideFooter
                hideFooterPagination
                hideFooterSelectedRowCount
                processRowUpdate={(n) => {
                    if(onComponentsUpdate && component) {
                        onComponentsUpdate({
                            ...component, 
                            [n.key]: n.value
                        })
                    }
                    return n
                }}
            />
        </Card>
    )
}