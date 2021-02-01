import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Crypto = ({ logo_url, currency, name, symbol, price, isFav, addToFavs, removeFromFavs }) => {
    const { darkModeActive } = useContext(ThemeContext);
    return (
        <div className={`card crypto-card m-3 ${isFav ? "is-fav" : ""}`}>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={logo_url} alt={`${currency} logo`} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{name}</p>
                        <p className="subtitle is-6">{symbol}</p>
                    </div>
                </div>

                <div className="content is-flex is-flex-direction-row is-justify-content-space-between">
                    <span className={`tag mr-1 ${darkModeActive ? "is-dark" : "is-white"}`}>USD {parseFloat(price).toFixed(2)}</span>
                    <button
                        onClick={() => (isFav ? removeFromFavs(symbol) : addToFavs(symbol))}
                        className={`button  is-small is-danger  ${darkModeActive ? "is-outlined" : ""}`}
                    >
                        <span>{isFav ? `Remover de` : `Agregar a`} Favoritos</span>
                        <span className="icon is-small">
                            <i className="mdi mdi-heart"></i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Crypto;
