const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('This is home page');
    }
    else if(req.url==='/about'){
        res.end('This is about page');
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end('Page not found');
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log('Listening to port 8000');
});