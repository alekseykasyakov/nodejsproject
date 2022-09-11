const fs = require('fs');
//create a file
// fs.writeFile('example.txt',"this is an example bla bla bla", (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('File success');  
//         fs.readFile('example.txt', 'utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);    
//         });  
// });

fs.rename('example.txt', 'example2.txt', (err)=>{
    if(err)
        console.log(err);
    else
        console.log('successfully renamed the file');    
})

