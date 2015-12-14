var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('port', (process.env.PORT || 5000))

app.use(express.static('public'))
data = {url: 'http://www.meekhao.com/wp-content/uploads/2015/05/james3.jpg'}

app.get('/data', (req, res) => res.json(data))

app.post('/', urlencodedParser, function (req, res) {
  console.log(req.body)
  data = req.body
  app.get('/data', (req, res) => res.json(data))
  res.sendfile('public/index.html')
})

var server = app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
