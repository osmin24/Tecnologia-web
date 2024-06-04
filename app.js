const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const conDB = require('./configuration/confingurationDB')

const Cliente= require('./routers/cliente')
const Etapa = require('./routers/etapa')
const TipoProyecto = require('./routers/tipoProyecto')
const Universidad = require('./routers/universidad')

app.set('port',process.env.PORT || 3000)
app.use(express.urlencoded({extended:'true'}))
app.use(express.json())
app.use(cors({
    origin:'*'
}))

app.use('/cliente',Cliente)
app.use('/etapa',Etapa)
app.use('/tipoProyecto',TipoProyecto)
app.use('/universidad',Universidad)

module.exports = {app}