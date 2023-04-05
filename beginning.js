// console.log(global)

global.setTimeout(() => {
    console.log("hii")
    clearInterval(int)
}, 3000);



const int = global.setInterval(() => {
    console.log("work")
}, 1000);
 // setinterval:runs what is inside each time its set 
// clerinterval: stops program after time 