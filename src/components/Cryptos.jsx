import React, { useState, useEffect, useReducer, useMemo, useRef } from "react";
import _ from "lodash";

import CyptoCard from "./Crypto";
import favoritesReducer from '../reducers'
import env from "../env"

const initialState = {
    favorites: [],
};

const Cryptos = () => {
    const [cryptos, setCryptos] = useState([]);
    const searchInput = useRef(null)
    const [search, setSearch] = useState("");

    //const handleSearch = (event) => setSearch(event.target.value);
    const handleSearch = () => setSearch(searchInput.current.value);

    useEffect(() => {
        fetch(env.API_URL)
            .then((res) => res.json())
            .then((data) => setCryptos(data));
    }, []);

    const [state, dispatch] = useReducer(favoritesReducer, initialState);
    const addToFavs = (newFavorite) => dispatch({ type: "ADD_TO_FAVS", payload: newFavorite });
    const removeFromFavs = (favoriteToBeRemoved) => dispatch({ type: "REMOVE_FROM_FAVS", payload: favoriteToBeRemoved });

    const filteredCryptos = useMemo(() => cryptos.filter((crypto) => crypto.name.toLowerCase().includes(search.toLowerCase())), [cryptos, search]);

    const { favorites } = state;

    return (
        <>
            <div className="mt-1 is-flex is-flex-direction-row is-align-content-center is-justify-content-center is-flex-wrap-wrap">
                <input
                    ref={searchInput}
                    className="input is-info is-rounded search-input"
                    type="text"
                    value={search}
                    onChange={handleSearch} />
            </div>
            <div className="is-flex is-flex-direction-row is-align-content-center is-justify-content-center is-flex-wrap-wrap">
                {filteredCryptos.map((crypto) => {
                    const isFav = _.includes(favorites, crypto.symbol);
                    return <CyptoCard isFav={isFav} {...crypto} key={crypto.id} addToFavs={addToFavs} removeFromFavs={removeFromFavs} />;
                })}
            </div>
        </>
    );
};
export default Cryptos;
