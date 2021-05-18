const capitalize = (text) => {
    const res = text.charAt(0).toUpperCase() + text.slice(1);
    return res
}

const capitalizeFirstOfEachWord = (phrase) => {
    let res = phrase.split(' ');
    res = res.map(word => capitalize(word));
    res = res.join(' ');
    return res;
}

const querySelector = async (query, limit, axios) => {
    // let intLimit = parseInt(limit);
    // const queryTicket = query.toUpperCase();
    const queryName = capitalizeFirstOfEachWord(query.toLowerCase());
    try {
        let tickets = await axios.post('https://firestore.googleapis.com/v1/projects/westockedup/databases/(default)/documents:runQuery', {
            structuredQuery: {
                select: {
                    fields: [
                        {
                            fieldPath: 'name'
                        },
                        {
                            fieldPath: 'symbol'
                        }
                    ]
                },
                from: [ { collectionId: 'tickets' }],
                where: {
                    fieldFilter: {
                        field: { fieldPath: 'nameKeywords' },
                        op: 'ARRAY_CONTAINS',
                        value: { stringValue: queryName }
                    }
                },
                limit: 5,
            }
        })
        const res = [];
        /////////////////////////////////
        if (tickets.data[0].document !== undefined) {
            await tickets.data.forEach(ticket => {
                let temp = {
                    name: '',
                    symbol: ''
                };
                temp.name = ticket.document.fields.name.stringValue;
                temp.symbol = ticket.document.fields.symbol.stringValue;
                // console.log(ticket);
                res.push(temp);
            })
        }
        ///////////////////////////////////////
        return res
    } catch (err) {
        console.log(err)
        return `Something went bad: ${err}`;
    }
}

const queryTickets = async (req, res, axios) => {
    const { queryString, limit } = req.params;
    try {
        res.set('Access-Control-Allow-Origin', '*');
        const response = await querySelector(queryString, limit, axios);
        console.log(response);
        return await res.json(response);
    } catch (err) {
        console.error(err)
        return res.json("Couldn't find anything: ", err);
    }
}
module.exports = {
    queryTickets
}