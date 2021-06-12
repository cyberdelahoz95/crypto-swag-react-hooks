import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import './Loader.css'

const Loader = React.memo(() => {
    const { darkModeActive } = useContext(ThemeContext);
    return (<div className={`no-bulma-loader ${darkModeActive ? "is-dark" : "is-white"}`}></div>)
})

export default Loader;