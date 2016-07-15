var mongojs = require('mongojs');
var url = 'mongodb://localhost:27017/MackenzyGymBD';
var formidable = require('formidable');
var collections = ["membresia"];
var db = mongojs(url, collections);
var fs = require('fs');
var Flickr = require("flickrapi");
var FlickrOptions = {
    // 559-957-642
    api_key: "ff4e5ad3911214a8e6ed56e31d6f5147",
    secret: "ecb77d304a7b5061",
    permissions: "write"
};


module.exports = function (app) {
   
    app.get('/', function (req, res, next) {
        res.render('index');
    });
    app.post('/membresia', function (req, res, next) {
        db.membresia.save(req.body, function (err, saved) {
            console.log(saved);
            res.send('xxxxxxxx');
        });

    });  
    app.get('/membresias', function (req, res, next) {
        db.membresia.find(function (err, docs) {
            res.json(docs);
        });
    });


    app.get('/findMembresiaById/:id', function (req, res, next) {
        db.membresia.find({
            '_id': db.ObjectId(req.params.id)
        }, function (err, doc) {
            console.log(doc);
            res.json(doc);

        });
    });
    app.post('/deleteMembresia', function (req, res, next) {
        db.membresia.remove({
            '_id': db.ObjectId(req.body.id)
        }, function (err, deleted) {
            console.log(deleted);
            res.send();
        });
    });
};