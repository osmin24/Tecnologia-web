const {Schema,model} = require('mongoose')

const tipoProyectosSchema = Schema({
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

module.exports = model('tipoProyecto',tipoProyectosSchema)