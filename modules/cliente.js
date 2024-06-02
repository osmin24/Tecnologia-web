const {Schema,model} = require('mongoose')


const clienteSchema = Schema({
    name:{
        type:String,
        default:''
    },
    email:{
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

module.exports = model('cliente',clienteSchema)