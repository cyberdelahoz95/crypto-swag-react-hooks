import _ from "lodash";

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

export default favoritesReducer