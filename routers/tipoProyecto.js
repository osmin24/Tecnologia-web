const {Router} = require('express')
const router = Router()

const {
    getTipoProyecto,
    getTipoProyectoId,
    postTipoProyecto,
    putTipoProyecto,
    deleteTipoProyecto
} = require('../controllers/tipoProyectos')


router.get('/',getTipoProyecto)
router.get('/',getTipoProyectoId)
router.post('/',postTipoProyecto)
router.put('/',putTipoProyecto)
router.delete('/',deleteTipoProyecto)

module.exports = router
