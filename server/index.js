const express = require('express')
const app = express()

const morgan = require('morgan')

//Settings
app.set('port', process.env.PORT || 4000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//Server listening
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})