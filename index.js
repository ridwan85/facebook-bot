var express = require('express')
var app = express()
var port = process.env.PORT || 3000; 

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('1762109626')
})

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === 'fl_secret') {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }  
});

app.listen(port, function () {
  console.log('Example app listening on port !' +port)
})