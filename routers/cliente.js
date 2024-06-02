const {Router} = require('express')

const router = Router({
    caseSensitive:true,
    strict:true
})

const {
    getCliente,
    getClienteId,
    postCliente,
    putCliente,
    deleteCliente,

} = require('../controllers/cliente')

router.get('/getCliente',getCliente)
router.get('/getClienteId',getClienteId)
router.post('/postCliente',postCliente)
router.put('/putCliente',putCliente)
router.delete('/deleteCliente',deleteCliente)


module.exports = router