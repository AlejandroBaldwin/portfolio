import { combineReducers } from 'redux';

import newsCardReducer from './newsCard/newsCard.reducer';
import searchBarReducer from './searchBar/searchBar.reducer';
import windowWidthReducer from './windowWidth/windowWidth.reducer';
import getQuoteReducer from './getQuote/getQuote.reducer';
import getChartReducer from './getChart/getChart.reducer';
import getPossibleStocksReducer from './getPossibleStocks/getPossibleStocks.reducer';

const rootReducer = combineReducers({
    getNews: newsCardReducer,
    getQuote: getQuoteReducer,
    getChart: getChartReducer,
    getPossibleStocks: getPossibleStocksReducer,
    searchBar: searchBarReducer,
    windowWidth: windowWidthReducer
})

export default rootReducer;