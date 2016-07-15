
var modelResource = require('../../shema/resource');

exports.update=function(req,res,next){
    var resourceReq=req.body.obj;
    if(resourceReq != "undefined" && resourceReq != "null")
    {
            var resource=JSON.parse(resourceReq);
            var act=new modelResource(resource);
            var err = act.validateSync();
            if(err)
              res.send(500,err);
            modelResource.findOneAndUpdate({_id: resource._id}, act,{upsert: true}).exec(function(err, docs) {

                if (err) res.send(500, err);
                else
                res.json(200,{message:'SUCCESS_UPDATE'});
            });
    }
    else
        res.json(500,{message:'FORM_404'});


}
