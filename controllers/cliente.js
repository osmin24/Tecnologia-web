const {request,response} = require('express')
const Cliente = require('../modules/cliente')
const { trusted } = require('mongoose')


const getCliente =  async (req=request,res=response) => {
    try{
        const data = await Cliente.find()
        if(!data){
            res.status(401).json({msg:'Error'})
        }
        res.status(201).json(data)
    }catch(e){
        res.status(500).json({msg:'Error: '+e})
    }
}

const getClienteId = async (req=request,res=response) => {
    try{
        const {_id} = req.body
        const dataBD = await Cliente.findById({_id})
        if(!dataBD){
            res.status(401).json({msg:"Error"})
        }
        res.status(201).json(dataBD)
    }catch(e){
        res.status(400).json({"Error:":e})
    }finally{
        
    }

}

const postCliente= async (req=request,res=response) => {
    try{
        const {name,email} = req.body
        const nameDB = await Cliente.findOne({name})
        if(nameDB){
            res.status(401).json({msg:'Error'})
        }
        const cliente = new Cliente({name,email})
        cliente.save()
        res.status(201).json({msg:'Ok'})
    }catch(e){

    }finally{
        
    }

}

const putCliente= async (req=request,res=response) => {
    try{
        const {_id,name,email} = req.body
        const dateupdate = new Date()
        const dataBD = await Cliente.findByIdAndUpdate(_id,{name,email,dateupdate},{new:true})
        res.status(202).json(dataBD)
    }catch(e){
        res.status(401).json({msg:e})
    }finally{
        
    }

}

const deleteCliente= async (req=request,res=response) => {
    try{

    }catch(e){

    }finally{
        
    }

}


module.exports = {
    getCliente,
    getClienteId,
    postCliente,
    putCliente,
    deleteCliente
}

