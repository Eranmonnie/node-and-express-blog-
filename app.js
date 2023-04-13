const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogroutes')
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

//middleware for gettung contents from a post request 
app.use(express.urlencoded({extended:true}))



//testing mongodbs add feature for data 

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
    res.redirect('/blogs')
})

app.get('/about', (req, res)=>{
    res.render('about', {title:'about'})
})

//blog routes   
app.use('/blogs', blogRoutes)


//redirecting 
// app.get('/about-us', (req, res)=>{
//     res.redirect('/about')
// })


//404
app.use((req, res)=>{
    res.status(404).render('404', {title:'404'})
})