const express = require('express')
const cors = require('cors')
const app = express ()


const router = require('./apis')

app.use(cors()


app.get('/', (req, res) => {
res.send({ 
    message: 'Hola mundo'
})
})


app.use(express.jason())
app.use(router)

module.exports = app