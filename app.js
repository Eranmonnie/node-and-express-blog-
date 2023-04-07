const express = require('express')
const app = express()

//useing ejs 
app.set('view engine', 'ejs')

// listen for requesta at port 3000
app.listen(3000)

//sending html responses to route
app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/about', (req, res)=>{
    res.render('about')
})

//redirecting 
app.get('/about-us', (req, res)=>{
    res.redirect('/about')
})


//404
app.use((req, res)=>{
    res.status(404).render('404')
})