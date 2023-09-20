const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;

    /* routing */
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>venta Artemis</title></head>');
        res.write('<body><h1>Hello from jejeje</h1></body>');
        res.write('<body><form action="/users" method="POST"><button type="submit">Users</button></form></body>');
        res.write('<body><form action="/categories" method="POST"><button type="submit">Categories</button></form></body>');
        res.write('<body><form action="/products" method="POST"><button type="submit">Products</button></form></body>');
        res.write('<body><form action="/employees" method="POST"><button type="submit">Employees</button></form></body>');
        res.write('<body><form action="/customers" method="POST"><button type="submit">Customers</button></form></body>');
        res.write('<body><form action="/sales" method="POST"><button type="submit">Sales</button></form></body>');
        res.write('<body><form action="/shopping" method="POST"><button type="submit">Shopping</button></form></body>');

        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Usuarios venta Artemis</title></head>');
        res.write('<body><h1>Hello from jejeje</h1></body>');
        res.write('<body><form action="/" method="POST"><button type="submit">Home</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/categories'){
        res.write('<html>');
        res.write('<head><title>categories venta Artemis</title></head>');
        res.write('<body><h1>Hello from jejeje</h1></body>');
        res.write('<body><form action="/" method="POST"><button type="submit">Home</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/products'){
        res.write('<html>');
        res.write('<head><title>products venta Artemis</title></head>');
        res.write('<body><h1>Hello from jejeje</h1></body>');
        res.write('<body><form action="/" method="POST"><button type="submit">Home</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/employees'){
        res.write('<html>');
        res.write('<head><title>employees venta Artemis</title></head>');
        res.write('<body><h1>Hello from jejeje</h1></body>');
        res.write('<body><form action="/" method="POST"><button type="submit">Home</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/customers'){
        res.write('<html>');
        res.write('<head><title>customers venta Artemis</title></head>');
        res.write('<body><h1>Hello from jejeje</h1></body>');
        res.write('<body><form action="/" method="POST"><button type="submit">Home</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/sales'){
        res.write('<html>');
        res.write('<head><title>sales venta Artemis</title></head>');
        res.write('<body><h1>Hello from jejeje</h1></body>');
        res.write('<body><form action="/" method="POST"><button type="submit">Home</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/shopping'){
        res.write('<html>');
        res.write('<head><title>shopping venta Artemis</title></head>');
        res.write('<body><h1>Hello from jejeje</h1></body>');
        res.write('<body><form action="/" method="POST"><button type="submit">Home</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
});

server.listen(7000);