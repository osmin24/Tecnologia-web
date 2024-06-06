const {Schema,model} = require('mongoose')
const Cliente = require('./cliente')
const Etapa = require('./etapa')
const TipoProyecto = require('./tipoProyectos')
const Universidad = require('./universidad')

const ShemaProyecto = Schema({
    number:{
        type:Number,
        unique:true,
        require:true,
    },
    title:{
        type:String,
        require:true,
        defatul:'Not title'
    },
    datelogin:{
        type:Date,
        require:true
    },
    datefin:{
        type:Date,
        require:true
    },
    valor:{
        type:Number,
        require:true,
        default:0.0
    },
    datecreate:{
        type:Date,
        require:true,
        default: new Date()
    },
    dateupdate:{
        type:Date,
        require:true,
        default:new Date()
    },
    cliente:[{
        type:Schema.Types.ObjectId,ref:'Cliente'
    }],
    etapa:[{
        type:Schema.Types.ObjectId, ref:'Etapa'
    }],
    tipoProyecto:[{
        type:Schema.Types.ObjectId, ref:'TipoProyecto'
    }],
    universidad:[{
        type:Schema.Types.ObjectId, ref: 'Universidad'
    }]
})

module.exports = model('Proyecto',ShemaProyecto)