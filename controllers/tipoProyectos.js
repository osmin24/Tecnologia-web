const {request,response} = require('express')
const TipoProyecto = require('../modules/tipoProyectos')

const getTipoProyecto = async (req=request,res=response) => {
    try{
        const data = await TipoProyecto.find()
        if(!data){
            res.status(401).json({msg:'Error'})
        }
        res.status(201).json(data)
    }catch(e){
        res.status(401).json({msg:e})
    }finally{
        
    }

}

const getTipoProyectoId = async (req=request,res=response) => {
    try{

    }catch(e){

    }finally{
        
    }

}

const postTipoProyecto = async (req=request,res=response) => {
    try{
        const {name} = req.body
        const dataDB = await TipoProyecto.findOne({name})
        if(!dataDB){
            res.status(401).json({msg:"Error"})
        }
        const tipoProyecto = new TipoProyecto({name})
        tipoProyecto.save()
        res.status(201).json(tipoProyecto)
    }catch(e){
        res.status(401).json({msg:e})
    }finally{
        
    }

}

const putTipoProyecto = async (req=request,res=response) => {
    try{
        const {_id,name} = req.body
        const dateupdate = new Date()
        const data = await TipoProyecto.findByIdAndUpdate(id,{name,dateupdate},{new:true})
        res.status(201).json(data)
    }catch(e){
        res.status(401).json({msg:e})
    }finally{
        
    }

}

const deleteTipoProyecto = async (req=request,res=response) => {
    try{

    }catch(e){

    }finally{
        
    }

}

module.exports = {
    getTipoProyecto,
    getTipoProyectoId,
    postTipoProyecto,
    putTipoProyecto,
    deleteTipoProyecto
}