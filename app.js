const express = require('express')
const app = express();

const route = express.Router()
const cors = require('cors');
const port = 3002;
const carddetail = require('./res/json/card.json')
app.use(cors());
route.get('/', (req, res) => {
    res.send({ message: 'working api', status: true }).statusCode(200)
})
route.get('/dashboard/card', (req, res) => {
    res.send(carddetail)
})

route.get('/dashboard/premium/detail', (req, res) => {

    res.send(carddetail)
})

route.get('/dashboard/nop/detail', (req, res) => {

    res.send(carddetail)
})

route.get('/dashboard/nca/detail', (req, res) => {

    res.send(carddetail)
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

app.use('/.netlify/functions/api', route)
module.exports = app;