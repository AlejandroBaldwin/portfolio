import React from 'react';
import { connect } from 'react-redux';
import './InformationCard.css';

const Information_Card = ({ quoteInfo: { quote, nextDate } }) => {
    
    return (
        <section className='Information-Card'>
            <section className='Information-Card__Colunm' >
                <p className='Information-Card__Item-Title' >Ticket: <span className='Information-Card__Item-Body' >{quote.symbol}</span> </p>
                <p className='Information-Card__Item-Title' >Closed: <span className='Information-Card__Item-Body' >{quote.close}</span> </p>
                <p className='Information-Card__Item-Title' >Prev Closed: <span className='Information-Card__Item-Body' >{quote.previousClose}</span> </p>
                <p className='Information-Card__Item-Title' >Opened: <span className='Information-Card__Item-Body' >{quote.open}</span> </p>
                <p className='Information-Card__Item-Title' >52 Week High: <span className='Information-Card__Item-Body' >{quote.week52High}</span> </p>
                <p className='Information-Card__Item-Title' >52 Week Low: <span className='Information-Card__Item-Body' >{quote.week52Low}</span> </p>                
            </section>
            <div className='Information-Card__Vertical-Line' ></div>
            <section className='Information-Card__Colunm' >
                <p className='Information-Card__Item-Title' >Mkt Cap: <span className='Information-Card__Item-Body' >{quote.marketCap}</span> </p>
                <p className='Information-Card__Item-Title' >Day's High: <span className='Information-Card__Item-Body' >{quote.high}</span> </p>
                <p className='Information-Card__Item-Title' >Day's Low: <span className='Information-Card__Item-Body' >{quote.low}</span> </p>
                <p className='Information-Card__Item-Title' >Volume: <span className='Information-Card__Item-Body' >{quote.volume}</span> </p>
                <p className='Information-Card__Item-Title' >Avg Volume: <span className='Information-Card__Item-Body' >{quote.previousVolume}</span> </p>
                <p className='Information-Card__Item-Title' >Earnings: <span className='Information-Card__Item-Body' >{nextDate}</span> </p>
            </section>
        </section>
    )
};

const mapStateToProps = ({ getQuote: { quote } }) => ({
    quoteInfo: quote
});


export default connect(mapStateToProps)(Information_Card);