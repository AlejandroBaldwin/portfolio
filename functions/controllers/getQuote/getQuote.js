const filterEmptyData = (item) => {
    if (item !== "" && item !== null && item !== "Invalid date") {
        return item;
    } else {
        return "N/A";
    }
}

const getQuote = async (req, res, iex, numberFormatter, moment) => {
    const { ticket } = req.params;
    try {
        const quote = await iex.quote(ticket);
        const nextDate = await iex.advancedStats(ticket);
        const data = {
            quote: {
                companyName: filterEmptyData(quote.companyName),
                symbol: filterEmptyData(quote.symbol),
                close: (filterEmptyData(quote.close)),
                previousClose: filterEmptyData(quote.previousClose),
                open: filterEmptyData(quote.open),
                week52High: filterEmptyData(quote.week52High),
                week52Low: filterEmptyData(quote.week52Low),
                marketCap: numberFormatter(filterEmptyData(quote.marketCap)),
                high: filterEmptyData(quote.high),
                low: filterEmptyData(quote.low),
                volume: numberFormatter(filterEmptyData(quote.volume)),
                previousVolume: numberFormatter(filterEmptyData(quote.previousVolume)),
            },
            nextDate: filterEmptyData(moment(nextDate.nextEarningsDate).format("M/D/YYYY"))
        }
        return res.json(data)
    } catch (err) {
        err ? console.error(err) :
        res.json('Something went bad')
    }
}

module.exports = {
    getQuote
}