/* 1. Importar el modulo global http */
const http = require('http');
const fs = require('fs');
/* requestListener */
/* function requestListener(req, res){
    Es mejor pasar como funcion anonima.
} */

/* 2. crea el servidor web */
/* preferiblemente usar arrow function */
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    
    /* routing */

    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>My first response page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    /* console.log(req.url, req.method, req.headers); */
    /* cierra o sale del ciclo continuo de eventos */
    /* process.exit(); */

    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'ricardo');
        res.statusCode = 302;
        res.setHeader('location','/');
        return res.end();
    }

    /* Enviando respuestas */
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first response page</title></head>');
    res.write('<body><h1>Hello from jejeje</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);
 