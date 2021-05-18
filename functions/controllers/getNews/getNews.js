const filterDataPoints = (newsArray, moment) => {
    let response = [];
    newsArray.map(newsObject => {
        if (newsObject.lang === "en") {
           response.push({
                headline : newsObject.headline,
                source : newsObject.source,
                dateTime: `On: ${moment(newsObject.datetime).format("M/D/YYYY h:mm A")}`,
                url : newsObject.url,
                image : newsObject.image
            }); 
        }
        
    });
    console.log(response);
    return response;
}

const getNews = async (req, res, iex, moment) => {
    const { ticket } = req.params;
    try {
        const news = await iex.news(ticket);
        return await res.json(filterDataPoints(news, moment));
        // return res.json(news);
    } catch (err) {
        console.log(err);
        return res.json(err);
    }
}

module.exports = {
    getNews
}