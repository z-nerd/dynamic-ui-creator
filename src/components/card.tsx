import { Box, Typography, styled } from "@mui/material"
import { ReactNode } from "react"

const StyledBox = styled(Box)(({ theme }) => ({
    borderColor: theme.palette.mode === 'dark' ? '#fff' : '#b8b8b8',
    borderStyle: 'solid',
    borderWidth: 1,
}))


const StyledHeadTitle = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#707070',
    color: theme.palette.mode === 'dark' ? '#000' : '#fbfbfb',
    fontSize: 20,
    paddingInlineStart: 10,
}))


export interface CardProps {
    children: ReactNode
    title: string,
    paddingInlineStart?: number,
}


export const Card = ({ title, children, paddingInlineStart = 1.4 }: CardProps) => {
    return (
        <StyledBox>
            <StyledHeadTitle>{title}</StyledHeadTitle>
            <Box sx={{paddingInlineStart}}>
                {children}
            </Box>
        </StyledBox>
    )
}