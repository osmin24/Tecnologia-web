const {request,response} = require('express')
const Universidad = require('../modules/universidad')

const getUniversidad = async (req=request,res=response) => {
    try{
        const data = await Universidad.find()
        if(!data){
            res.status(401).json({msg:'Error'})
        }
        res.status(201).json(data)
    }catch(e){
        res.status(401).json({msg:e})
    }finally{
        
    }

}

const getUniversidadId = async (req=request,res=response) => {
    try{

    }catch(e){

    }finally{
        
    }

}

const postUniversidad = async (req=request,res=response) => {
    try{
        const {name,direction,tel} = req.body
        const dataBD = await Universidad.findOne({name})
        if(!dataBD){
            res.status(401).json({msg:'Error'})
        }
        const universidad = new Universidad({name,direction,tel})
        universidad.save()
        res.status(201).json({msg:'Ok'})
    }catch(e){
        res.status(400).json({msg:e})
    }finally{
        
    }

}

const putUniversidad = async (req=request,res=response) => {
    try{
        const {_id,name,direction,tel} = body
        const dateupdate = new Date()
        await Universidad.findByIdAndUpdate(_id,{name,direction,tel,dateupdate},{new:true})
        res.status(203).json({msg:'ok'})
    }catch(e){
        res.status(400).json({msg:e})
    }finally{
        
    }

}

const deleteUniversidad = async (req=request,res=response) => {
    try{

    }catch(e){

    }finally{
        
    }

}

module.exports = {
    getUniversidad,
    getUniversidadId,
    postUniversidad,
    putUniversidad,
    deleteUniversidad
}