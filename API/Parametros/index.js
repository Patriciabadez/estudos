const express = require('express')

const app = express()

app.listen('3000')

app.use(express.json())

app.route('/').get((req, res)=>res.send(req.query.name))
app.route('/').post((req, res)=>res.send(req.boby))
app.route('/:parametro').get((req, res)=>res.send(req.params.parametro))