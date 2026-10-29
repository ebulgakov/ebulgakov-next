"use client";

import { createTheme } from "@mui/material/styles";
import NextLink from "next/link";

const headingColor = "#162456";

const theme = createTheme({
  cssVariables: true,
  breakpoints: {
    // Aligned with Tailwind breakpoints so `md:`/`lg:` classes and MUI props agree
    values: { xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280 }
  },
  palette: {
    mode: "light",
    primary: {
      main: "#5297e1",
      light: "#9eebff",
      contrastText: "#eff6ff"
    },
    secondary: {
      main: "#f4f4f5",
      contrastText: "#18181b"
    },
    error: {
      main: "#e7000b"
    },
    text: {
      primary: "#3e3e3e",
      secondary: "#71717b"
    },
    divider: "#e4e4e7"
  },
  shape: {
    borderRadius: 10
  },
  typography: {
    fontFamily: "var(--font-sans), sans-serif",
    h1: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.3,
      color: headingColor,
      "@media (min-width:768px)": { fontSize: "1.875rem" },
      "@media (min-width:1024px)": { fontSize: "2.25rem" }
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.3,
      color: headingColor,
      "@media (min-width:768px)": { fontSize: "1.5rem" },
      "@media (min-width:1024px)": { fontSize: "1.875rem" }
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.4,
      color: headingColor,
      "@media (min-width:768px)": { fontSize: "1.25rem" },
      "@media (min-width:1024px)": { fontSize: "1.5rem" }
    },
    button: {
      textTransform: "none"
    }
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl"
      }
    },
    MuiTypography: {
      variants: [
        { props: { variant: "h1" }, style: { marginTop: "2.5rem", marginBottom: "1.75rem" } },
        { props: { variant: "h2" }, style: { marginTop: "0.5rem", marginBottom: "0.25rem" } },
        { props: { variant: "h3" }, style: { marginTop: "2rem", marginBottom: "0.5rem" } }
      ]
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    },
    // Route every MUI link (Link, Button/Chip/CardActionArea/ListItemButton with href)
    // through next/link, so Server Components can use `href` without passing `component`
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: NextLink
      }
    },
    MuiLink: {
      defaultProps: {
        component: NextLink,
        underline: "hover"
      }
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: "small"
      }
    }
  }
});

export { theme };
