import React, { useState, useEffect, useReducer, useMemo, useRef } from "react";

import CryptoList from "../components/Cryptos";
import Loader from "../components/Loader";
import PaginationButtons from "../components/Buttons";
import Search from "../components/Search";

import reducers from "../reducers";
import env from "../env";

const initialState = {
  favorites: [],
  page: 1
};

const CryptosPage = React.memo(() => {
  const [cryptos, setCryptos] = useState([]);
  const searchInput = useRef(null);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //const handleSearch = (event) => setSearch(event.target.value);
  const handleSearch = () => setSearch(searchInput.current.value);

  const [state, dispatch] = useReducer(reducers, initialState);
  const addToFavs = (newFavorite) =>
    dispatch({ type: "ADD_TO_FAVS", payload: newFavorite });
  const removeFromFavs = (favoriteToBeRemoved) =>
    dispatch({ type: "REMOVE_FROM_FAVS", payload: favoriteToBeRemoved });
  const increasePage = () => dispatch({type:"INCREASE_PAGE"});
  const decreasePage = () => dispatch({type:"DECREASE_PAGE"});

  const filteredCryptos = useMemo(
    () =>
      cryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(search.toLowerCase())
      ),
    [cryptos, search]
  );
  const { favorites, page } = state;
  useEffect(() => {
    setIsLoading(true);
    fetch(`${env.API_URL}${page}`)
      .then((res) => res.json())
      .then((data) => {
        setCryptos(data);
        setIsLoading(false);
      });
  }, [page]);
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
      <PaginationButtons 
        increasePage={increasePage}
        decreasePage={decreasePage}
        page={page}
      />
    </>
  );
});
export default CryptosPage;
