import React, { useState } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header";
import CryptosPage from "./components/CryptosPage";

let mode = false;
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	mode = true;
}

function App() {
	const [darkModeActive, setDarkModeActive] = useState(mode);
	const toggleDarkModel = () => {
		setDarkModeActive(!darkModeActive);
	};
	return (
		<ThemeContext.Provider value={{ toggleDarkModel, darkModeActive }}>
			<div className={`App ${darkModeActive ? "dark-mode" : "light-mode"}`}>
				<section className="section">
					<Header />					
					<CryptosPage />					
				</section>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
