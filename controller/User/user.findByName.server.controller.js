var modelUser = require('../../shema/user');
var Q = require('q');
exports.findByName=function (req, res, next) {
  modelUser.find({ name: new RegExp(req.params.name, 'i')}, function (err,doc) {
      if (err) res.send(500, err);
        res.send(200,doc);
      });
};
exports.findByNameBackend=function(argName)
{
  var deferred = Q.defer();
   modelUser.find({ name: new RegExp(argName, 'i')}, function (err,userFind) {
      if (err)   deferred.reject(err);
      deferred.resolve(userFind);
    });
   return deferred.promise;
};
