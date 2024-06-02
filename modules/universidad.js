const {Schema,model} = require('mongoose')

const SchemaUniversidad  = Schema({
    name:{
        type:String,
        require:true,
        default:''
    },
    direction:{
        type:String,
        require:true,
        default:''
    },
    tel:{
        type:String,
        require:true,
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


module.exports = model('universidad',SchemaUniversidad)