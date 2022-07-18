import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          transition: 'none',
          span: {
            transition: 'none',
            backgroundColor: 'green',
          },
        },
      },
    },
  },
});

export default theme;
