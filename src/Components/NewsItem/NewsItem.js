import React from 'react';
import imgFallback from '../../images/logo.png'
import './NewsItem.css'

const imageDidLoad = (event) => {
    const target = event.target;
        target.src = imgFallback;
}

const NewsItem = ({ headline, source, url, dateTime, image }) => {
    return (
        <a className='NewsItem__Container' href={url} >
            <img className='NewsItem__Image' onError={imageDidLoad} alt="New's Portrait" src={image} />
            <h2 className='NewsItem__Title' >{headline}</h2>
            <h3 className='NewsItem__Source' >{`Source: ${source}`}</h3>
            <h4 className="NewsItem__DateTime" >{dateTime}</h4>
        </a>
    )
}

export default NewsItem;