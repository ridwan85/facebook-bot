var express = require('express')
var app = express()
var port = process.env.PORT || 3000; 

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('1762109626')
})

app.listen(port, function () {
  console.log('Example app listening on port !' +port)
})