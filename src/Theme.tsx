import { createTheme } from "@mui/material";

const theme = createTheme();

theme.typography.h2 = {
    fontSize: '2.5rem',
    '@media (min-width:600px)': {
        fontSize: '3.0rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3.75rem'
    }
}



export default theme;