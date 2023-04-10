const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
//deploy express app
const app = express()

//database connection method 
const dbURI = 'mongodb+srv://ajala:test@first-cloud-database.iga54vy.mongodb.net/blog-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then(result=>app.listen(3000)) // listen for request at port 3000
.catch((err)=>console.log(err))

//useing ejs 
app.set('view engine', 'ejs')

//adding static files to our html 
app.use(express.static('public')) //these is the directory where all our static files will reside  



//testing mongodbs add feature for data 
app.get('/add-blog', (req, res)=>{
    const blog = new Blog({
        title:'blog',
        snippet:'my blog', 
        body:'this is my first blog' ,
    })

    blog.save()
    .then(result=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/display', (req, res)=>{
    Blog.find()
    .then((result) =>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/single-blog', (req,res)=>{
    Blog.findById('6433e55c4ebb940ddd168ece')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})
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