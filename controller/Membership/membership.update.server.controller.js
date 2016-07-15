
var modelMembership = require('../../shema/membership');

exports.update=function(req,res,next){
    var membershipReq=req.body.obj;
    if(membershipReq != "undefined" && membershipReq != "null")
    {
            var membership=JSON.parse(membershipReq);
            var act=new modelMembership(membership);
            var err = act.validateSync();
            if(err)
              res.send(500,err);
            modelMembership.findOneAndUpdate({_id: membership._id}, act,{upsert: true}).exec(function(err, docs) {

                if (err) res.send(500, err);
                else
                res.json(200,{message:'SUCCESS_UPDATE'});
            });
    }
    else
        res.json(500,{message:'FORM_404'});


}
