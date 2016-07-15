var fs = require('fs');
var Flickr = require("flickrapi");
var FlickrOptions = {
    // 559-957-642
    api_key: "ff4e5ad3911214a8e6ed56e31d6f5147",
    secret: "ecb77d304a7b5061",
    permissions: "delete"
};
module.exports = function (app) {
    app.post('/file/upload/path', function (req, res, next) {
    var fullpath = req.files.file.path;
    Flickr.authenticate(FlickrOptions, function (error, flickr) {
        var uploadOptions = {
            photos: [{
                title: req.files.file.originalFilename,
                tags: [
                "temp"
              ],
                photo: req.files.file.path
            }]
        };

       Flickr.upload(uploadOptions, FlickrOptions, function (err, result) {
            console.log("UPLOAD...................")
            if (err && err != null) {
                 return console.error(error);
            }
               res.send(result);
            });
           
        });
    });


    app.get('/file/download/path/:id/:size', function (req, res, next) {
     var photoid= req.params.id;
     var size=req.params.size;
     Flickr.authenticate(FlickrOptions, function (error, flickr) {
        flickr.photos.search({
          user_id: flickr.options.user_id,
        }, function(err, result) {
           var photos=result.photos.photo;
            var url='';
            ;
            var arrayFind=photos.filter(function(it) {
                return it.id == photoid;
            });
            var item=arrayFind[0];
            if (item!=undefined)
   url='https://farm'+item.farm+'.staticflickr.com/'+item.server+'/'+item.id+'_'+item.secret+'_'+size+'.jpg';
             else
                 url='404' 
              res.send(url);
            /*photos.forEach(function(item) {
                
               if(item.id==photoid) {
                   url='https://farm'+item.farm+'.staticflickr.com/'+item.server+'/'+item.id+'_'+item.secret+'_'+size+'.jpg';
                   res.send(url);
               }
            });*/
        });
        });
    });
    
    
       app.get('/file/remove/path/:id', function (req, res, next) {
        //var fullpath = req.files.file.path;
           console.log('inside rem')
        var photoid = req.params.id;
        Flickr.authenticate(FlickrOptions, function (error, flickr) {
            
            flickr.photos.delete({
               api_key: 'ff4e5ad3911214a8e6ed56e31d6f5147',
               photo_id:req.params.id
            }, function (err, result) {
                console.log("delete...................")
                if (err && err != null) {
                    return console.error(error);
                }
                res.send(result);
            });

        });
    });

    
};











