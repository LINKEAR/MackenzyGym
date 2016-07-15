
var modelRoll = require('../../shema/roll');

exports.update=function(req,res,next){
    var rollReq=req.body.obj;
    if(rollReq != "undefined" && rollReq != "null")
    {
            var roll=JSON.parse(rollReq);
            var act=new modelRoll(roll);
            var err = act.validateSync();
            if(err)
              res.send(500,err);
            modelRoll.findOneAndUpdate({_id: roll._id}, act,{upsert: true}).exec(function(err, docs) {

                if (err) res.send(500, err);
                else
                res.json(200,{message:'SUCCESS_UPDATE'});
            });
    }
    else
        res.json(500,{message:'FORM_404'});


}
