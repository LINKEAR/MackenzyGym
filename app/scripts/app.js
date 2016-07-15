(function () {
    angular.module('MackenzyGymApp', [
         'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize'      ,              // ngSanitize

         'cgNotify',
        'toastr',
        'ngAnimate',
        'ui.mask',
        'xeditable',
        'ui.select',
        'filereader',
      //  "ngTable",
      //  "ngTableDemos",

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

    ])
    .constant('Animations', {
      opacity: {
        start: 'opacity: 0',
        end: 'opacity: 1'
      },
      'slide-in-right': {
        start: 'transform: translateX(-100%)',
        end: 'transform: translateX(0)'
      }
    })
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^s*(https?|local|data):/);
        $compileProvider.aHrefSanitizationWhitelist(/^s*(https?|local|data|ftp|mailto|chrome-extension):/);
    }]);
})();
