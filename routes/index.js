const app = (module.exports=require('express')())

app.get('/', (req, res)=>{
    res.render('../views/pages/index.ejs', {
        page:'home'
    })
})

app.use('/contact', require('./contact'))