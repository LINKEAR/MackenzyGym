var modelEconomicActivity = require('../../shema/economicActivity');
exports.activities=function (req, res, next) {
  modelEconomicActivity.find(function( err, economicActivity) {
         if (err){res.send(500, err);}
         res.send(200,economicActivity);
    });
};
