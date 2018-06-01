const{send, } = require('micro');
const {router, get, post} = require('microrouter');
const monk = require('monk');

const url = 'heliopeep:passw0rd@ds135399.mlab.com:35399/helio';
const db = monk(url);
const collection = db.get('Senators');

db.then(()=>{
    console.log('connected correctly to server');
})

module.exports = router(
    get('/party/:party', getByParty),
    get('/gender/:gender', getByGender)
)

const getByParty = (async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    //this works maybe make a switch statment to check the case of what to then
    //specify how we are going to search or even send a second value to decide
    let filter = req.params.party;
    filter = switchRepubs(filter)
    if(dems.includes(filter.toLowerCase())){
        filter = "Democrat"
    }
    let dataToSend = await collection.find({party: filter}).then((docs)=> docs)


    send(res,200, dataToSend);
    //console.log(dataToSend);
})

const getByGender = (async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    //this works maybe make a switch statment to check the case of what to then
    //specify how we are going to search or even send a second value to decide
    let filter = req.params.gender;
    let dataToSend = await collection.find({"person.gender": filter}).then((docs)=> docs)


    send(res,200, dataToSend);
    //console.log(dataToSend);
})

//so do I need to create multiple routs with those values I want to search?

const dems = [ "dems", "dem", "democrat", "democrats" ]
const switchRepubs = (userData) => {
    switch (userData.toLowerCase()){
        case "repubs":
            return "Republican"
        case "repub":
            return "Republican"
        case "republicans":
            return "Republican"
        case "republican":
            return "Republican"
        default:
            return userData
    }
}