import { createTheme } from "@mui/material/styles";

// Create a theme instance that matches the CSS variables
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3b82f6", // Matches --primary in light mode
      contrastText: "#ffffff",
    },
    text: {
      primary: "#171717", // Matches --foreground in light mode
      secondary: "#6b7280", // Matches --muted-foreground in light mode
    },
    background: {
      default: "#ffffff", // Matches --background in light mode
      paper: "#ffffff",
    },
    divider: "#e5e7eb", // Matches --border in light mode
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif", // Matches body font-family
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "0.5rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "0.75rem",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "0.375rem",
        },
      },
    },
  },
});

// Create a dark theme that matches dark mode CSS variables
export const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: "dark",
    primary: {
      main: "#60a5fa", // Matches --primary in dark mode
      contrastText: "#171717",
    },
    text: {
      primary: "#ededed", // Matches --foreground in dark mode
      secondary: "#9ca3af", // Matches --muted-foreground in dark mode
    },
    background: {
      default: "#0a0a0a", // Matches --background in dark mode
      paper: "#0a0a0a",
    },
    divider: "#374151", // Matches --border in dark mode
  },
});
