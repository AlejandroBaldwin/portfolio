import searchBarTypes from './searchBar.types';

const {
    SEARCHBAR_STATE,
    SEARCHBAR_FOCUSED,
    SEARCHBAR_UNFOCUSED
} = searchBarTypes;

export const getSearchBarState = (text) => ({
    type: SEARCHBAR_STATE,
    payload: text
});

export const setSearchBarFocused = () => ({
    type: SEARCHBAR_FOCUSED
});

export const setSearchBarUnfocused = () => ({
    type: SEARCHBAR_UNFOCUSED
});