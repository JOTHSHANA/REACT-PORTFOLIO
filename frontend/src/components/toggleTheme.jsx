import React, { useState, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Define the theme
const theme = createTheme({
    palette: {
        mode: "light", // Initially set to light mode
    },
});

const lightModeProperties = {
    "--background": "rgb(201, 223, 226)",
    "--background-1": "#ffffff",
    "--button": "#178a84",
    "--text": "#00000a",
    "--gray-text": "rgb(79, 79, 79)",
    "--button-hover": "#178a84c2",
    "--button-hover-1": "rgb(182, 224, 229)",
    "--card-hover": "#f3f9f9",
    "--light-hover": "#c8dddf",
    "--menu-hover": "#21bdb5",
    "--card": "#fff"
};

const darkModeProperties = {
    "--background": "#222831",
    "--background-1": "#31363F",
    "--button": "#178a84",
    "--text": "#e6e6e6",
    "--gray-text": "rgb(255, 255, 255)",
    "--button-hover": "#262c34",
    "--card-hover": "#28393a",
    "--light-hover": "#c8dddf",
    "--menu-hover": "#222831",
    "--card": "#31363F"
};

// Set custom properties based on theme mode
const setCustomProperties = (mode) => {
    const root = document.documentElement;
    root.style.cssText = Object.entries(
        mode === "dark" ? darkModeProperties : lightModeProperties
    )
        .map(([key, value]) => `${key}:${value};`)
        .join("");
};

// Styled switch

export default function CustomizedSwitches() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check if the user has a preference for theme stored in local storage
        const preferredTheme = localStorage.getItem("preferredTheme");
        if (preferredTheme) {
            setDarkMode(preferredTheme === "dark");
            setCustomProperties(preferredTheme);
        }
        // If not, set initial mode to light and update custom properties
        else {
            setCustomProperties("light");
        }
    }, []); // Run only on initial render

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        const mode = newMode ? "dark" : "light";
        setCustomProperties(mode); // Update custom properties based on theme mode
        localStorage.setItem("preferredTheme", mode); // Store user preference for theme
    };

    return (
        <ThemeProvider theme={theme}>
            <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </ThemeProvider>
    );
}