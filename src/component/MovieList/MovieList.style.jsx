import { Grid, styled } from "@mui/material";

export const MovieContainer = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
    }
}))