const http = require('http')
const fs = require('fs')

const state = http.createServer((req, res)=>{  
    console.log(req.url, req.method)

    res.setHeader('Content-Type', 'text/html')

    let path = './views/';

    if (req.url === '/'){
        path += 'home.html'
       }
       
    else if(req.url === '/about'){
    path += 'about.html'
    }
    
    else{
        path += '404.html'
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