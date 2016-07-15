function scheduleCtrl($scope, $http, $state, $stateParams, $filter, toastr)  {


this.doUploadXls = function () {
      alert('xxx');
      //create form data object
      var fd = new FormData();
      fd.append('title', $scope.uploadFile.name);
      fd.append('file', $scope.uploadFile);
      //send the file / data to your server
      console.log(fd)
      $http.post('/xlsx/parseJSON', fd, {
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

$scope.dayWeeek=[{id:'1', day:'Lunes'},
             {id:'2', day:'Martes'},
             {id:'3', day:'Miercoles'},
             {id:'4', day:'Jueves'},
             {id:'5', day:'Viernes'},
             {id:'6', day:'Sabado'},
             {id:'7', day:'Domingo'}
            ];
  $scope.schedule = [
   {id: 1, activity:1, day:'Lunes',startTime: '1200am', timeDuration: '1'},
   {id: 2, activity:1, day:'Lunes',startTime: '0800am', timeDuration: '2'},
   {id: 3, activity:2, day:'Lunes',startTime: '1200am', timeDuration: '3'},
   {id: 4, activity:2, day:'Lunes',startTime: '0800am', timeDuration: '1'},
 ];

 $scope.activity = [
   {value: 1, activity: 'boxeo'},
   {value: 2, activity: 'dancing'},
];



$scope.showActivity = function(sched) {
   var selected = [];
   if(sched.activity) {
     selected = $filter('filter')($scope.activity, {value: sched.activity});
   }
   return selected.length ? selected[0].activity : 'Not set';
 };

$scope.table=null;


$scope.checkTimeDuration = function(data) {
  var TIME_REGEXP = /^[1-9]{1}$/;
  if (data==undefined)
      return "Campo Requerido";
  else if (data<=0)
      return "Valor no valido. Validos [1-9]";

}

 $scope.checkTime = function(type,sched,data) {

      $scope.table=sched;

   var TIME_REGEXP = /^(?:0?[1-9]|[1][0-2])(?:[0-5]?[0-9]|[6][0])(?:[a]|[p])[m]$/;
   if (!TIME_REGEXP.test(data)) {
       return "Formato no valido";
   }

/*

   if(type=="endTime")
   {
      var start=formatTime24(sched.startTime);
      var startHour=parseInt(start.time.hour);
      var startMinute=parseInt(start.time.minute);
      var end=formatTime24(data);
      var endHour=parseInt(end.time.hour);
      var endMinute=parseInt(end.time.minute);
      if(((endHour<startHour)||((endHour==startHour)&&(endMinute<startMinute))))
              return $filter('translate')("INTERVAL_TIME_ERROR");


    }
    else {
      var start=formatTime24(data);
      var startHour=parseInt(start.time.hour);
      var startMinute=parseInt(start.time.minute);
      var end=formatTime24(sched.endTime);
      var endHour=parseInt(end.time.hour);
      var endMinute=parseInt(end.time.minute);
      if(((endHour<startHour)||((endHour==startHour)&&(endMinute<startMinute))))
            return $filter('translate')("INTERVAL_TIME_ERROR");

    }*/
  };
  $scope.viewInputTime=function(data){
    return formatLabelInputTime12(data);
  };
 $scope.saveUser = function(data, id) {
   //$scope.user not updated yet
   console.log(data);
   console.log(id);
/*
   var start=formatTime24(data.startTime);
   var startHour=parseInt(start.time.hour);
   var startMinute=parseInt(start.time.minute);
   var end=formatTime24(data.endTime);
   var endHour=parseInt(end.time.hour);
   var endMinuter=parseInt(end.time.minute);
   if(((endHour<startHour)||((endHour==startHour)&&(endMinute<startMinute))))
   {
        toastr["error"]($filter('translate')("INTERVAL_TIME_ERROR"));

        angular.extend($scope.table, {id: id});

    }else*/
   angular.extend(data, {id: id});
   //return $http.post('/saveUser', data);
 };
    $scope.ver = function(a)
    {
        console.log($scope.uno);
    }

}

      angular
          .module('MackenzyGymApp')
          .controller('scheduleCtrl', scheduleCtrl)
.run(function(editableOptions, editableThemes){
  editableThemes.bs3.selectClass='js-example-basic-single';
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
