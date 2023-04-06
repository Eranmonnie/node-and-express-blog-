// files
const fs = require('fs')

// raad

fs.readFile("./docs/test.txt", (err, data)=>{

    if (err){
        console.log(err)
    }
    console.log(data.toString())
})

//write

fs.writeFile("./docs/test2.txt" , "hello world" , ()=>{
    console.log("new file")
})

//make directory 
if (!(fs.existsSync('./directory'))){
fs.mkdir('./directory', (err)=>{
    if (err){
        console.log(err)
    }
    console.log("directory created")
})
}
else{
    fs.rmdir("./directory", (err)=>{
        if (err){
            console.log(err)
        }
        console.log("directory deleted")
    }) 
}


//delete directory
if (fs.existsSync('./deleteme.txt')){
    fs.unlink('./deleteme.txt', (err)=>{
        if (err){
            console.log(err)
        }
        console.log('file deleted')
    })
}
else{
    console.log('file has already been deleted or does not exist')
}
//if testing mske deleteme.txt