var modelUser = require('../../shema/user');
exports.activities=function (req, res, next) {
  modelUser.find(function( err, user) {
         if (err){res.send(500, err);}
         res.send(200,user);
    });
};
