const express = require('express')
const router = express.Router()

const {
    getEtapa,
    getEtapaId,
    postEtapa,
    putEtapa,
    deleteEtapa
} = require('../controllers/etapa')


router.get('/getEtapa',getEtapa)
router.get('/getEtapaId',getEtapaId)
router.post('/postEtapa',postEtapa)
router.put('/putEtapa',putEtapa)
router.delete('/deleteEtapa',deleteEtapa)

module.exports = router

