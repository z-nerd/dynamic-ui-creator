import { styled } from "@mui/material"
import { Card } from "./components/card"
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"


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

}


const rows: GridRowsProp = [
    { id: 1, key: 'id', value: 1 },
    { id: 2, key: 'name', value: 'textbox' },
    { id: 3, key: 'class', value: '' },
]


const columns: GridColDef[] = [
    { field: 'key', headerName: 'Key', flex: 1 },
    { field: 'value', headerName: 'Value', flex: 1, editable: true },
]


export const Properties = ({ }: PropertiesProps) => {
    return (
        <Card title="Properties" paddingInlineStart={0}>
            <StyledDataGrid
                autoHeight
                rows={rows}
                columns={columns}
                hideFooter
                hideFooterPagination
                hideFooterSelectedRowCount
            />
        </Card>
    )
}