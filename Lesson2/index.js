const fs = require('fs');

fs.exists('demo2.txt', (result) => {
if(result){
    console.log("found")
}else{
    console.log("not found");
}
})


// const {totalmem, freemem} = require("os")
// // console.log(os.userInfo());
// // console.log(os.homedir());
// // console.log(os.hostname());
// console.log(totalmem());
// console.log(freemem());

// console.log(__dirname);
// console.log(__filename);

// const path = require("path");

// const extensionName =path.extname("index.html")
// console.log(extensionName)

// const joinName = path.join(__dirname + "/views");
// console.log(joinName);