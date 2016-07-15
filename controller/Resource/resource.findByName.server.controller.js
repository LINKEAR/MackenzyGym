var modelResource = require('../../shema/resource');
var Q = require('q');
exports.findByName=function (req, res, next) {
  modelResource.find({ name: new RegExp(req.params.name, 'i')}, function (err,doc) {
      if (err) res.send(500, err);
        res.send(200,doc);
      });
};
exports.findByNameBackend=function(argName)
{
  var deferred = Q.defer();
   modelResource.find({ name: new RegExp(argName, 'i')}, function (err,resourceFind) {
      if (err)   deferred.reject(err);
      deferred.resolve(resourceFind);
    });
   return deferred.promise;
};
