const {Router} = require('express')
const router = Router()

const {
    getTipoProyecto,
    getTipoProyectoId,
    postTipoProyecto,
    putTipoProyecto,
    deleteTipoProyecto
} = require('../controllers/tipoProyectos')


router.get('/getTipoProyecto',getTipoProyecto)
router.get('/getTipoProyectoId',getTipoProyectoId)
router.post('/postTipoProyecto',postTipoProyecto)
router.put('/putTipoProyecto',putTipoProyecto)
router.delete('/deleteTipoProyecto',deleteTipoProyecto)

module.exports = router
