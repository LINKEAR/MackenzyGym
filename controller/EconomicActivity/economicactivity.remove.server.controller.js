var modelEconomicActivity = require('../../shema/economicActivity');
exports.remove=function(req,res,next){
     modelEconomicActivity.remove({ _id: req.id}, function (err) {
      if (err) res.send(500, err);
         res.json(200,{message:'SUCCESS_REMOVE'});
      // removed!
    });
}
