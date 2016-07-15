var modelRoll = require('../../shema/roll');
var Q = require('q');
exports.findByName=function (req, res, next) {
  modelRoll.find({ name: new RegExp(req.params.name, 'i')}, function (err,doc) {
      if (err) res.send(500, err);
        res.send(200,doc);
      });
};
exports.findByNameBackend=function(argName)
{
  var deferred = Q.defer();
   modelRoll.find({ name: new RegExp(argName, 'i')}, function (err,rollFind) {
      if (err)   deferred.reject(err);
      deferred.resolve(rollFind);
    });
   return deferred.promise;
};
