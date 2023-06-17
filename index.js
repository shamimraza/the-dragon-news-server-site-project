const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('go dragon server site----- (back end)')
})

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.listen(port, () => {
    console.log(`Dragon server is running on port ${port}`)
})