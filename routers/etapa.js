const express = require('express')
const router = express.Router()

const {
    getEtapa,
    getEtapaId,
    postEtapa,
    putEtapa,
    deleteEtapa
} = require('../controllers/etapa')


router.get('/',getEtapa)
router.get('/',getEtapaId)
router.post('/',postEtapa)
router.put('/',putEtapa)
router.delete('/',deleteEtapa)

module.exports = router

