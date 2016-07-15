function membershipCtrl($scope, $http, $state, $stateParams, $filter, toastr,FileReader) {
    /*notify.config({
        duration: '5000'
    });
   */
    //usado en los notify
    $scope.extFile=".jpg,.jpeg";
    $scope.errorFile=true;
    $scope.new=false;
    $scope.previewImageOp="http://www.contactosmatrimoniales.com/_trat/img.php?modo=th&codigo_per_emp=68681&sexo=H";
    $scope.previewImage=null;
    this.alerts;
    var theses=this;
    $scope.hideAlerts=function () {theses.alerts=null}
    this.closeAlert = function(index,field) {
        theses.alerts[field].splice(index, 1);
    };
    //Guardar
//   $scope.estados=JSON.parse("[{\"nombre\":\"Activo\"},{\"nombre\":\"No Activo\"}]");

$scope.inix=function(){
  console.log($scope.uploadFile);

  $scope.membership.image=$scope.uploadFile.name;
  $scope.new=false;
  //$filter('translate')(msg.type)
  toastr["success"]('La verificacion de alrchivo ha sido exitosa');
}

$scope.getFile = function () {
        $scope.progress = 0;
        FileReader.readAsDataUrl($cope.uploadFile, $scope)
                      .then(function(result) {
                          alert(result);
                          $scope.previewImage = result;
                      });
}

$scope.estados=["Activo","No Activo"];


    $scope.save = function () {

        if ($scope.membershipForm.$valid == true) {
            var fd = new FormData();
            var membership = JSON.stringify($scope.membership);
            fd.append('obj', membership);
            $http.post('/membership/save', fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).success(function (data) {

                if (data.message != undefined)
                    toastr["success"]($filter('translate')(data.message));
                $state.go(('membership.find'),{arg:$scope.membership.name});
                $scope.membership = null;
            }).error(function (err) {
                var msg=evaluationResponse(err,500);
                theses.alerts=msg;
                toastr["error"]($filter('translate')(msg.type));
              })
        }
    }
    //Modificar
    $scope.update = function () {
        if ($scope.membershipForm.$valid == true) {
            var fd = new FormData();
            var membership = JSON.stringify($scope.membership);
            fd.append('obj', membership);
            $http.post('/membership/update', fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }

            }).success(function (data) {
                if (data.message != undefined)
                    toastr["success"]($filter('translate')(data.message));
                    $state.go(('membership.find'),{arg:$scope.membership.name});
            }).error(function (err) {
              $scope.membership = null;
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
            query = "/membership/find";
        else
            query = "/membership/findByName/" + $stateParams.arg;
        $http.get(query, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        }).success(function (data) {
            $scope.id = "";
            $scope.memberships = data;
        }).error(function (err) {
            toastr["error"]($filter('translate')('UNKNOWN_ERROR'));
            console.log(err);
        })
    }
    $scope.init = function () {
        // I'd like to run this on document ready
        $scope.showBtnModAC = true;
        $scope.showBtnNewAC = true;
        $scope.entity = 'MEMBERSHIP';
        var stateA = $state.current.name;
        var arrStateA = stateA.split(".");
        var op = arrStateA[1];
        if (op == undefined || op == null)
            op = "";
        $scope.operation = $filter('uppercase')(op);
        if (stateA == "membership.find") {
            $scope.find();
            $scope.membership = null;
        }
        if (stateA == "membership.new") {
             $scope.membership={image:undefined};
            $scope.showBtnModAC = false;
            //$scope.membershipForm.state.$select.selected="Activo
              $scope.new=true;

        }
        if (stateA == 'membership.edit') {

            $scope.showBtnNewAC = false;
            var membershipP = $stateParams.membership;
            if (membershipP != "*.*") {
                $scope.membership = $stateParams.membership;
                $scope.uploadFile={name:$scope.membership.image};
            } else {
                $state.go('membership.new');
            }
        }

    }
    $scope.changeStateEdit = function (act) {
        $state.go('membership.edit', {
            membership: act
        });

    }
    $scope.init(); // doesn't work, loads my init before the page has completely loaded


}

angular
    .module('MackenzyGymApp')
    .controller('membershipCtrl', membershipCtrl);
