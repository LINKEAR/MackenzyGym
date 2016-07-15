var modelEconomicActivity = require('../../shema/economicActivity');
var Q = require('q');
exports.findByName=function (req, res, next) {
  modelEconomicActivity.find({ name: new RegExp(req.params.name, 'i')}, function (err,doc) {
      if (err) res.send(500, err);
        res.send(200,doc);
      });
};
exports.findByNameBackend=function(argName)
{
  var deferred = Q.defer();
   modelEconomicActivity.find({ name: new RegExp(argName, 'i')}, function (err,economicActivityFind) {
      if (err)   deferred.reject(err);
      deferred.resolve(economicActivityFind);
    });
   return deferred.promise;
};
