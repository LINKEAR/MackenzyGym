/**
 * Created by srikanth on 15-01-2016.
 */
var app = angular.module('app', [

  'ui.grid',
  'ui.grid.pagination',
  'ui.grid.selection',
  'ui.grid.cellNav',
  //'ui.grid.expandable',
  'ui.grid.edit',
  'ui.grid.rowEdit',
  'ui.grid.saveState',
  'ui.grid.resizeColumns',
  'ui.grid.pinning',
  'ui.grid.moveColumns',
  'ui.grid.exporter',
  'ui.grid.infiniteScroll',
  'ui.grid.importer',
  'ui.grid.grouping'
]);

function genderFilter() {
  var genderHash = {
    'M': 'male',
    'F': 'female'
  };

  return function(input) {
    var result;
    var match;
    if (!input) {
      return '';
    } else if (result = genderHash[input]) {
      return result;
    } else if ((match = input.match(/(.+)( \([$\d,.]+\))/)) && (result = genderHash[match[1]])) {
      return result + match[2];
    } else {
      return input;
    }
  };
}
function maritalFilter() {
  var genderHash = {
    'M': 'Married',
    'S': 'Single'
  };

  return function(input) {
    var result;
    var match;
    if (!input) {
      return '';
    } else if (result = genderHash[input]) {
      return result;
    } else if ((match = input.match(/(.+)( \([$\d,.]+\))/)) && (result = genderHash[match[1]])) {
      return result + match[2];
    } else {
      return input;
    }
  };
}



//app.controller('gridCtrl', ['$scope', '$http', '$log', '$timeout', 'uiGridConstants', '$q', '$interval',

  function gridCtrl($scope, $http, $log, $timeout, uiGridConstants, $q, $interval) {
    $scope.gridOptions = {
      enableRowSelection: true,
      enableSelectAll: true,
      selectionRowHeaderWidth: 35,
      rowHeight: 35,
      showGridFooter: true
    };

    $scope.convertDate = function(str) {
      //console.log(str);
      var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2),
        times = date.getHours()
      minutes = date.getMinutes();
      var join = [date.getFullYear(), mnth, day].join("/");
      //console.log(times+':'+minutes);
      return times+':'+minutes;
    };
    //var expandableScope = {};

    $scope.gridOptions = {
      enableFiltering: true,
      //expandableRowTemplate: '<div style="padding:5px;"><div ui-grid="row.entity.subGridOptions[0]" ui-grid-edit  ui-grid-row-edit ui-grid-selection style="height:340px;display:inline-block;"></div></div>',
      //expandableRowHeight: 350,
      columnDefs: [{
          name: "",
          field: "fake",
          cellTemplate: '<div class="ui-grid-cell-contents" >' +
            '<button value="Edit" ng-if="!row.inlineEdit.isEditModeOn" ng-click="row.inlineEdit.enterEditMode($event)">Delete</button>' +
            '<button value="Edit" ng-if="!row.inlineEdit.isEditModeOn" ng-click="row.inlineEdit.enterEditMode($event)">Edit</button>' +
            '<button value="Edit" ng-if="row.inlineEdit.isEditModeOn" ng-click="row.inlineEdit.saveEdit($event)">Update</button>' +
            '<button value="Edit" ng-if="row.inlineEdit.isEditModeOn" ng-click="row.inlineEdit.cancelEdit($event)">Cancel</button>' +
            '</div>',
          enableCellEdit: false,
          enableFiltering: false,
          enableSorting: false,
          showSortMenu: false,
          enableColumnMenu: false,
        }, {
          name: 'employeeid',
          enableCellEdit: true,
          type: "number"
        },

        {
          name: 'managerid',
          enableCellEdit: true
        }, {
          name: 'hiredate',
          enableCellEdit: true,
          type: "time",
          cellFilter: 'date: "HH:mm:ss.sss"',
          cellTemplate: '<div class="ui-grid-cell-contents">{{grid.appScope.convertDate(row.entity[col.field])}}</div>'
            //cellTemplate: '<input type="time" ng-model="row.entity.field03" ng-click="grid.appScope.showMe(row.entity.hiredate)">'
        }, {
          name: 'title',
          enableCellEdit: true,
          cellTemplate: '<div class="ui-grid-cell-contents"><div ng-class="{\'viewr-dirty\' : row.inlineEdit.entity[col.field].isValueChanged }">{{row.entity[col.field]}}</div></div>'
        },
        //{ name: 'birthdate', enableCellEdit: true, type: "date", cellFilter: 'date:"yyyy/MM/dd"' },
        {
          name: 'maritalstatus',
          enableCellEdit: true,
          cellFilter: "maritalFilter",
          editableCellTemplate: 'ui-grid/dropdownEditor',
          editDropdownValueLabel: 'maritalstatus',
          editDropdownOptionsArray: [{
            id: 'M',
            maritalstatus: 'Married'
          }, {
            id: 'S',
            maritalstatus: 'Single'
          }]
        }, {
          name: 'gender',
          enableCellEdit: true,
          cellFilter: 'genderFilter',
          editableCellTemplate: 'ui-grid/dropdownEditor',
          editDropdownValueLabel: 'gender',
          editDropdownOptionsArray: [{
            id: 'M',
            gender: 'male'
          }, {
            id: 'F',
            gender: 'female'
          }]
        },

      ],
      //enableGridMenu: true,
      // virtualizationThreshold: 60,
      /*expandableRowScope: {
          subGridVariable: 'subGridScopeVariable'
      }*/
    }

    //$scope.gridOptions.multiSelect = true;

    $http.get('https://rawgit.com/msrikanth508/uiGridInlineEditPOC/master/data/employeeData.json')
      .success(function(data) {
        $scope.gridOptions.data = data.slice(0, 55);; //[data[0], data[1]];
      });

    $scope.info = {};

    $scope.gridOptions.onRegisterApi = function(gridApi) {
      //set gridApi on scope
      $scope.gridApi = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope, function(row) {
        var msg = 'row selected ' + row.isSelected;
        $log.log(msg);
      });

      gridApi.selection.on.rowSelectionChangedBatch($scope, function(rows) {

        var msg = 'rows changed ' + rows.length;
        $log.log(msg);
      });

      gridApi.edit.on.afterCellEdit($scope, function(rowEntity, colDef, newValue, oldValue) {

        var selectedRows = $scope.gridApi.selection.getSelectedRows();

        if (newValue != oldValue) {

          rowEntity.state = "Changed";
          //Get column
          var rowCol = $scope.gridApi.cellNav.getFocusedCell().col.colDef.name;

          angular.forEach(selectedRows, function(item) {
            item[rowCol] = rowEntity[rowCol];
            $scope.convertDate(rowEntity[rowCol]);
            item.state = "Changed";
            item.isDirty = false;
            item.isError = false;
          });

        }

      });

      gridApi.rowEdit.on.saveRow($scope, function(rowEntity) {
        // create a fake promise - normally you'd use the promise returned by $http or $resource
        //Get all selected rows
        var selectedRows = $scope.gridApi.selection.getSelectedRows();
        //var rowCol = $scope.gridApi.cellNav.getFocusedCell().col.colDef.name;
        var promise = $q.defer();
        $scope.gridApi.rowEdit.setSavePromise(rowEntity, promise.promise);

        $interval(function() {
          if (rowEntity.gender === 'male') {
            promise.reject();
          } else {
            promise.resolve();
          }
        }, 3000, 1);
      })



    };
  }




angular.module('ui.grid').factory('InlineEdit', ['$rootScope', '$rootScope', 'uiGridRowEditService',
  function($interval, $rootScope, uiGridRowEditService) {
    function inlineEdit(entity, index, grid) {
      this.grid = grid;
      this.index = index;
      this.entity = {};
      this.isEditModeOn = false;
      this.init(entity);
    }

    inlineEdit.prototype = {
      init: function(rawEntity) {
        var self = this;
        self.isEditModeOn = true;
        for (var prop in rawEntity) {
          self.entity[prop] = {
            value: rawEntity[prop],
            isValueChanged: false,
            isSave: false,
            isCancel: false,
            isEdit: true
          }
        }
      },

      enterEditMode: function(event) {

        event && event.stopPropagation();
        var self = this;
        self.isEditModeOn = true;

        // cancel all rows which are in edit mode
        self.grid.rows.forEach(function(row) {
          if (row.inlineEdit && row.inlineEdit.isEditModeOn && row.uid !== self.grid.rows[self.index].uid) {
            row.inlineEdit.cancelEdit();
          }
        });

        // Reset all the values
        for (var prop in self.entity) {
          self.entity[prop].isSave = false;
          self.entity[prop].isCancel = false;
          self.entity[prop].isEdit = true;
        }

      },

      saveEdit: function(event) {
        event && event.stopPropagation();
        var self = this;

        self.isEditModeOn = false;

        for (var prop in self.entity) {
          self.entity[prop].isSave = true;
          self.entity[prop].isEdit = false;
        }

        uiGridRowEditService.saveRow(self.grid, self.grid.rows[self.index])();
      },

      cancelEdit: function(event) {
        event && event.stopPropagation();
        var self = this;

        self.isEditModeOn = false;
        for (var prop in self.entity) {
          self.entity[prop].isCancel = true;
          self.entity[prop].isEdit = false;
        }
      }
    }

    return inlineEdit;
  }
]);

angular
        .module('MackenzyGymApp')
        .filter('genderFilter',genderFilter)
        .filter('maritalFilter',maritalFilter)
        .controller('gridCtrl',gridCtrl);
