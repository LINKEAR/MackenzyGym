var modelCustomer = require('../../shema/customer');
exports.remove=function(req,res,next){
     modelCustomer.remove({ _id: req.id}, function (err) {
      if (err) res.send(500, err);
         res.json(200,{message:'SUCCESS_REMOVE'});
      // removed!
    });
}
