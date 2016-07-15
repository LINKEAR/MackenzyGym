var modelInvoice = require('../../shema/invoice');
exports.remove=function(req,res,next){
     modelInvoice.remove({ _id: req.id}, function (err) {
      if (err) res.send(500, err);
         res.json(200,{message:'SUCCESS_REMOVE'});
      // removed!
    });
}
