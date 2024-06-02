const {Router} = require('express')
const router = Router()

const {
    getUniversidad,
    getUniversidadId,
    postUniversidad,
    putUniversidad,
    deleteUniversidad
} = require('../controllers/universidad')

router.get('/getUniverdad',getUniversidad)
router.get('/getUniversidadId',getUniversidadId)
router.post('/postUniversidad',postUniversidad)
router.put('/putUniversidad',putUniversidad)
router.delete('/deleteUniversidad',deleteUniversidad)

module.exports = router