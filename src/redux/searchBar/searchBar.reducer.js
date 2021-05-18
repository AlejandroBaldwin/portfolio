import searchBarTypes from './searchBar.types';

const {
    SEARCHBAR_STATE,
    SEARCHBAR_FOCUSED,
    SEARCHBAR_UNFOCUSED
} = searchBarTypes;

const initialState = {
    searchBarState: '',
    isFocused: false
};

const getSearchBarStateReducer = (state=initialState, action={}) => {
    switch(action.type) {
        case SEARCHBAR_STATE:
            return {
                ...state,
                searchBarState: action.payload
            };
        case SEARCHBAR_FOCUSED:
            return {
                ...state,
                isFocused: true
            };
        case SEARCHBAR_UNFOCUSED:
            return {
                ...state,
                isFocused: false
            };
        default:
            return state;
    }
}

export default getSearchBarStateReducer;