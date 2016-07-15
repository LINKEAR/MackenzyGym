var modelActivity = require('../../shema/activity');

exports.save = function (req, res, next) {
    var activityReq=req.body.obj;
    if(activityReq != "undefined" && activityReq != "null")
        {
           var activity=JSON.parse(activityReq);
           var act=new modelActivity(activity);
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
