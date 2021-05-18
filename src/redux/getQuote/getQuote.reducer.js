import getQuoteTypes from './getQuote.types';

const {
    GET_QUOTE_SUCCESS,
    GET_QUOTE_PENDING,
    GET_QUOTE_FAILED
} = getQuoteTypes;

const initialState = {
    isQuotePending: false,
    quote: {
        "quote": {
            "companyName": "",
            "symbol": "",
            "close": "",
            "previousClose": "",
            "open": "",
            "week52High": "",
            "week52Low": "",
            "marketCap": "",
            "high": "",
            "low": "",
            "volume": "",
            "previousVolume": ""
        },
        "nextDate": ""
    },
    error: ''
}

const getQuoteReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_QUOTE_PENDING:
            return {
                ...state,
                isQuotePending: true
            };
        case GET_QUOTE_SUCCESS:
            return {
                ...state,
                quote: action.payload,
                isQuotePending: false
            };
        case GET_QUOTE_FAILED:
            return {
                ...state,
                quote: initialState.quote,
                error: action.payload,
                isQuotePending: false
            };
        default:
            return state;
    }
}

export default getQuoteReducer;