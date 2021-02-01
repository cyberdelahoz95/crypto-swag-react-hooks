import React, { useState, useEffect } from "react";

const Cryptos = ({ darkModeActive }) => {
    const [cryptos, setCryptos] = useState([]);

    //closure to be executed, this closure is on charge of performing http request.
    //second argument is a variable that is going to be.
    useEffect(() => {
        fetch("https://api.nomics.com/v1/currencies/ticker?key=7d401de3c7a4137fd0978d44dc0058c4&per-page=50&page=1")
            .then((res) => res.json())
            .then((data) => setCryptos(data));
    }, []); // Only re-run the effect if second argument changes

    return (


        cryptos.map((crypto) => {
            //console.log(crypto)
            return (
                <div key={crypto.id} className="card crypto-card m-3">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={crypto.logo_url} alt={`${crypto.currency} logo`} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{crypto.name}</p>
                                <p className="subtitle is-6">{crypto.symbol}</p>
                            </div>
                        </div>

                        <div className="content is-flex is-flex-direction-row is-justify-content-space-between">
                            <span className={`tag mr-1 ${darkModeActive ? "is-dark" : "is-white"}`}>USD {parseFloat(crypto.price).toFixed(2)}</span>
                            <button className={`button  is-small is-danger  ${darkModeActive ? "is-outlined" : ""}`}>
                                <span>Agregar a Favoritos</span>
                                <span className="icon is-small">
                                    <i className="mdi mdi-heart"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            );
        })


    );
};
export default Cryptos;
