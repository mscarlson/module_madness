var http = require('http');
var balanceData = require("./exportData.js");


http.createServer(function(req,res){
    res.writeHead(200);
    res.write(balanceData.message() + balanceData.balance() + "\n");
    res.end();
}).listen(8000);
