
var modelUser = require('../../shema/user');

exports.update=function(req,res,next){
    var userReq=req.body.obj;
    if(userReq != "undefined" && userReq != "null")
    {
            var user=JSON.parse(userReq);
            var act=new modelUser(user);
            var err = act.validateSync();
            if(err)
              res.send(500,err);
            modelUser.findOneAndUpdate({_id: user._id}, act,{upsert: true}).exec(function(err, docs) {

                if (err) res.send(500, err);
                else
                res.json(200,{message:'SUCCESS_UPDATE'});
            });
    }
    else
        res.json(500,{message:'FORM_404'});


}
