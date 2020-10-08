const express = require('express')
const app = express();

const hbs = require('hbs');

require('./hbs/helpers/helpers.js');

app.use(express.static(`${__dirname}/public`));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Renseld Lugo',
        anio: new Date().getFullYear()
    });
});


app.get('/about', function(req, res) {

    res.render('about', {
        anio: new Date().getFullYear()
    });
});


app.listen(3000, () => {
    console.log(`Escuchando por el puerto 3000`);
})