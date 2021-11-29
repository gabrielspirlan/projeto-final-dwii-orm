const express = require('express'); 
const http = require('http');

const routesInternacao = require('./api/routes/internacaoRoutes');
const routesGuiaexame = require('./api/routes/guiaexameRoutes')

require('./database/indexDb');

const app = express();

app.set('url', 'http://localhost:');
app.set('porta', 3333);

app.use(express.json());

app.use(routesInternacao);
app.use(routesGuiaexame);

http.createServer(app).listen(app.get('porta'), function() {
    console.log('\nServidor Rodando ' + app.get('url') + app.get('porta'));
});