var modelMembership = require('../../shema/membership');
var Q = require('q');
exports.findByName=function (req, res, next) {
  modelMembership.find({ name: new RegExp(req.params.name, 'i')}, function (err,doc) {
      if (err) res.send(500, err);
        res.send(200,doc);
      });
};
exports.findByNameBackend=function(argName)
{
  var deferred = Q.defer();
   modelMembership.find({ name: new RegExp(argName, 'i')}, function (err,membershipFind) {
      if (err)   deferred.reject(err);
      deferred.resolve(membershipFind);
    });
   return deferred.promise;
};
