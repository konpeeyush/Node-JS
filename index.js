const fs = require('fs')
const https = require('http');

const server = https.createServer();
server.on('request', (req, res) => {
    // fs.readFile("input.txt",function(err,data){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         res.end(data.toString());
    //     }
    // });

    // Another way to read file

    // const readStream = fs.createReadStream("input.txt");
    // readStream.on('data', (chunk) => {
    //     res.write(chunk);
    // });
    // readStream.on('end', () => {
    //     res.end();
    // });
    // readStream.on('error', (err) => {
    //     console.log(err);
    //     res.end("File not found");
    // });

    // Another way to read file
    const readStream = fs.createReadStream("input.txt");
    readStream.pipe(res);
});
server.listen(8000, "127.0.0.1");