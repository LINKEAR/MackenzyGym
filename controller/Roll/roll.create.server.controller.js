var modelRoll = require('../../shema/roll');

exports.save = function (req, res, next) {
    var rollReq=req.body.obj;
    if(rollReq != "undefined" && rollReq != "null")
        {
           var roll=JSON.parse(rollReq);
           var act=new modelRoll(roll);
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
