import React from "react";
import CyptoCard from "./Crypto";

const Cryptos = ({ filteredCryptos, favorites, addToFavs, removeFromFavs }) => {
  return (
    <div className="is-flex is-flex-direction-row is-justify-content-center is-flex-wrap-wrap">
      {filteredCryptos.map((crypto) => {
        const isFav = _.includes(favorites, crypto.symbol);
        return (
          <CyptoCard
            isFav={isFav}
            {...crypto}
            key={crypto.id}
            addToFavs={addToFavs}
            removeFromFavs={removeFromFavs}
          />
        );
      })}
    </div>
  );
};
export default Cryptos;
