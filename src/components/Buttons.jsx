import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Button = React.memo(({increasePage, decreasePage, page}) => {
    const { darkModeActive } = useContext(ThemeContext);
    return (
        <div className="is-flex is-justify-content-space-evenly">
            <button 
                onClick={decreasePage}
                className={`button ${darkModeActive ? "is-dark" : "is-primary has-text-black"}`}>-</button>
                <span className={`tag is-large ${darkModeActive ? "is-dark" : "is-primary has-text-black"}`}>{page}</span>
                <button 
                onClick={increasePage}
                className={`button ${darkModeActive ? "is-dark" : "is-primary has-text-black"}`}>+</button>
        </div>)
});

export default Button;