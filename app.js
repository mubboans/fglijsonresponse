const express = require('express')
const app = express();

const route = express.Router()
const cors = require('cors');
const port = 3002;
const logincarddetail = require('./res/json/login_card.json');
const logintabledetail = require('./res/json/login_detail.json');
const product_mix = require('./res/json/product_mix.json');
const leakage = require('./res/json/leakage.json');
const presistencecard = require('./res/json/presistencecard.json');
const persdetail = require('./res/json/presistencedetail.json');
const workinginprogress_card = require('./res/json/workingprog_card.json');
const workdetail = require('./res/json/workingprog_detail.json');
const pmscard = require('./res/json/pms.json');
const state_oppurtunity = require('./res/json/statement_oppurtunity.json');
const issuance_card = require('./res/json/issuance_card.json');
const issuance_detail = require('./res/json/issuance_detail.json');
app.use(cors());
route.get('/', (req, res) => {
    return res.send({ message: 'working api', status: true }).status(200)
})
route.get('/login/card', (req, res) => {
    return res.send(logincarddetail).status(200)
})

route.get('/login/detail', (req, res) => {
    const { tabname } = req?.query;
    if (!tabname) return res.status(404).send("Tab name is required");
    // const tabdetail = logintabledetail.premium;
    return res.send(logintabledetail[tabname]).status(200);
    // res.send(tabdetail).status(200);
})

route.get('/login/nop/detail', (req, res) => {
    const tabdetail = logintabledetail.nop;
    return res.send(tabdetail).status(200);
})

route.get('/login/nca/detail', (req, res) => {
    const tabdetail = logintabledetail.nca;
    return res.send(tabdetail).status(200);
})
route.get('/login/productmix/detail', (req, res) => {
    return res.send(product_mix).status(200);
})
route.get('/leakage/stock', (req, res) => {
    const { tabname } = req?.query;
    if (!tabname) return res.status(404).send("Tab name is required");
    // const tabdetail = logintabledetail.premium;
    return res.send(leakage[tabname]).status(200);
})
route.get('/presistence/card', (req, res) => {
    return res.send(presistencecard).status(200);
})
route.get('/presistence/detail', (req, res) => {
    const { tabname } = req?.query;
    if (!tabname) return res.status(404).send("Tab name is required");
    return res.send(persdetail[tabname]).status(200);
})
route.get('/presistence/summaryrcd/detail', (req, res) => {
    return res.send(persdetail.summaryrcd).status(200);
})
route.get('/presistence/summarysm/detail', (req, res) => {
    return res.send(persdetail.summarysm).status(200);
})
route.get('/workinprogress/card', (req, res) => {
    return res.send(workinginprogress_card).status(200);
});
route.get('/workinprogress/detail', (req, res) => {
    let { tabname } = req.query;
    if (!tabname) return res.status(400).send("table name required")
    console.log(tabname, 'cardname');
    return res.send(workdetail[tabname]).status(200);
})

route.get('/pms/cards', (req, res) => {
    const { cardname } = req?.query;
    if (!cardname) return res.status(400).send("Card name required")
    console.log(cardname, 'cardname');
    return res.send(pmscard[cardname]).status(200);
})

route.get('/statement/detail', (req, res) => {
    const { tabname } = req?.query;
    if (!tabname) return res.status(404).send("Tab name is required");
    console.log(tabname, 'tabname');
    return res.send(state_oppurtunity[tabname]).status(200);
})

route.get('/issuance/card', (req, res) => {
    res.send(issuance_card).status(200);
})

route.get('/issuance/detail', (req, res) => {
    const { tabname } = req?.query;
    if (!tabname) return res.status(404).send("Tab name is required");
    res.send(issuance_detail[tabname]).status(200);
})
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}/.netlify/functions/api`)
})

app.use('/.netlify/functions/api', route)
module.exports = app;