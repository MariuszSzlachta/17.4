var express = require('express');
var app = express();
app.use(express.static('assets'));
app.use(function(req, res){
  console.log('Hej, jestem pośrednikiem między żądaniem a odpowiedzią!');
});

app.get('/', function(req, res){
  res.sendFile('./index.html');
})

app.get('/userform', function(req, res){
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  }
  res.end(JSON.stringify(response));
})

var server = app.listen(3000, '127.0.0.1', function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});