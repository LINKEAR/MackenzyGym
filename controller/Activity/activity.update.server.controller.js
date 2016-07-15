
var modelActivity = require('../../shema/activity');

exports.update=function(req,res,next){
    var activityReq=req.body.obj;
    if(activityReq != "undefined" && activityReq != "null")
    {
            var activity=JSON.parse(activityReq);
            var act=new modelActivity(activity);
            var err = act.validateSync();
            if(err)
              res.send(500,err);
            modelActivity.findOneAndUpdate({_id: activity._id}, act,{upsert: true}).exec(function(err, docs) {

                if (err) res.send(500, err);
                else
                res.json(200,{message:'SUCCESS_UPDATE'});
            });
    }
    else
        res.json(500,{message:'FORM_404'});


}
