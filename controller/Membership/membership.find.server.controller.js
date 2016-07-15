var modelMembership = require('../../shema/membership');
exports.activities=function (req, res, next) {
  modelMembership.find(function( err, membership) {
         if (err){res.send(500, err);}
         res.send(200,membership);
    });
};
