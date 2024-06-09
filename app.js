const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const conDB = require('./configuration/confingurationDB')

const Cliente= require('./routers/cliente')
const Etapa = require('./routers/etapa')
const TipoProyecto = require('./routers/tipoProyecto')
const Universidad = require('./routers/universidad')
//const Proyecto = require('./routers/proyecto')

app.set('port',process.env.PORT || 3000)
app.use(express.urlencoded({extended:'true'}))
app.use(express.json())
app.use(cors({
    origin:'*'
}))

app.use('/clientes',Cliente)
app.use('/etapas',Etapa)
app.use('/tipoProyectos',TipoProyecto)
app.use('/universidades',Universidad)
//app.use('/proyectos',Proyecto)

module.exports = {app}