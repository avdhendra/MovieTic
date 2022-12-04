import { styled, Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: '0',
    textAlign: 'center',
    
}))

export const Links = styled('div')(({ theme }) => ({
    alignItems: 'center',
    fontWeight: 'bolder',
    cursor: 'pointer',
    textDecoration:'none',
    [theme.breakpoints.up('xs')]: {
        display: 'flex',
        flexDirection: 'column',
    }
}))

export const Img = styled('img')(({ theme }) => ({
    borderRadius: '20px',
    transition: 'all 0.25s ease-in-out',
    height: '300px',
    marginBottom: "10px",
    '&:hover': {
        transform:'scale(1.05)'
    },
    padding:'5px'
    
}))