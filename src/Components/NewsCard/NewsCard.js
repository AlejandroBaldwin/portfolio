import React from 'react';
import { connect } from 'react-redux';
import NewsItem from '../NewsItem/NewsItem';
import './NewsCard.css';


const NewsCard = ({ news }) => {

    const newsList = news.map((newsArticle, i) => {
        return (
            <NewsItem 
                headline={newsArticle.headline}
                source={newsArticle.source}
                url={newsArticle.url}
                dateTime={newsArticle.dateTime}
                image={newsArticle.image}
                key={i}
            /> 
        )
    })
    
    return (
        <section className="NewsCard__Container" >
            <h1 className="NewsCard__Title" >Related News:</h1>
            <section className="NewsCard__List-Container" >
                {newsList}
            </section>
        </section>
    )
}

const mapStateToProps = state => {
    return({
        news: state.getNews.news
    });
}

export default connect(mapStateToProps)(NewsCard);