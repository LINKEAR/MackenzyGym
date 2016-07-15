var modelMembership = require('../../shema/membership');

exports.save = function (req, res, next) {
    var membershipReq=req.body.obj;
    if(membershipReq != "undefined" && membershipReq != "null")
        {
           var membership=JSON.parse(membershipReq);
           var act=new modelMembership(membership);
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
