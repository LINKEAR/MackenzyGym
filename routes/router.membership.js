//var mongojs = require('mongojs');
var MembershipCtrl=require('../controller/membership.server.controller');
module.exports = function (app) {
    app.get('/membership/find', MembershipCtrl.activities);
    app.post('/membership/save', MembershipCtrl.save);
    app.post('/membership/update', MembershipCtrl.update);
    app.post('/membership/remove', MembershipCtrl.remove);
    app.get('/membership/findByName/:name', MembershipCtrl.findByName);
};
