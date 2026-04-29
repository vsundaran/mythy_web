import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD54F',
      light: 'rgba(255, 213, 79, 0.15)',
      dark: '#FFC107',
      contrastText: '#000000',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0A0A0',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '0.85rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
        },
        contained: ({ ownerState }: { ownerState: any }) => ({
          ...(ownerState.color === 'primary' && {
            '&:hover': {
              backgroundColor: '#FFC107',
            },
          }),
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
