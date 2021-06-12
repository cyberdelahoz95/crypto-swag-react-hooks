import React, { useState, useEffect, useReducer, useMemo, useRef } from "react";
import _ from "lodash";

import CryptoList from "./Cryptos";
import Loader from "./Loader";
import LoadMoreButton from "./Button";
import Search from "./Search";

import favoritesReducer from "../reducers";
import env from "../env";

const initialState = {
  favorites: [],
};

const CryptosPage = () => {
  const [cryptos, setCryptos] = useState([]);
  const searchInput = useRef(null);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //const handleSearch = (event) => setSearch(event.target.value);
  const handleSearch = () => setSearch(searchInput.current.value);

  useEffect(() => {
    setIsLoading(true);
    fetch(env.API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCryptos(data);
        setIsLoading(false);
      });
  }, []);

  const [state, dispatch] = useReducer(favoritesReducer, initialState);
  const addToFavs = (newFavorite) =>
    dispatch({ type: "ADD_TO_FAVS", payload: newFavorite });
  const removeFromFavs = (favoriteToBeRemoved) =>
    dispatch({ type: "REMOVE_FROM_FAVS", payload: favoriteToBeRemoved });

  const filteredCryptos = useMemo(
    () =>
      cryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(search.toLowerCase())
      ),
    [cryptos, search]
  );

  const { favorites } = state;
  return (
    <>
      <Search
        searchInput={searchInput}
        search={search}
        handleSearch={handleSearch}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <CryptoList
          filteredCryptos={filteredCryptos}
          favorites={favorites}
          addToFavs={addToFavs}
          removeFromFavs={removeFromFavs}
        />
      )}
      <LoadMoreButton />
    </>
  );
};
export default CryptosPage;
