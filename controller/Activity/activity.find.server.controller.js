var modelActivity = require('../../shema/activity');
exports.activities=function (req, res, next) {
  modelActivity.find(function( err, activity) {
         if (err){res.send(500, err);}
         res.send(200,activity);
    });
};
