const http = require('http');

// Server has a 5 seconds keep-alive timeout by default
http
    .createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'Aplication/json' });

        let salida = {
            nombre: 'Renseld Lugo',
            edad: 30,
            url: req.url
        }


        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);


console.log(`Escuchando el puerto 8080`);