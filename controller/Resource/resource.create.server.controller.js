var modelResource = require('../../shema/resource');

exports.save = function (req, res, next) {
    var resourceReq=req.body.obj;
    if(resourceReq != "undefined" && resourceReq != "null")
        {
           var resource=JSON.parse(resourceReq);
           var act=new modelResource(resource);
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
