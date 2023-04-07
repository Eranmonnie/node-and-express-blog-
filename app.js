const express = require('express')
const app = express()

// listen for requesta at port 3000
app.listen(3000)

//sending html responses to route
app.get('/', (req, res)=>{
    res.sendFile('./views/home.html', {root :__dirname})
})

app.get('/about', (req, res)=>{
    res.sendFile('./views/about.html', {root :__dirname})
})
