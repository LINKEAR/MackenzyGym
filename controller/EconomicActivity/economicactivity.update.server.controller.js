
var modelEconomicActivity = require('../../shema/economicActivity');

exports.update=function(req,res,next){
    var economicActivityReq=req.body.obj;
    if(economicActivityReq != "undefined" && economicActivityReq != "null")
    {
            var economicActivity=JSON.parse(economicActivityReq);
            var act=new modelEconomicActivity(economicActivity);
            var err = act.validateSync();
            if(err)
              res.send(500,err);
            modelEconomicActivity.findOneAndUpdate({_id: economicActivity._id}, act,{upsert: true}).exec(function(err, docs) {

                if (err) res.send(500, err);
                else
                res.json(200,{message:'SUCCESS_UPDATE'});
            });
    }
    else
        res.json(500,{message:'FORM_404'});


}
