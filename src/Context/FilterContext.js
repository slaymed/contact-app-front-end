import { createContext, useReducer } from "react";

// Constans
import {
    ALL_CONTACTS,
    SET_FAMILLY_FILTER,
    SET_FAVORITE_FILTER,
    SET_SEARCH_FILTER,
    SET_SEARCH_VALUE,
} from "./Types";

const initialFilterState = {
    famillyFilter: false,
    favoriteFilter: false,
    searchFilter: false,
    searchValue: "",
};

export const FilterContext = createContext({
    favoriteFilter: initialFilterState.famillyFilter,
    famillyFilter: initialFilterState.favoriteFilter,
    searchFilter: initialFilterState.searchFilter,
    searchValue: initialFilterState.searchFilter,

    justFamilly: () => {},
    justFavorite: () => {},
    setSearchFilter: () => {},
    setSearchValue: () => {},
    allContacts: () => {},
});

const filterReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_FAMILLY_FILTER:
            return {
                ...initialFilterState,
                famillyFilter: true,
            };

        case SET_FAVORITE_FILTER:
            return {
                ...initialFilterState,
                favoriteFilter: true,
            };

        case SET_SEARCH_FILTER:
            return {
                ...initialFilterState,
                searchFilter: true,
            };
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: payload,
            };

        case ALL_CONTACTS:
            return {
                ...initialFilterState,
            };
        default:
            return state;
    }
};

export const FilterProvider = (props) => {
    const [state, dispatch] = useReducer(filterReducer, initialFilterState);

    const justFamilly = () => {
        dispatch({ type: SET_FAMILLY_FILTER });
    };

    const justFavorite = () => {
        dispatch({ type: SET_FAVORITE_FILTER });
    };

    const setSearchFilter = () => {
        dispatch({ type: SET_SEARCH_FILTER });
    };

    const setSearchValue = (searchValue) => {
        dispatch({ type: SET_SEARCH_VALUE, payload: searchValue });
    };

    const allContacts = () => {
        dispatch({ type: ALL_CONTACTS });
    };
    return (
        <FilterContext.Provider
            value={{
                favoriteFilter: state.favoriteFilter,
                famillyFilter: state.famillyFilter,
                searchFilter: state.searchFilter,
                searchValue: state.searchValue,
                setSearchFilter,
                setSearchValue,
                justFavorite,
                justFamilly,
                allContacts,
            }}
            {...props}
        />
    );
};
