const express = require('express')

const app = express()

app.listen('3000')
app.route('/').get((req, res)=>res.send("oi"))
app.route('/:variavel').get((req, res)=>res.send(req.params.variavel))
app.route('/:identidade/:nome').get((req, res)=>res.send(req.params.nome))
