const express = require('express')
const morgan = require('morgan')
const app = express()

//useing ejs 
app.set('view engine', 'ejs')

//adding static files to our html 
app.use(express.static('public')) //these is the directory where all our static files will reside  

// listen for requesta at port 3000
app.listen(3000)

//does the same thing as the one bellow 
app.use(morgan('dev'))

// using middleware you get we dont need it since we have inastalled morgan 
// app.use((req, res, next)=>{
//     console.log("new request made")
//     console.log("host: ",req.hostname)
//     console.log("path: ", req.path)
//     console.log("method: ",req.method)
//     next()
// })
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