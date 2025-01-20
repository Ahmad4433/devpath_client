import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small", // Set the default size to 'small'
        fullWidth: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "1rem", // Apply padding globally to all Card components
        },
      },
    },
  },
});
