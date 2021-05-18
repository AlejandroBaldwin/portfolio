import getQuoteTypes from './getQuote.types';
const { 
    GET_QUOTE_FAILED,
    GET_QUOTE_PENDING,
    GET_QUOTE_SUCCESS 
} = getQuoteTypes;

export const getQuote = (symbol) => (dispatch) => {
    dispatch({ type: GET_QUOTE_PENDING });
    fetch(`https://us-central1-westockedup.cloudfunctions.net/app/quote/${symbol}`)
        .then(response => response.json())
        .then(data => dispatch({ type: GET_QUOTE_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: GET_QUOTE_FAILED, payload: error }));
}