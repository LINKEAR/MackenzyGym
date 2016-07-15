var express = require('express'),
    route = require('./routes'),
     

    path = require('path');

var app = express();
app.directory = __dirname;

app.use(express.static(__dirname+'/app'));
app.use(express.static(__dirname+'/bower_components'));
app.use(express.static(__dirname+'/assets'));

require('./config/environments')(app);

require('./routes/RouterFlickr')(app);
require('./routes/index')(app);
require('./routes/RouterXslx')(app);
require('./routes/router.membership')(app);
 

 




module.exports = app;
