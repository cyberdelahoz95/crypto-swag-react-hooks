import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
    const { toggleDarkModel, darkModeActive } = useContext(ThemeContext);
    return (
        <div className="Header container">
            <h1 className="title">Crypto Swag</h1>
            <button onClick={toggleDarkModel} className={`button is-small ${darkModeActive ? "is-white" : "is-dark"}`}>
                <span className="icon is-small">
                    <i className={`mdi ${darkModeActive ? "mdi-lightbulb-on" : "mdi-lightbulb-off"}`}></i>
                </span>
            </button>
        </div>
    );
};

export default Header;
