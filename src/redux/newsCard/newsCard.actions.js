import newsCardTypes from './newsCard.types';

const {
    GET_NEWS_PENDING,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAILED
} = newsCardTypes;

export const getNews = (symbol) => (dispatch) => {
    dispatch({ type: GET_NEWS_PENDING });
    fetch(`
    https://us-central1-westockedup.cloudfunctions.net/app/news/${symbol}`)
        .then(response => response.json())
        .then(data => dispatch({ type: GET_NEWS_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: GET_NEWS_FAILED, payload: error}))
}