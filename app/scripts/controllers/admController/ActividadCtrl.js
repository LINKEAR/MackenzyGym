function activityCtrl($scope, $http, $state, $stateParams, $filter, toastr) {
    /*notify.config({
        duration: '5000'
    });
   */
    //usado en los notify
    this.alerts;
    var theses=this;
    $scope.hideAlerts=function () {theses.alerts=null}
    this.closeAlert = function(index,field) {
        theses.alerts[field].splice(index, 1);
    };
    //Guardar
//   $scope.estados=JSON.parse("[{\"nombre\":\"Activo\"},{\"nombre\":\"No Activo\"}]");
$scope.estados=["Activo","No Activo"];


    $scope.save = function () {

        if ($scope.activityForm.$valid == true) {
            var fd = new FormData();
            var activity = JSON.stringify($scope.activity);
            fd.append('obj', activity);
            $http.post('/activity/save', fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).success(function (data) {

                if (data.message != undefined)
                    toastr["success"]($filter('translate')(data.message));
                $state.go(('activity.find'),{arg:$scope.activity.name});
                $scope.activity = null;
            }).error(function (err) {
                var msg=evaluationResponse(err,500);
                theses.alerts=msg;
                toastr["error"]($filter('translate')(msg.type));
              })
        }
    }
    //Modificar
    $scope.update = function () {
        if ($scope.activityForm.$valid == true) {
            var fd = new FormData();
            var activity = JSON.stringify($scope.activity);
            fd.append('obj', activity);
            $http.post('/activity/update', fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }

            }).success(function (data) {
                if (data.message != undefined)
                    toastr["success"]($filter('translate')(data.message));
                    $state.go(('activity.find'),{arg:$scope.activity.name});
            }).error(function (err) {
              $scope.activity = null;
              var msg=evaluationResponse(err,500);
              theses.alerts=msg;
              toastr["error"]($filter('translate')(msg.type));
              console.log(err);
            })
        }

    }
    $scope.find = function () {
        var query = "";
        if ($stateParams.arg == "*.*")
            query = "/activity/find";
        else
            query = "/activity/findByName/" + $stateParams.arg;
        $http.get(query, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        }).success(function (data) {
            $scope.id = "";
            $scope.activities = data;
        }).error(function (err) {
            toastr["error"]($filter('translate')('UNKNOWN_ERROR'));
            console.log(err);
        })
    }
    $scope.init = function () {
        // I'd like to run this on document ready
        $scope.showBtnModAC = true;
        $scope.showBtnNewAC = true;
        $scope.entity = 'ACTIVITY';
        var stateA = $state.current.name;
        var arrStateA = stateA.split(".");
        var op = arrStateA[1];
        if (op == undefined || op == null)
            op = "";
        $scope.operation = $filter('uppercase')(op);
        if (stateA == "activity.find") {
            $scope.find();
            $scope.activity = null;
        }
        if (stateA == "activity.new") {

            $scope.showBtnModAC = false;
            //$scope.activityForm.state.$select.selected="Activo";

        }
        if (stateA == 'activity.edit') {
            $scope.showBtnNewAC = false;
            var activityP = $stateParams.activity;
            if (activityP != "*.*") {
                $scope.activity = $stateParams.activity;
            } else {
                $state.go('activity.new');
            }
        }

    }
    $scope.changeStateEdit = function (act) {
        $state.go('activity.edit', {
            activity: act
        });

    }
    $scope.init(); // doesn't work, loads my init before the page has completely loaded


}

angular
    .module('MackenzyGymApp')
    .controller('activityCtrl', activityCtrl);
