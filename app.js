// const logger = require('./logger');

// logger('mohit')

// console.log(logger)

/************************** Path module **************************/

// const path = require('path');

// let pathObj = path.basename(__filename)

// console.log('>>', pathObj)

/************************** FS module **************************/
const fs = require('fs');

// WRITE FILE
let content = 'next line.'
    // fs.writeFile('./test.txt', content, (err) => {
    //     if (err) console.log('>>>>', err)
    //     else console.log('<><><><> Write operation completed.')
    // })

// APPEND FILE
// fs.appendFile('./test.txt', content, (err) => {
//     if (err) console.log('>>>>', err)
//     else console.log('<><><><> Append operation completed.')
// })

// READ FILE
// fs.readFile('./textFile.txt', "utf8", function(err, data) {
//     if (err) throw err;

//     console.log(data);
// });

// OPEN FILE
// fs.open('./test.txt', 'r+', (err, fd) => {
//     if (err) {
//         console.log(err)
//     } else {
//         fs.readFile(fd, 'utf8', (err, data) => {
//             if (err) {
//                 console.log('>>-------->', err)
//             } else {
//                 console.log('>>-------->', data)

//                 fs.close(fd, (err) => {
//                     if (err) console.log('>>-------->', err)
//                     else console.log('>>--------> File closed.')
//                 })
//             }
//         })

//     }
// })

// DELETE FILE
fs.unlink('./test.txt', () => {
    console.log('File succesfully ')
})