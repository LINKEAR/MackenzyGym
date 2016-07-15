var modelUser = require('../../shema/user');

exports.save = function (req, res, next) {
    var userReq=req.body.obj;
    if(userReq != "undefined" && userReq != "null")
        {
           var user=JSON.parse(userReq);
           var act=new modelUser(user);
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
