var xlsxCtrl=require('../controller/xlsx.server.controller');
var fs = require('fs');

module.exports = function (app) {
//  app.get('/xlsx/build', ScheduleCtrl.activities);
    app.get('/xlsx/parseJSON', function(req,res){res.send('ok');});
    app.post('/xlsx/parseJSON', xlsxCtrl.parse);

};
