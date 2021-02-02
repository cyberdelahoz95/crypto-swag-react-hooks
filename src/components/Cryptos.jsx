import React, { useState, useEffect, useReducer } from "react";
import _ from "lodash";

import CyptoCard from "./Crypto";

require('dotenv').config();

const initialState = {
    favorites: [],
};
const favoritesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_FAVS":
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case "REMOVE_FROM_FAVS":
            const newFavorites = _.pull(state.favorites, action.payload);
            return {
                ...state,
                favorites: newFavorites,
            };
        default:
            return state;
    }
};

const Cryptos = () => {
    const [cryptos, setCryptos] = useState([]);
    const [state, dispatch] = useReducer(favoritesReducer, initialState);
    useEffect(() => {
        fetch(process.env.API_URL)
            .then((res) => res.json())
            .then((data) => setCryptos(data));
    }, []);

    const addToFavs = (newFavorite) => {
        dispatch({ type: "ADD_TO_FAVS", payload: newFavorite });
    };
    const removeFromFavs = (favoriteToBeRemoved) => {
        dispatch({ type: "REMOVE_FROM_FAVS", payload: favoriteToBeRemoved });
    };
    const { favorites } = state
    return cryptos.map((crypto) => {
        const isFav = _.includes(favorites, crypto.symbol);
        return <CyptoCard
            isFav={isFav}
            {...crypto}
            key={crypto.id}
            addToFavs={addToFavs}
            removeFromFavs={removeFromFavs}
        />;
    });
};
export default Cryptos;
