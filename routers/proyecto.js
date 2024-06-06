const {Router} = require('express')
const router = Router()

const {
    getProyecto,
    postProyecto,
    putProyecto,
    deleteProyecto
} = require('../controllers/proyectos')

router.get('/getProyecto',getProyecto)
router.post('/postProyecto',postProyecto)
router.put('/putProyecto',putProyecto)
router.delete('/deleteProyecto',deleteProyecto)

module.exports = router