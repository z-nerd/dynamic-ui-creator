'use client'
import { CssBaseline, StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material"
import { ReactNode, useMemo } from "react"


export interface MuiSetupProps {
    children: ReactNode
}


export const MuiSetup = ({ children }: MuiSetupProps) => {
    const prefersDarkMode = false //useMediaQuery('(prefers-color-scheme: dark)')

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    )

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}