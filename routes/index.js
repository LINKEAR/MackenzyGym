//var mongojs = require('mongojs');
var url = 'mongodb://localhost:27017/MackenzyGymBD';
var ActividadCtrl=require('../controller/actividad.server.controller');
var collections = ["membresia"];
//var db = mongojs(url, collections);
var fs = require('fs');
var Flickr = require("flickrapi");
var FlickrOptions = {
    // 559-957-642
    api_key: "ff4e5ad3911214a8e6ed56e31d6f5147",
    secret: "ecb77d304a7b5061",
    permissions: "write"
};



var TelegramBot = require('node-telegram-bot-api');
 
var token = '238080572:AAE22a4inavZSTdULs09NUQcxV7fhv74oMo';
// Setup polling way 
var bot = new TelegramBot(token, {polling: true});
 bot.onText(/\/add (.+)/, function (msg,match) {
       var fromId = msg.from.id;
       console.log(fromId);
     var resp = match[1]+'>>'+fromId;
      bot.sendMessage(fromId, resp,{});
    });

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
   
    app.get('/activity/find', ActividadCtrl.activities);
    app.post('/activity/save', ActividadCtrl.save);
    app.post('/activity/update', ActividadCtrl.update);
    app.post('/activity/remove', ActividadCtrl.remove);
    app.get('/activity/findByName/:name', ActividadCtrl.findByName);
    
    
//boot telegram
    app.get('/sendMsgBoot/:msg', function (req, res, next) {
      

        bot.sendMessage('269250482', 'Seleccione a la chica que quiere reservar.', {});
        res.json(req.params.msg);
    });
//boot messenger
https://localhost:8000/messenger/request

    app.post('/messenger/request', function (req, res, next) {
      
        res.json('ok');
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