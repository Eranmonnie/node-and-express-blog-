const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const state = http.createServer((req, res)=>{  
    console.log(req.url, req.method)
    console.log(_.random(1, 20))
    //using lodash

    res.setHeader('Content-Type', 'text/html')

    let path = './views/';

    if (req.url === '/'){
        path += 'home.html'
        res.statusCode = 200
       }
       
    else if(req.url === '/about'){
    path += 'about.html'
    res.statusCode = 200
    }

    else if(req.url === '/about-me'){
        res.statusCode = 301
        res.setHeader('Location', '/about')
        res.end()
        }

    else{
        path += '404.html'
        res.statusCode = 404
        }
   

    
    // reading html file
    fs.readFile(path, (err, data)=>{
        if (err){
            console.log(err)
            res.end()
        }
        else{
            //the res.write can be excluded if you are writing only once and the data object would be passed to res.end 
            res.write(data)
            res.end()
        }
    })
    
})

state.listen('3000', 'localhost', ()=>{
    console.log("listening at port 3000")
    console.log("http://localhost:3000")
})
//installed nodemon globally 
