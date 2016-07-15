
var modelschedule = require('../../shema/schedule');
exports.save = function (req, res, next) {
    var scheduleReq=req.body.obj;
    if(scheduleReq != "undefined" && scheduleReq != "null")
        {
           var schedule=JSON.parse(scheduleReq);
           var act=new modelschedule(schedule);
           var err = act.validateSync();
            if(err)
              res.send(500,err);
             act.save(function (err) {
                console.log(err) ;
                if (err) res.send(500, err);//res.send(500, err);
                 else
                 res.json(200,{message:'SUCCESS_SAVE'});
             });
        }
    else
        res.json(500,{message:'FORM_404'});

};

exports.update=function(req,res,next){
    var scheduleReq=req.body.obj;
    if(scheduleReq != "undefined" && scheduleReq != "null")
    {
            var schedule=JSON.parse(scheduleReq);
            var act=new modelschedule(schedule);
            var err = act.validateSync();
            if(err)
              res.send(500,err);
            modelschedule.findOneAndUpdate({_id: schedule._id}, act,{upsert: true}).exec(function(err, docs) {

                if (err) res.send(500, err);
                else
                res.json(200,{message:'SUCCESS_UPDATE'});
            });
    }
    else
        res.json(500,{message:'FORM_404'});


}
exports.remove=function(req,res,next){
     modelschedule.remove({ _id: req.id}, function (err) {
      if (err) res.send(500, err);
         res.json(200,{message:'SUCCESS_REMOVE'});
      // removed!
    });
}
exports.findByName=function (req, res, next) {
  modelschedule.find({ name: new RegExp(req.params.name, 'i')}, function (err,doc) {
      if (err) res.send(500, err);
        res.send(200,doc);
      // removed!
    });
};

exports.activities=function (req, res, next) {
  modelschedule.find(function( err, schedule) {
         if (err){res.send(500, err);}
         res.send(200,schedule);
    });
};
