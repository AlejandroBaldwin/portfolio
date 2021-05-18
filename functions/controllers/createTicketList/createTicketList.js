const createKeywords = (word) => {
    const arrayOfKeywords = [];
    let currentKeyword = ''
    word.split('').forEach(letter => {
        currentKeyword = `${currentKeyword}${letter}`;
        arrayOfKeywords.push({
            stringValue: currentKeyword
        });
    })
    return arrayOfKeywords;
}

const escapeChar = async name => {
    let currentName = '';
    await name.split('').forEach(letter => {
        if (letter === '/') {
            currentName = `${currentName}%2F`
        } else {
            currentName = `${currentName}${letter}`
        }
    })
    return currentName
}

const insertTicket = async (ticket, axios) => {

    try {
        const symbol = await ticket.symbol;
        const name = await ticket.name;
        // let tempName = await escapeChar(name);
        const ticketInfo = await axios.post("https://firestore.googleapis.com/v1/projects/westockedup/databases/(default)/documents/tickets", {
            fields: {
                name: { stringValue: name },
                symbol: { stringValue: symbol },
                nameKeywords: { arrayValue: {
                    values: createKeywords(name)
                } },
                symbolKeywords: { arrayValue: {
                    values: createKeywords(symbol)
                } },
            }
        });
        return 'it worked?'
    } catch (err) {
        console.log(err);
        return err
    }
};

const createTicketList = async (req, res, axios) => {

    try {
        const ticket_list = await axios.get(process.env.CREATE_TICKET_LIST);
        await ticket_list.data.forEach(async ticket => {await insertTicket(ticket, axios)});
        return res.json(`hope it works`)
    } catch (err) {
        console.error(err)
        return res.json(err)
    }
};

module.exports = {
    createTicketList
};