const {connect} = require('mongoose')

const connection = await connect(process.env.URL,{

}).catch((e) => {
    console.log(e)
})

module.exports = connection

