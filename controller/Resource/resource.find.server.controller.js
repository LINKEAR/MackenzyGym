var modelResource = require('../../shema/resource');
exports.activities=function (req, res, next) {
  modelResource.find(function( err, resource) {
         if (err){res.send(500, err);}
         res.send(200,resource);
    });
};
