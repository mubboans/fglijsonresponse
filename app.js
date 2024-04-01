const express = require('express')
const app = express();

const route = express.Router()
const cors = require('cors');
const port = 3002;
const carddetail = require('./res/json/card.json');
const tabledetail = require('./res/json/detail.json');
const product_mix = require('./res/json/product_mix.json');
const stock = require('./res/json/stockdetail.json');
const presistencecard = require('./res/json/presistencecard.json');
const persdetail = require('./res/json/presistencedetail.json');
const workinginprogress_card = require('./res/json/workingprog_card.json');
const workdetail = require('./res/json/workingprog_detail.json');
app.use(cors());
route.get('/', (req, res) => {
    res.send({ message: 'working api', status: true }).status(200)
})
route.get('/login/card', (req, res) => {
    res.send(carddetail).status(200)
})

route.get('/login/premium/detail', (req, res) => {
    const tabdetail = tabledetail.premium;
    res.send(tabdetail).status(200);
})

route.get('/login/nop/detail', (req, res) => {
    const tabdetail = tabledetail.nop;
    res.send(tabdetail).status(200);
})

route.get('/login/nca/detail', (req, res) => {
    const tabdetail = tabledetail.nca;
    res.send(tabdetail).status(200);
})
route.get('/login/productmix/detail', (req, res) => {
    res.send(product_mix).status(200);
})
route.get('/leakage/stock/detail', (req, res) => {
    res.send(stock).status(200);
})
route.get('/presistence/card', (req, res) => {
    res.send(presistencecard).status(200);
})
route.get('/presistence/presistence/detail', (req, res) => {
    res.send(persdetail.persistency).status(200);
})
route.get('/presistence/summaryrcd/detail', (req, res) => {
    res.send(persdetail.summaryrcd).status(200);
})
route.get('/presistence/summarysm/detail', (req, res) => {
    res.send(persdetail.summarysm).status(200);
})
route.get('/workinprogress/card', (req, res) => {
    res.send(workinginprogress_card).status(200);
});
route.get('/workinprogress/detail', (req, res) => {
    let { cardname } = req.query;
    console.log(cardname, 'cardname');
    res.send(workdetail[cardname]).status(200);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use('/.netlify/functions/api', route)
module.exports = app;