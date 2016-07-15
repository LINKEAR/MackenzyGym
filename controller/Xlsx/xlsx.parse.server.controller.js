var XLSX = require('xlsx');
var activity=require('../actividad.server.controller');
// Make sure you add "node-async" to your package.json for npm
var async = require("async");
exports.parse = function (req, res, next) {
        var workbook = XLSX.readFile(req.files.file.path);
        var sheetName="Horario";
        var objArray = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        var objArrayReturn=[];
        // Array to hold async tasks
        var asyncTasks = [];
         var index=0;
        objArray.forEach(function(schedule){
          index=index+1;
          // We don't actually execute the async thing here
          // We push a function containing it on to an array of "tasks"
          asyncTasks.push(function(callback){
            // Call an async function (often a save() to MongoDB)
            activity.findByNameBackend(schedule.activity)
            .then(function(activityFind)
            {
              if (activityFind!=null && activityFind!=undefined)
                schedule.activity=activityFind[0]._id;
              objArrayReturn.push(schedule);
            })
            .fail(function(error){res.send(error)})
            .done(function(){  callback(); });
              // Async call is done, alert via callback
            });
        });

        async.parallel(asyncTasks, function(){
          res.send(JSON.stringify(objArrayReturn));
        });
};
