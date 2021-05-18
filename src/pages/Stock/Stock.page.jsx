import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getChart } from '../../redux/getChart/getChart.actions';
import { getNews } from '../../redux/newsCard/newsCard.actions';
import { getQuote } from '../../redux/getQuote/getQuote.actions';
import { setSearchBarUnfocused } from '../../redux/searchBar/searchBar.actions';

import Chart from '../../components/Chart/Chart';
import InformationCard from '../../components/InformationCard/InformationCard';
import NewsCard from '../../components/NewsCard/NewsCard';

import './Stock.css';

const Stock = ({ match: { params: { stockId } }, getQuote, getChart, getNews, setUnfocused, newsPending, quotePending, chartPending } ) => {
    
    useEffect(() => {
        getQuote(stockId);
        getChart(stockId);
        getNews(stockId);
        setUnfocused();
    }, [stockId])
    
    if ((!chartPending && !quotePending && !newsPending)) { 
        return (<section onClick={setUnfocused} className='StockPage' >
            <Chart />
            <InformationCard />
            <NewsCard />
        </section>)
    } else {
        return (<section className='spinner-container' >
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </section>);
    }
};

const mapStateToProps = ({ getChart: { isTimelinePending }, getNews: { isNewsPending }, getQuote: { isQuotePending } }) => ({
    chartPending: isTimelinePending,
    quotePending: isQuotePending,
    newsPending: isNewsPending
})

const mapDispatchToProps = dispatch => ({
    getQuote: keyWord => dispatch(getQuote(keyWord)),
    getNews: keyWord => dispatch(getNews(keyWord)),
    getChart: keyWord => dispatch(getChart(keyWord)),
    setUnfocused: () => dispatch(setSearchBarUnfocused()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Stock);