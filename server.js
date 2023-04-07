const http = require('http')

const state = http.createServer((req, res)=>{
    console.log('request made')
    res.setHeader('Content-Type', 'text/html')
    res.write("<h1>hello world</h1>")
    res.end()
})

state.listen('3000', 'localhost', ()=>{
    console.log("listening at port 3000")
    console.log("http://localhost:3000")
})