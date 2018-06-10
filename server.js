const express = require('express')
const WebSocketServer = require('ws').Server; 
const stockUpdaterService = require('./src/domain/service/stockUpdater');

var app = express();

// app.get('/', function (req, res) {
//    res.sendFile('./src', {root: __dirname});
// })

app.listen(3000, function(){
    console.log("stock quotes service listening on port 3000 !")

    stockUpdaterService.updateStockQuotes(function(error, stock){
      if(stock){
          console.log("updated notification received for ", stock.symbol, stock);
      }  
    })

})

