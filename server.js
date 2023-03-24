const express= require('express')
const app= express()
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const morgan= require('morgan')
require('dotenv').config()
const port = process.env.PORT


app.use(express.static(__dirname +'/assets'))
app.set('view enginer', 'ejs')
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(routes)
app.listen(port, ()=> console.log(`Server is listening in port ${port} `))
