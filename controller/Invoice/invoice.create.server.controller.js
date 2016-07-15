var modelInvoice = require('../../shema/invoice');

exports.save = function (req, res, next) {
    var invoiceReq=req.body.obj;
    if(invoiceReq != "undefined" && invoiceReq != "null")
        {
           var invoice=JSON.parse(invoiceReq);
           var act=new modelInvoice(invoice);
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
