var express = require('express')
    , fs = require('fs')
    ,   path = require('path')
    ,   rootPath = path.normalize(__dirname)
    ,   bodyParser = require('body-parser')


var app = express();
app.use(bodyParser());



app.use(function(req, res, next){
    //add header to allow cross domain javascript on request
    res.set({'Access-Control-Allow-Origin': '*'})
    next()
})

// Bootstrap routes
var routes_path = rootPath + '/server//routes'
fs.readdirSync(routes_path).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log('Add routes from '+routes_path + '/' + file)
        require(routes_path + '/' + file)(app)
    }
})




app.set('port', (process.env.PORT || 80))

app.use(express.static(__dirname + '/client'))

/*app.get('/', function(request, response) {
  response.send('Hello World!')
})*/

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
