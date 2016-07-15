var modelCustomer = require('../../shema/customer');

exports.save = function (req, res, next) {
    var customerReq=req.body.obj;
    if(customerReq != "undefined" && customerReq != "null")
        {
           var customer=JSON.parse(customerReq);
           var act=new modelCustomer(customer);
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
