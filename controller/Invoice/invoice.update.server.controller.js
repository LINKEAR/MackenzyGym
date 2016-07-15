
var modelInvoice = require('../../shema/invoice');

exports.update=function(req,res,next){
    var invoiceReq=req.body.obj;
    if(invoiceReq != "undefined" && invoiceReq != "null")
    {
            var invoice=JSON.parse(invoiceReq);
            var act=new modelInvoice(invoice);
            var err = act.validateSync();
            if(err)
              res.send(500,err);
            modelInvoice.findOneAndUpdate({_id: invoice._id}, act,{upsert: true}).exec(function(err, docs) {

                if (err) res.send(500, err);
                else
                res.json(200,{message:'SUCCESS_UPDATE'});
            });
    }
    else
        res.json(500,{message:'FORM_404'});


}
