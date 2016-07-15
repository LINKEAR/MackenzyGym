var modelInvoice = require('../../shema/invoice');
var Q = require('q');
exports.findByName=function (req, res, next) {
  modelInvoice.find({ name: new RegExp(req.params.name, 'i')}, function (err,doc) {
      if (err) res.send(500, err);
        res.send(200,doc);
      });
};
exports.findByNameBackend=function(argName)
{
  var deferred = Q.defer();
   modelInvoice.find({ name: new RegExp(argName, 'i')}, function (err,invoiceFind) {
      if (err)   deferred.reject(err);
      deferred.resolve(invoiceFind);
    });
   return deferred.promise;
};
