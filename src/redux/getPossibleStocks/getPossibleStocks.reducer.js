import getPossibleStocksTypes from './getPossibleStocks.types';

const {
    REQUEST_SEARCHBAR_INPUT_FAILED,
    REQUEST_SEARCHBAR_INPUT_PENDING,
    REQUEST_SEARCHBAR_INPUT_SUCCESS
} = getPossibleStocksTypes;

const initialState = {
    isSearchBarPending: false,
    stocks: [],
    error: ''
}

const getPossibleStocksReducer = (state=initialState, action={}) => {
    switch(action.type) {
        case REQUEST_SEARCHBAR_INPUT_PENDING:
            return{
                ...state,
                isSearchBarPending: true
            };
        case REQUEST_SEARCHBAR_INPUT_SUCCESS:
            return {
                ...state,
                stocks: action.payload,
                isSearchBarPending: false
            };
        case REQUEST_SEARCHBAR_INPUT_FAILED:
            return {
                ...state,
                stocks: initialState.stocks,
                error: action.payload,
                isSearchBarPending: false };
        default:
            return state;
    }
}

export default getPossibleStocksReducer;