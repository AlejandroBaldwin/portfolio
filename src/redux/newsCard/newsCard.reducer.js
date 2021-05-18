import newsCardTypes from './newsCard.types';

const {
    GET_NEWS_PENDING,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAILED
} = newsCardTypes;

const initialNewsState = {
    isNewsPending: false,
    news: []
}

const getNews = (state = initialNewsState, action = {}) => {
    switch(action.type) {
        case GET_NEWS_PENDING:
            return {
                ...state,
                isNewsPending: true
            };
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                isNewsPending: false,
                news: action.payload
            };
        case GET_NEWS_FAILED:
            return {
                ...state,
                isNewsPending: false,
                news: action.payload
            };
        default:
            return state;
    }
}

export default getNews;