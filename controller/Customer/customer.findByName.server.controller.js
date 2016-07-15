var modelCustomer = require('../../shema/customer');
var Q = require('q');
exports.findByName=function (req, res, next) {
  modelCustomer.find({ name: new RegExp(req.params.name, 'i')}, function (err,doc) {
      if (err) res.send(500, err);
        res.send(200,doc);
      });
};
exports.findByNameBackend=function(argName)
{
  var deferred = Q.defer();
   modelCustomer.find({ name: new RegExp(argName, 'i')}, function (err,customerFind) {
      if (err)   deferred.reject(err);
      deferred.resolve(customerFind);
    });
   return deferred.promise;
};
