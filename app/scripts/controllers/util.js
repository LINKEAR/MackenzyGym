function findPotentialHead(stringJSON)
{
   var arrayFind=stringJSON.split(':');
   var arrayReturn=[];
   arrayReturn.push(arrayFind[0]);
    for(var i=0;i<arrayFind.length;i++)
    {
	  if(arrayFind[i].indexOf('},')!=-1)
	     arrayReturn.push(arrayFind[i]);

    }
    return arrayReturn;
}


function cleanPrintFoot(str){
   var arrayFind=str.split(/\W+/);
   for(i=0;i<arrayFind.length;i++)
    {
	  if(arrayFind[i]!="" && arrayFind[i]!=null && arrayFind[i]!=undefined)
	     return arrayFind[i];
    }

}
function cleanHeader(str){
   var arrayFind=str.split(/\W+/);
   if(arrayFind.length<=3)
     return arrayFind[1];
   else
     return arrayFind[2];
   return undefined;
}
function findFootPrintDiscardHead(stringJSON)
{
   var arrayFind=stringJSON.split('}');
   var arrayReturn=[];
    for(var i=0;i<arrayFind.length;i++)
    {
	  if(arrayFind[i].indexOf('{')==-1)
	  {
		var foot=cleanPrintFoot(arrayFind[i]);
                if(foot!=undefined && arrayReturn.indexOf(foot)==-1)
                    arrayReturn.push(foot);

	  }
    }
    return arrayReturn;
}

function findHead(arrayDiscart,arrayPotentialHead)
{
   var headers=[];
    for(var i=0;i<arrayDiscart.length;i++)
    {
var size=arrayPotentialHead.length;

	for(var j=0;j<size;j++)
        {

	         var strHead=arrayPotentialHead[j];

		 if(strHead!=undefined &&  strHead.indexOf(arrayDiscart[i])!=-1)
	         {
	               arrayPotentialHead.splice(j,1);
         	 }
	}

    }
    var size=arrayPotentialHead.length;
    for(var j=0;j<size;j++)
        {

	    var headerStr= cleanHeader(arrayPotentialHead[j]);
            headers.push(headerStr);
	}



    return headers;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////MAS USADAS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var messageNotify = function (notify, messageArg, classesArg, notifyTemplate) {
      //assets/stylesheets/plugins/angular-notify/angular-notify.min.css','assets/javascripts/plugins/angular-notify/angular-notify.min.js'
      if (notifyTemplate == undefined || notifyTemplate == null)
          notifyTemplate = 'views/common/notify.html';
      notify({
          message: messageArg,
          classes: classesArg,
          templateUrl: notifyTemplate
      });

  }

  var doUploadPicture = function (scope) {
      //create form data object
      var fd = new FormData();
      fd.append('title', scope.uploadFile.name);
      fd.append('file', scope.uploadFile);
      //send the file / data to your server
      console.log(fd)
      $http.post('/file/upload/path', fd, {
          transformRequest: angular.identity,
          headers: {
              'Content-Type': undefined
          }
      }).success(function (data) {
          console.log(data)
      }).error(function (err) {
          //do something on error
          console.log(err)
      })
  }
  var doDownloadPicture = function (id, size) {
      console.log('download ctrl....');
      //var id = '25767940671';
      //var size = 'b';
      $http.get('/file/download/path/' + id + '/' + size, {
          transformRequest: angular.identity,
          headers: {
              'Content-Type': undefined
          }
      }).success(function (data) {
          if (data != '404')
              previewImage = data;
          console.log(data);
      }).error(function (err) {
          //do something on error
          console.log(err)
      })
  }
  //descubrir errores de backend

  function evaluationResponse(resp,status){
      if(status==500)
       {

           if(resp.message!=undefined&&resp.message.indexOf("validation failed") != -1)
           {
               str="{\"type\":\"VALIDATION_ERROR\"";
               var stringJSON=JSON.stringify(resp.errors);
               var header=findHead(findFootPrintDiscardHead(stringJSON),findPotentialHead(stringJSON));
               for(var h=0;h<header.length;h++)
               {
                   var strHead=header[h];
                   var ax=resp.errors[strHead].kind+"_error";
                   str=str+",\""+strHead+"\":[{\"msg\":\""+ax+"\"}]"

               }
               str=str+"}";
               msg=JSON.parse(str);

            }
           else
           if(resp.code!=undefined&&resp.code==11000)
            {
               var error= resp.errmsg.split(":");
               var errorStr=error[2];
               errorStr=cleanPrintFoot(errorStr);
               var field=errorStr.split("_");
               var json="{\"type\":\"DUPLICATE_ERROR\",\""+field[0]+"\":[{\"msg\":\"duplicate_error\"}]}";
               msg=JSON.parse(json);


            }
            else{
                var json="{\"type\":\"UNKNOWN_ERROR\"}";
                msg=JSON.parse(json);
            }

            return msg;
       }

  }

  //analizar parametros time
function formatTime24(cadena)
{
  var hour=cadena.substring(0, 2);
  var minute=cadena.substring(2, 4);
  var apm=cadena.substring(4, 6);
  if(apm=="pm")
     hour=parseInt(hour)+12;

  var json="{\"time\":{\"hour\":\""+ hour + "\", \"minute\":\""+minute+ "\"}}";
  return (JSON.parse(json));

}

function formatViewInputTime12(hour,minute)
{
  var apm="am";
  if(hour>12){
     hour=hour-12;
     apm="pm";
  }
  return hour+minute+apm;
}
function formatLabelInputTime12(cadena)
{
  var hour=cadena.substring(0, 2);
  var minute=cadena.substring(2, 4);
  var apm=cadena.substring(4, 6);
  return hour+":"+minute+" "+apm;
}




  function asyncGreet(name) {
      var deferred = $q.defer();

      setTimeout(function () {
          deferred.notify('About to greet ' + name + '.');

          if (okToGreet(name)) {
              deferred.resolve('Hello, ' + name + '!');
          } else {
              deferred.reject('Greeting ' + name + ' is not allowed.');
          }
      }, 1000);

      return deferred.promise;
  }
