const express = require('express')
const app = express()

//useing ejs 
app.set('view engine', 'ejs')

// listen for requesta at port 3000
app.listen(3000)

//sending html responses to route
app.get('/', (req, res)=>{

    const blogs = [

    { title:"omo", body:"fjjrsctvshhybuniopxf sggbosndfobinsdobnadon baoufnboaidnfb;iodafbdfbdf"},
    { title:"ttt", body:"drgjdctvybuniopfgfxfxfmx fsggbgmxfgmosndfo xmfnsdobnadonb xmaoufnboaidnfb;iodafkkbdfbdf"},
    { title:"omuuo", body:"ydjrddctvxf xmybdfhsrtjii lilifvgnzgargunigopxfhxfsggbo sndfobadonbaoufnboaibdf"},
 
    ]
       
    
    res.render('home', {title:'home', blogs})
})

app.get('/about', (req, res)=>{
    res.render('about', {title:'about'})
})

app.get('/blogs/create', (req, res)=>{
    res.render('create', {title:'create'})
})

//redirecting 
// app.get('/about-us', (req, res)=>{
//     res.redirect('/about')
// })


//404
app.use((req, res)=>{
    res.status(404).render('404', {title:'404'})
})