import { createTheme } from "@mui/material";

const theme = createTheme();

theme.typography.h2 = {
    fontSize: '2.4rem',
    '@media (min-width:600px)': {
        fontSize: '3.0rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3.75rem'
    }
}

theme.typography.body1 = {
    fontSize: '1.05rem',
    fontWeight: 301,
    lineHeight: 1.25,
    '@media (min-width:600px)': {
        fontSize: '1.25rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem'
    }
}



export default theme;