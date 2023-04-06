const fs = require('fs')
const readfile = fs.createReadStream('./docs/test2.txt', {encoding:'utf-8'})
const writefile= fs.createWriteStream('./new.txt')

// readfile.on('data', (chunk)=>{
//     console.log('---NEW CHUNK---')
//     console.log(chunk)
//     writefile.write("----------------NEW CHUNK---------------")
//     writefile.write(chunk)
// })
//pipe 
readfile.pipe(writefile)