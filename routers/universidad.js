const {Router} = require('express')
const router = Router()

const {
    getUniversidad,
    getUniversidadId,
    postUniversidad,
    putUniversidad,
    deleteUniversidad
} = require('../controllers/universidad')

router.get('/',getUniversidad)
router.get('/',getUniversidadId)
router.post('/',postUniversidad)
router.put('/',putUniversidad)
router.delete('/',deleteUniversidad)

module.exports = router