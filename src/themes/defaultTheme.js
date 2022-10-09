import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          transition: 'none',
          height: '20px',
          span: {
            transition: 'none',
            backgroundColor: 'blue',
          },
        },
      },
    },
  },
});

export default theme;
