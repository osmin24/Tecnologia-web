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

router.get('/',getCliente)
router.get('/',getClienteId)
router.post('/',postCliente)
router.put('/',putCliente)
router.delete('/',deleteCliente)


module.exports = router