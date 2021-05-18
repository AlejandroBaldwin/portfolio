class dayInformation {
    constructor(day) {
        this.date = day.date;
        this.open = day.open;
        this.high = day.high;
        this.close = day.close;
        this.volume = day.volume;
        this.label = day.label;
    }
}

const responseBuilder = (arrayOfObjects) => {
    const response = []
    arrayOfObjects.map(object => {
        const obj = new dayInformation(object)
        response.push(obj);
    })
    return response;
}

const getChartInfo = async (req, res, iex) => {
    const { ticket, time } = req.params;
    
    try {
        const chartInfo = await iex.history(ticket, {period: time, closeOnly: false, changeFromClose: false});
        
        return res.json(responseBuilder(chartInfo))
    } catch (err) {
        console.error(err)
        return res.json('Something went bad')
    }
}

module.exports = {
    getChartInfo
}