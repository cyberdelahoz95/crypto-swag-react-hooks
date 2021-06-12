import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Button = React.memo(() => {
    const { darkModeActive } = useContext(ThemeContext);
    return (<button className={`button ${darkModeActive ? "is-dark" : "is-primary has-text-black"}`}>Load More Crypto...</button>)
})

export default Button;