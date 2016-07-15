function customerCtrl($scope, $http, $state, $stateParams, $filter, toastr,FileReader) {
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

  $scope.customer.image=$scope.uploadFile.name;
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

        if ($scope.customerForm.$valid == true) {
            var fd = new FormData();
            var customer = JSON.stringify($scope.customer);
            fd.append('obj', customer);
            $http.post('/customer/save', fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }).success(function (data) {

                if (data.message != undefined)
                    toastr["success"]($filter('translate')(data.message));
                $state.go(('customer.find'),{arg:$scope.customer.name});
                $scope.customer = null;
            }).error(function (err) {
                var msg=evaluationResponse(err,500);
                theses.alerts=msg;
                toastr["error"]($filter('translate')(msg.type));
              })
        }
    }
    //Modificar
    $scope.update = function () {
        if ($scope.customerForm.$valid == true) {
            var fd = new FormData();
            var customer = JSON.stringify($scope.customer);
            fd.append('obj', customer);
            $http.post('/customer/update', fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }

            }).success(function (data) {
                if (data.message != undefined)
                    toastr["success"]($filter('translate')(data.message));
                    $state.go(('customer.find'),{arg:$scope.customer.name});
            }).error(function (err) {
              $scope.customer = null;
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
            query = "/customer/find";
        else
            query = "/customer/findByName/" + $stateParams.arg;
        $http.get(query, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        }).success(function (data) {
            $scope.id = "";
            $scope.customers = data;
        }).error(function (err) {
            toastr["error"]($filter('translate')('UNKNOWN_ERROR'));
            console.log(err);
        })
    }
    $scope.init = function () {
        // I'd like to run this on document ready
        $scope.showBtnModAC = true;
        $scope.showBtnNewAC = true;
        $scope.entity = 'CUSTOMER';
        var stateA = $state.current.name;
        var arrStateA = stateA.split(".");
        var op = arrStateA[1];
        if (op == undefined || op == null)
            op = "";
        $scope.operation = $filter('uppercase')(op);
        if (stateA == "customer.find") {
            $scope.find();
            $scope.customer = null;
        }
        if (stateA == "customer.new") {
             $scope.customer={image:undefined};
            $scope.showBtnModAC = false;
            //$scope.customerForm.state.$select.selected="Activo
              $scope.new=true;

        }
        if (stateA == 'customer.edit') {

            $scope.showBtnNewAC = false;
            var customerP = $stateParams.customer;
            if (customerP != "*.*") {
                $scope.customer = $stateParams.customer;
                $scope.uploadFile={name:$scope.customer.image};
            } else {
                $state.go('customer.new');
            }
        }

    }
    $scope.changeStateEdit = function (act) {
        $state.go('customer.edit', {
            customer: act
        });

    }
    $scope.init(); // doesn't work, loads my init before the page has completely loaded


}

angular
    .module('MackenzyGymApp')
    .controller('customerCtrl', customerCtrl);
