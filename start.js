var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')

http.createServer(function (pedido, resposta) {
 
var caminho = url.parse(pedido.url).pathname;

if (caminho==='/') {
 var ficheiro = path.join(__dirname,  caminho, 'index.html');
} else {
 var ficheiro = path.join(__dirname,  caminho);
}
 
}).listen(3000, 'localhost', function () {
  console.log('--- O servidor arrancou –--');
});

// Aqui vamos escrever o código do servidor que vai ser
// executado sempre que for feito um pedido
 

