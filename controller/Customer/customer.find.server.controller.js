var modelCustomer = require('../../shema/customer');
exports.activities=function (req, res, next) {
  modelCustomer.find(function( err, customer) {
         if (err){res.send(500, err);}
         res.send(200,customer);
    });
};
