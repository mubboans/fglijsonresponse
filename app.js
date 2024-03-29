const express = require('express')
const app = express();
const cors = require('cors');
const port = 3002;
const carddetail = require('./res/json/card.json')
app.use(cors());

app.get('/dashboard/card', (req, res) => {
    res.send(carddetail)
})

app.get('/dashboard/premium/detail', (req, res) => {

    res.send(carddetail)
})

app.get('/dashboard/nop/detail', (req, res) => {

    res.send(carddetail)
})

app.get('/dashboard/nca/detail', (req, res) => {

    res.send(carddetail)
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

module.exports = app;