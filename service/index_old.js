const { send } = require('micro');
const { router, get } = require('microrouter');
const Senators = require('./data/senators')

const democrats = () => {
    return Senators.filter(senator => senator.party === 'Democrat')
};
const republicans = () => {
    return Senators.filter(senator => senator.party === 'Republican')
};
const independents = () => {
    return Senators.filter(senator => senator.party === 'Independent')
};
const males = () => {
    return Senators.filter(senator => senator.person.gender === 'male')
};
const females = () => {
    return Senators.filter(senator => senator.person.gender === 'female')
};

const hello = (req, res) => send(res, 200, `Hello ${req.params.who}`);
const dems = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return send(res, 200, democrats());
}
const repubs = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return send(res, 200, republicans());
}
const indies = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return send(res, 200, independents());
}
const men = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return send(res, 200, males());
}
const women = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return send(res, 200, females());
}

const notfound = (req, res) => send(res, 404, 'Not found route');

module.exports = router(
    get('/repubs', repubs),
    get('/dems', dems),
    get('/indies', indies),
    get('/males', men),
    get('/females', women),
    get('/hello/:who', hello),
    get('/*', notfound)
);