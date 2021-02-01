import React from "react";

const toggleDarkModel = () => {};

const theme = {
	darkModeActive: false,
	toggleDarkModel,
};

const ThemeContext = React.createContext(theme);

export default ThemeContext;
