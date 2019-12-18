/**

@author Rafael Gouveia da Silva
@version 1.0
@description Folha de pagamento da DPGE-MS
**/
var app = require('./config/server.js');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/sistemas', function(req, res){
    res.sendFile(__dirname + '/app/views/sistemas.html');
});

app.listen(3000,function(){
    console.log('Servidor ON')
});