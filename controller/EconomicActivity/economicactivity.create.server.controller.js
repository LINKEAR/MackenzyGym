var modelEconomicActivity = require('../../shema/economicActivity');

exports.save = function (req, res, next) {
    var economicActivityReq=req.body.obj;
    if(economicActivityReq != "undefined" && economicActivityReq != "null")
        {
           var economicActivity=JSON.parse(economicActivityReq);
           var act=new modelEconomicActivity(economicActivity);
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
