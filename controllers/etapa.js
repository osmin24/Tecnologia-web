const {request,response} = require('express')
const Etapa = require('../modules/etapa')

const getEtapa= async (req=request,res=response) => {
    try{
        const data = await Etapa.find()
        if(!data){
            res.status(401).json({msg:"Error"})
        }
        res.status(201).json(data)
    }catch(e){
        res.status(401).json({msg:e})
    }finally{
        
    }

}

const getEtapaId = async (req=request,res=response) => {
    try{
        const {_id} = req.body
        const dataBD = await Etapa.findOne({_id})
        if(!dataBD){
            res.status(401).json({msg:'Error'})
        }
        res.status(201).json(dataBD)
    }catch(e){
        res.status(400).json({msg:e})
    }finally{
        
    }

}

const putEtapa = async (req=request,res=response) => {
    try{
        const {_id,name} = req.body
        const dateupdate = new Date()
        const data = await Etapa.findByIdAndUpdate(_id,{name,dateupdate},{new:true})
        res.status(203).json(data)
    }catch(e){
        res.status(401).json({msg:e})
    }finally{
        
    }

}

const postEtapa = async (req=request,res=response) => {
    try{
        const {name} = req.body
        const dataDB = await Etapa.findOne({name})
        if(!dataDB){
            return res.status(401).json({msg:'Error'})
        }
        const etapa = new Etapa({name})
        etapa.save()
        res.status(201).json(dataDB)
    }catch(e){
        res.status(401).json({msg:e})
    }finally{
        
    }

}

const deleteEtapa = async (req=request,res=response) => {
    try{

    }catch(e){

    }finally{
        
    }

}

module.exports = {
    getEtapa,
    getEtapaId,
    postEtapa,
    putEtapa,
    deleteEtapa
}