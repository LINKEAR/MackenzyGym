var modelActivity = require('../../shema/activity');
exports.remove=function(req,res,next){
     modelActivity.remove({ _id: req.id}, function (err) {
      if (err) res.send(500, err);
         res.json(200,{message:'SUCCESS_REMOVE'});
      // removed!
    });
}
