/* @preserve
 *
 * angular-bootstrap-file
 * https://github.com/itslenny/angular-bootstrap-file-field
 *
 * Version: 0.1.3 - 02/21/2015
 * License: MIT
 */


/*
angular.module('bootstrap.fileField',[])
.directive('fileField', ['$filter',function($filter) {
  return {
    require:'ngModel',
    restrict: 'E',
    scope: {
     ext: '='
    },
    link: function (scope, element, attrs, ngModel) {


        //set default bootstrap class
        if(!attrs.class && !attrs.ngClass){
            element.addClass('btn');
        }

        var fileField = element.find('input');

        fileField.bind('change', function(event){
            scope.$evalAsync(function () {
            var extDoc=event.target.files[0].type;
              extDoc=$filter('uppercase')(extDoc);
              var accept=$filter('uppercase')(scope.ext);
              var isOk=validateExt(extDoc,accept);
              if(isOk)
                  ngModel.$setViewValue(event.target.files[0]);
              ngModel.$setValidity('fileext', isOk);

              ngModel.$setViewValue(event.target.files[0]);
              if(attrs.preview){
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        scope.$evalAsync(function(){
                            scope[attrs.preview]=e.target.result;
                        });
                    };
                    reader.readAsDataURL(event.target.files[0]);
              }
            });
        });
        fileField.bind('click',function(e){
            e.stopPropagation();
        });
        element.bind('click',function(e){
            e.preventDefault();
            fileField[0].click()
        });

    },
    template:'<button type="button"><ng-transclude></ng-transclude><input name="fileI" type="file" accept={{ext}}   style="display:none"></button>',
    replace:true,
    transclude:true
  };
}]);
*/
angular.module("bootstrap.fileField",[]).directive("fileField",['$filter',function($filter){
  function validateExt(extDoc,extVal)  {
    extDoc=extDoc.trim();
    extVal=extVal.trim();
    var extValid=extVal.split(',');
    for (var i = 0; i < extValid.length; i++) {
      var arrayExtValid=extValid[i].split('/');
      if(arrayExtValid.length>1)
      {
        var arrayExtDoc=extDoc.split('/');
        if(arrayExtDoc.length==arrayExtValid.length)
        {
              for (var j = 0; j < arrayExtDoc.length; j++) {
                   if(arrayExtValid[j]!='*'&&arrayExtDoc[j]!=arrayExtValid[i])
                   {
                     return false;

                   }
               }
        }
        else     return false;

      }
      else
      {
        var arrayExtValid=extValid[i].split('.');
        if(arrayExtValid.length>1 )
        {
            var b=extDoc.indexOf(arrayExtValid[1]);
            if(b>=0) return true
            else if(b==-1 && i==extValid.length-1)
              return false;
        }
      }
    }
    return true;
  }


    return{
        require:"ngModel",restrict:"E",scope:{ext:'='}, link:function(scope,element,attrs,ngModel)
        {
            if(!attrs.class&&!attrs.ngClass){
                element.addClass("btn")
            }
            var fileField=element.find("input");
            fileField.bind("change",function(event){scope.$evalAsync(function(){

              var extDoc=event.target.files[0].type;
              if(extDoc==undefined) ext="";
              extDoc=$filter('uppercase')(extDoc);
              var ext=scope[attrs.ext];

              if(ext==undefined) ext="";
              var accept=$filter('uppercase')(ext);
              var isOk=validateExt(extDoc,accept);
              if(isOk)ngModel.$setViewValue(event.target.files[0]);
              ngModel.$setValidity('fileext', isOk);

                if(attrs.preview && isOk){
                    var reader=new FileReader;
                    reader.onload=function(e){
                        scope.$evalAsync(function(){
                            scope[attrs.preview]=e.target.result})
                    };
                    reader.readAsDataURL(event.target.files[0])}})});
            fileField.bind("click",function(e){
              e.stopPropagation()
            });
            element.bind("click",function(e){
              e.preventDefault();fileField[0].click()
              }

            )
        },scope:{},
        template:' <button type="button"><ng-transclude></ng-transclude><input type="file" accept="{{extFile}}" style="display:none"></button>',replace:true,transclude:true
    }
}]);
