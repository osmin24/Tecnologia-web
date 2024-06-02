const {Schema,model} = require('mongoose')

const SchemaEtapa = Schema({
    name:{
        type:String,
        default:''
    },
    datecreate:{
        type:Date,
        default: new Date()
    },
    dateupdate:{
        type:Date,
        default:new Date(),
    }
})

module.exports = model('Etapa',SchemaEtapa)