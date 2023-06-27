import { RemoveCircle } from "@mui/icons-material"
import { Box, Grid, GridProps, IconButton, styled } from "@mui/material"
import { MouseEvent } from "react"


const StyledBox = styled(Grid)(({ theme }) => ({
    borderColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
    borderStyle: 'dashed',
    borderWidth: 1,
}))


export type UiItemProps = GridProps & {
    onSelect?: (e: MouseEvent<HTMLDivElement>) => void
    onRemove?: (e: MouseEvent<HTMLButtonElement>) => void
}


export const UiItem = ({ onRemove, onSelect, children, ...props }: UiItemProps) => {
    return (
        <StyledBox {...props}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
            onClick={(e) => {if (onSelect) onSelect(e)}}
            >
                {children}
                <IconButton 
                aria-label="delete" 
                color="error"
                size="small"
                onClick={(e) => {if (onRemove) onRemove(e)}}>
                    <RemoveCircle fontSize="small"  />
                </IconButton>
            </Box>
        </StyledBox>
    )
}