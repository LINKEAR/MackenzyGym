var modelInvoice = require('../../shema/invoice');
exports.activities=function (req, res, next) {
  modelInvoice.find(function( err, invoice) {
         if (err){res.send(500, err);}
         res.send(200,invoice);
    });
};
