
var modelCustomer = require('../../shema/customer');

exports.update=function(req,res,next){
    var customerReq=req.body.obj;
    if(customerReq != "undefined" && customerReq != "null")
    {
            var customer=JSON.parse(customerReq);
            var act=new modelCustomer(customer);
            var err = act.validateSync();
            if(err)
              res.send(500,err);
            modelCustomer.findOneAndUpdate({_id: customer._id}, act,{upsert: true}).exec(function(err, docs) {

                if (err) res.send(500, err);
                else
                res.json(200,{message:'SUCCESS_UPDATE'});
            });
    }
    else
        res.json(500,{message:'FORM_404'});


}
