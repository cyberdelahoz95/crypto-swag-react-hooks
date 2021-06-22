import _ from "lodash";

const reducers = (state, action) => {
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
        case "INCREASE_PAGE":
            return {
                ...state,
                page: state.page + 1
            };
        case "DECREASE_PAGE":
            const newPage = (state.page - 1 < 0)?0:state.page - 1;
            return {
                ...state,
                page : newPage
            };
        default:
            return state;
    }
};

export default reducers