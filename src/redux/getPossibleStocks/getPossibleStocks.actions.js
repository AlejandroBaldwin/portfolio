import getPossibleStocksTypes from './getPossibleStocks.types';

const {
    REQUEST_SEARCHBAR_INPUT_FAILED,
    REQUEST_SEARCHBAR_INPUT_PENDING,
    REQUEST_SEARCHBAR_INPUT_SUCCESS
} = getPossibleStocksTypes;

export const getPossibleStocks = (query) => (dispatch) => {
    dispatch({ type: REQUEST_SEARCHBAR_INPUT_PENDING });
    if (query !== '') {
        fetch(`https://us-central1-westockedup.cloudfunctions.net/app/query/${query}/5`)
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_SEARCHBAR_INPUT_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_SEARCHBAR_INPUT_FAILED, payload: error }));
    } else {
        dispatch({ type: REQUEST_SEARCHBAR_INPUT_SUCCESS, payload: [] })
    }
    
};