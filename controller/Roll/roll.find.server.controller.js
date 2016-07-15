var modelRoll = require('../../shema/roll');
exports.activities=function (req, res, next) {
  modelRoll.find(function( err, roll) {
         if (err){res.send(500, err);}
         res.send(200,roll);
    });
};
