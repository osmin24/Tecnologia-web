 const {app} = require('./app')
 const dotenv = require('dotenv').config()
 const conDB = require('./configuration/confingurationDB')



 app.listen(app.get('port'), () =>{
    console.log(`http://localhost:${app.get('port')}/cliente/getCliente`)
 })