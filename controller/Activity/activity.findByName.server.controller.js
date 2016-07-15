var modelActivity = require('../../shema/activity');
var Q = require('q');
exports.findByName=function (req, res, next) {
  modelActivity.find({ name: new RegExp(req.params.name, 'i')}, function (err,doc) {
      if (err) res.send(500, err);
        res.send(200,doc);
      });
};
exports.findByNameBackend=function(argName)
{
  var deferred = Q.defer();
   modelActivity.find({ name: new RegExp(argName, 'i')}, function (err,activityFind) {
      if (err)   deferred.reject(err);
      deferred.resolve(activityFind);
    });
   return deferred.promise;
};
