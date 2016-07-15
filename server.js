var app = require('./app');
var fs=require('fs');
var https=require('https');
var option={
	key: fs.readFileSync('./ssl/key.pem', 'utf8'),
   cert: fs.readFileSync('./ssl/server.crt', 'utf8')
}	
https.createServer(option,app).listen(app.get('port'), function () {
    console.log('Express (' + app.get('env') + ') server listening on port ' + app.get('port'));
});

/*
require('http').createServer(app).listen(app.get('port'), function () {
    console.log('Express (' + app.get('env') + ') server listening on port ' + app.get('port'));
});


var cron = require('node-cron');

  var task =  cron.schedule('0 30 12 1-31 * * ', function(){
      var fecha=Date.now();
      console.log('running every minute 1, 2, 4 and 5');
    });

task.start();
console.log('xhjgasjhdjgas');
*/
//certificado ssl prov
/*
openssl req -newkey rsa:2048 -new -nodes -keyout key.pem -out csr.pem
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out server.crt

*/