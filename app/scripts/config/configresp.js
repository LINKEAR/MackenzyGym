/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views/viewtemplate/
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    //Configure Idle settings
    IdleProvider.idle(5); //in seconds
    IdleProvider.timeout(120); //in seconds

    $urlRouterProvider.otherwise("/dashboards/dashboard_1");

    $ocLazyLoadProvider.config({
        //Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('dashboards', {
            abstract: true,
            url: "/dashboards",
            templateUrl: "views/common/content.html",
        })
        .state('dashboards.dashboard_1', {
            url: "/dashboard_1",
            templateUrl: "views/viewtemplate/dashboard_1.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {

                            serie: true,
                            name: 'angular-flot',
                            files: [ 'assets/javascripts/plugins/flot/jquery.flot.js', 'assets/javascripts/plugins/flot/jquery.flot.time.js', 'assets/javascripts/plugins/flot/jquery.flot.tooltip.min.js', 'assets/javascripts/plugins/flot/jquery.flot.spline.js', 'assets/javascripts/plugins/flot/jquery.flot.resize.js', 'assets/javascripts/plugins/flot/jquery.flot.pie.js', 'assets/javascripts/plugins/flot/curvedLines.js', 'assets/javascripts/plugins/flot/angular-flot.js', ]
                        },
                        {
                            name: 'angles',
                            files: ['assets/javascripts/plugins/chartJs/angles.js', 'assets/javascripts/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['assets/javascripts/plugins/peity/jquery.peity.min.js', 'assets/javascripts/plugins/peity/angular-peity.js']
                        }
                    ]);
                }
            }
        })
                
        .state('dashboards.dashboard_2', {
            url: "/dashboard_2",
            templateUrl: "views/viewtemplate/dashboard_2.html",
            data: { pageTitle: 'Dashboard 2' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ 'assets/javascripts/plugins/flot/jquery.flot.js', 'assets/javascripts/plugins/flot/jquery.flot.time.js', 'assets/javascripts/plugins/flot/jquery.flot.tooltip.min.js', 'assets/javascripts/plugins/flot/jquery.flot.spline.js', 'assets/javascripts/plugins/flot/jquery.flot.resize.js', 'assets/javascripts/plugins/flot/jquery.flot.pie.js', 'assets/javascripts/plugins/flot/curvedLines.js', 'assets/javascripts/plugins/flot/angular-flot.js', ]
                        },
                        {
                            serie: true,
                            files: ['assets/javascripts/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js', 'assets/stylesheets/plugins/jvectormap/jquery-jvectormap-2.0.2.css']
                        },
                        {
                            serie: true,
                            files: ['assets/javascripts/plugins/jvectormap/jquery-jvectormap-world-mill-en.js']
                        },
                        {
                            name: 'ui.checkbox',
                            files: ['bower_components/angular-bootstrap-checkbox/angular-bootstrap-checkbox.js']
                        }
                    ]);
                }
            }
        })
        .state('dashboards.dashboard_3', {
            url: "/dashboard_3",
            templateUrl: "views/viewtemplate/dashboard_3.html",
            data: { pageTitle: 'Dashboard 3' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'angles',
                            files: ['assets/javascripts/plugins/chartJs/angles.js', 'assets/javascripts/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['assets/javascripts/plugins/peity/jquery.peity.min.js', 'assets/javascripts/plugins/peity/angular-peity.js']
                        },
                        {
                            name: 'ui.checkbox',
                            files: ['bower_components/angular-bootstrap-checkbox/angular-bootstrap-checkbox.js']
                        }
                    ]);
                }
            }
        })
        .state('dashboards_top', {
            abstract: true,
            url: "/dashboards_top",
            templateUrl: "/content_top_navigation.html",
        })
        .state('dashboards_top.dashboard_4', {
            url: "/dashboard_4",
            templateUrl: "views/viewtemplate/dashboard_4.html",
            data: { pageTitle: 'Dashboard 4' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'angles',
                            files: ['assets/javascripts/plugins/chartJs/angles.js', 'assets/javascripts/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['assets/javascripts/plugins/peity/jquery.peity.min.js', 'assets/javascripts/plugins/peity/angular-peity.js']
                        },
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ 'assets/javascripts/plugins/flot/jquery.flot.js', 'assets/javascripts/plugins/flot/jquery.flot.time.js', 'assets/javascripts/plugins/flot/jquery.flot.tooltip.min.js', 'assets/javascripts/plugins/flot/jquery.flot.spline.js', 'assets/javascripts/plugins/flot/jquery.flot.resize.js', 'assets/javascripts/plugins/flot/jquery.flot.pie.js', 'assets/javascripts/plugins/flot/curvedLines.js', 'assets/javascripts/plugins/flot/angular-flot.js', ]
                        }
                    ]);
                }
            }
        })
        .state('dashboards.dashboard_4_1', {
            url: "/dashboard_4_1",
            templateUrl: "views/viewtemplate/dashboard_4_1.html",
            data: { pageTitle: 'Dashboard 4' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'angles',
                            files: ['assets/javascripts/plugins/chartJs/angles.js', 'assets/javascripts/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['assets/javascripts/plugins/peity/jquery.peity.min.js', 'assets/javascripts/plugins/peity/angular-peity.js']
                        },
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ 'assets/javascripts/plugins/flot/jquery.flot.js', 'assets/javascripts/plugins/flot/jquery.flot.time.js', 'assets/javascripts/plugins/flot/jquery.flot.tooltip.min.js', 'assets/javascripts/plugins/flot/jquery.flot.spline.js', 'assets/javascripts/plugins/flot/jquery.flot.resize.js', 'assets/javascripts/plugins/flot/jquery.flot.pie.js', 'assets/javascripts/plugins/flot/curvedLines.js', 'assets/javascripts/plugins/flot/angular-flot.js', ]
                        }
                    ]);
                }
            }
        })
        .state('dashboards.dashboard_5', {
            url: "/dashboard_5",
            templateUrl: "views/viewtemplate/dashboard_5.html",
            data: { pageTitle: 'Dashboard 5' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ 'assets/javascripts/plugins/flot/jquery.flot.js', 'assets/javascripts/plugins/flot/jquery.flot.time.js', 'assets/javascripts/plugins/flot/jquery.flot.tooltip.min.js', 'assets/javascripts/plugins/flot/jquery.flot.spline.js', 'assets/javascripts/plugins/flot/jquery.flot.resize.js', 'assets/javascripts/plugins/flot/jquery.flot.pie.js', 'assets/javascripts/plugins/flot/curvedLines.js', 'assets/javascripts/plugins/flot/angular-flot.js', ]
                        },
                        {
                            files: ['assets/javascripts/plugins/sparkline/jquery.sparkline.min.js']
                        }
                    ]);
                }
            }
        })
        .state('layouts', {
            url: "/layouts",
            templateUrl: "views/viewtemplate/layouts.html",
            data: { pageTitle: 'Layouts' },
        })
        .state('charts', {
            abstract: true,
            url: "/charts",
            templateUrl: "views/common/content.html",
        })
        .state('charts.flot_chart', {
            url: "/flot_chart",
            templateUrl: "views/viewtemplate/graph_flot.html",
            data: { pageTitle: 'Flot chart' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ 'assets/javascripts/plugins/flot/jquery.flot.js', 'assets/javascripts/plugins/flot/jquery.flot.time.js', 'assets/javascripts/plugins/flot/jquery.flot.tooltip.min.js', 'assets/javascripts/plugins/flot/jquery.flot.spline.js', 'assets/javascripts/plugins/flot/jquery.flot.resize.js', 'assets/javascripts/plugins/flot/jquery.flot.pie.js', 'assets/javascripts/plugins/flot/curvedLines.js', 'assets/javascripts/plugins/flot/angular-flot.js', ]
                        }
                    ]);
                }
            }
        })
        .state('charts.rickshaw_chart', {
            url: "/rickshaw_chart",
            templateUrl: "views/viewtemplate/graph_rickshaw.html",
            data: { pageTitle: 'Rickshaw chart' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            reconfig: true,
                            serie: true,
                            files: ['assets/javascripts/plugins/rickshaw/vendor/d3.v3.js','assets/javascripts/plugins/rickshaw/rickshaw.min.js']
                        },
                        {
                            reconfig: true,
                            name: 'angular-rickshaw',
                            files: ['assets/javascripts/plugins/rickshaw/angular-rickshaw.js']
                        }
                    ]);
                }
            }
        })
        .state('charts.peity_chart', {
            url: "/peity_chart",
            templateUrl: "views/viewtemplate/graph_peity.html",
            data: { pageTitle: 'Peity graphs' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'angular-peity',
                            files: ['assets/javascripts/plugins/peity/jquery.peity.min.js', 'assets/javascripts/plugins/peity/angular-peity.js']
                        }
                    ]);
                }
            }
        })
        .state('charts.sparkline_chart', {
            url: "/sparkline_chart",
            templateUrl: "views/viewtemplate/graph_sparkline.html",
            data: { pageTitle: 'Sparkline chart' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/sparkline/jquery.sparkline.min.js']
                        }
                    ]);
                }
            }
        })
        .state('charts.chartjs_chart', {
            url: "/chartjs_chart",
            templateUrl: "views/viewtemplate/chartjs.html",
            data: { pageTitle: 'Chart.js' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angles',
                            files: ['assets/javascripts/plugins/chartJs/angles.js']
                        }
                    ]);
                }
            }
        })
        .state('charts.chartist_chart', {
            url: "/chartist_chart",
            templateUrl: "views/viewtemplate/chartist.html",
            data: { pageTitle: 'Chartist' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            name: 'angular-chartist',
                            files: ['assets/javascripts/plugins/chartist/chartist.min.js', 'assets/stylesheets/plugins/plugins/chartist/chartist.min.assets/stylesheets/plugins', 'assets/javascripts/plugins/chartist/angular-chartist.min.js']
                        }
                    ]);
                }
            }
        })
        .state('charts.c3charts', {
            url: "/c3charts",
            templateUrl: "views/viewtemplate/c3charts.html",
            data: { pageTitle: 'c3charts' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['assets/stylesheets/plugins/plugins/c3/c3.min.assets/stylesheets/plugins', 'assets/javascripts/plugins/d3/d3.min.js', 'assets/javascripts/plugins/c3/c3.min.js']
                        },
                        {
                            serie: true,
                            name: 'gridshore.c3js.chart',
                            files: ['assets/javascripts/plugins/c3/c3-angular.min.js']
                        }
                    ]);
                }
            }
        })
        .state('mailbox', {
            abstract: true,
            url: "/mailbox",
            templateUrl: "views/comoon/content.html",
        })
        .state('mailbox.inbox', {
            url: "/inbox",
            templateUrl: "views/viewtemplate/mailbox.html",
            data: { pageTitle: 'Mail Inbox' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/plugins/iCheck/custom.assets/stylesheets/plugins','assets/javascripts/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('mailbox.email_view', {
            url: "/email_view",
            templateUrl: "views/viewtemplate/mail_detail.html",
            data: { pageTitle: 'Mail detail' }
        })
        .state('mailbox.email_compose', {
            url: "/email_compose",
            templateUrl: "views/viewtemplate/mail_compose.html",
            data: { pageTitle: 'Mail compose' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/plugins/summernote/summernote.assets/stylesheets/plugins','assets/stylesheets/plugins/plugins/summernote/summernote-bs3.assets/stylesheets/plugins','assets/javascripts/plugins/summernote/summernote.min.js']
                        },
                        {
                            name: 'summernote',
                            files: ['assets/stylesheets/plugins/plugins/summernote/summernote.assets/stylesheets/plugins','assets/stylesheets/plugins/plugins/summernote/summernote-bs3.assets/stylesheets/plugins','assets/javascripts/plugins/summernote/summernote.min.js','assets/javascripts/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
            }
        })
        .state('mailbox.email_template', {
            url: "/email_template",
            templateUrl: "views/viewtemplate/email_template.html",
            data: { pageTitle: 'Mail compose' }
        })
        .state('widgets', {
            url: "/widgets",
            templateUrl: "views/viewtemplate/widgets.html",
            data: { pageTitle: 'Widhets' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: [ 'assets/javascripts/plugins/flot/jquery.flot.js', 'assets/javascripts/plugins/flot/jquery.flot.time.js', 'assets/javascripts/plugins/flot/jquery.flot.tooltip.min.js', 'assets/javascripts/plugins/flot/jquery.flot.spline.js', 'assets/javascripts/plugins/flot/jquery.flot.resize.js', 'assets/javascripts/plugins/flot/jquery.flot.pie.js', 'assets/javascripts/plugins/flot/curvedLines.js', 'assets/javascripts/plugins/flot/angular-flot.js', ]
                        },
                        {
                            files: ['assets/stylesheets/plugins/plugins/iCheck/custom.assets/stylesheets/plugins','assets/javascripts/plugins/iCheck/icheck.min.js']
                        },
                        {
                            serie: true,
                            files: ['assets/javascripts/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js', 'assets/javascripts/plugins/jvectormap/jquery-jvectormap-2.0.2.assets/stylesheets/plugins']
                        },
                        {
                            serie: true,
                            files: ['assets/javascripts/plugins/jvectormap/jquery-jvectormap-world-mill-en.js']
                        },
                        {
                            name: 'ui.checkbox',
                            files: ['bower_components/angular-bootstrap-checkbox/angular-bootstrap-checkbox.js']
                        }
                    ]);
                }
            }
        })
        .state('metrics', {
            url: "/metrics",
            templateUrl: "views/viewtemplate/metrics.html",
            data: { pageTitle: 'Metrics' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/sparkline/jquery.sparkline.min.js']
                        }
                    ]);
                }
            }
        })
        .state('forms', {
            abstract: true,
            url: "/forms",
            templateUrl: "views/common/content.html",
        })
        .state('forms.basic_form', {
            url: "/basic_form",
            templateUrl: "views/viewtemplate/form_basic.html",
            data: { pageTitle: 'Basic form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/plugins/iCheck/custom.assets/stylesheets/plugins','assets/javascripts/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('forms.advanced_plugins', {
            url: "/advanced_plugins",
            templateUrl: "views/viewtemplate/form_advanced.html",
            data: { pageTitle: 'Advanced form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/moment/moment.min.js']
                        },
                        {
                            name: 'ui.knob',
                            files: ['assets/javascripts/plugins/jsKnob/jquery.knob.js','assets/javascripts/plugins/jsKnob/angular-knob.js']
                        },
                        {
                            files: ['assets/stylesheets/plugins/plugins/ionRangeSlider/ion.rangeSlider.assets/stylesheets/plugins','assets/stylesheets/plugins/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.assets/stylesheets/plugins','assets/javascripts/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['assets/stylesheets/plugins/plugins/chosen/chosen.assets/stylesheets/plugins','assets/javascripts/plugins/chosen/chosen.jquery.js','assets/javascripts/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['assets/stylesheets/plugins/plugins/nouslider/jquery.nouislider.assets/stylesheets/plugins','assets/javascripts/plugins/nouslider/jquery.nouislider.min.js','assets/javascripts/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['assets/stylesheets/plugins/plugins/datapicker/angular-datapicker.assets/stylesheets/plugins','assets/javascripts/plugins/datapicker/angular-datepicker.js']
                        },
                        {
                            files: ['assets/javascripts/plugins/jasny/jasny-bootstrap.min.js']
                        },
                        {
                            files: ['assets/stylesheets/plugins/plugins/clockpicker/clockpicker.assets/stylesheets/plugins', 'assets/javascripts/plugins/clockpicker/clockpicker.js']
                        },
                        {
                            name: 'ui.switchery',
                            files: ['assets/stylesheets/plugins/plugins/switchery/switchery.assets/stylesheets/plugins','assets/javascripts/plugins/switchery/switchery.js','assets/javascripts/plugins/switchery/ng-switchery.js']
                        },
                        {
                            name: 'colorpicker.module',
                            files: ['assets/stylesheets/plugins/plugins/colorpicker/colorpicker.assets/stylesheets/plugins','assets/javascripts/plugins/colorpicker/bootstrap-colorpicker-module.js']
                        },
                        {
                            name: 'ngImgCrop',
                            files: ['assets/javascripts/plugins/ngImgCrop/ng-img-crop.js','assets/stylesheets/plugins/plugins/ngImgCrop/ng-img-crop.assets/stylesheets/plugins']
                        },
                        {
                            serie: true,
                            files: ['assets/javascripts/plugins/daterangepicker/daterangepicker.js', 'assets/stylesheets/plugins/plugins/daterangepicker/daterangepicker-bs3.assets/stylesheets/plugins']
                        },
                        {
                            name: 'daterangepicker',
                            files: ['assets/javascripts/plugins/daterangepicker/angular-daterangepicker.js']
                        },
                        {
                            files: ['assets/stylesheets/plugins/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.assets/stylesheets/plugins']
                        },
                        {
                            name: 'ui.select',
                            files: ['assets/javascripts/plugins/ui-select/select.min.js', 'assets/stylesheets/plugins/plugins/ui-select/select.min.assets/stylesheets/plugins']
                        },
                        {
                            files: ['assets/stylesheets/plugins/plugins/touchspin/jquery.bootstrap-touchspin.min.assets/stylesheets/plugins', 'assets/javascripts/plugins/touchspin/jquery.bootstrap-touchspin.min.js']
                        }

                    ]);
                }
            }
        })
        .state('forms.wizard', {
            url: "/wizard",
            templateUrl: "views/viewtemplate/form_wizard.html",
            controller: wizardCtrl,
            data: { pageTitle: 'Wizard form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/plugins/steps/jquery.steps.assets/stylesheets/plugins']
                        }
                    ]);
                }
            }
        })
        .state('forms.wizard.step_one', {
            url: '/step_one',
            templateUrl: 'views/viewtemplate/wizard/step_one.html',
            data: { pageTitle: 'Wizard form' }
        })
        .state('forms.wizard.step_two', {
            url: '/step_two',
            templateUrl: 'views/viewtemplate/wizard/step_two.html',
            data: { pageTitle: 'Wizard form' }
        })
        .state('forms.wizard.step_three', {
            url: '/step_three',
            templateUrl: 'views/viewtemplate/wizard/step_three.html',
            data: { pageTitle: 'Wizard form' }
        })
        .state('forms.file_upload', {
            url: "/file_upload",
            templateUrl: "views/viewtemplate/form_file_upload.html",
            data: { pageTitle: 'File upload' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/plugins/dropzone/basic.assets/stylesheets/plugins','assets/stylesheets/plugins/plugins/dropzone/dropzone.assets/stylesheets/plugins','assets/javascripts/plugins/dropzone/dropzone.js']
                        }
                    ]);
                }
            }
        })
        .state('forms.text_editor', {
            url: "/text_editor",
            templateUrl: "views/viewtemplate/form_editors.html",
            data: { pageTitle: 'Text editor' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'summernote',
                            files: ['assets/stylesheets/plugins/plugins/summernote/summernote.assets/stylesheets/plugins','assets/stylesheets/plugins/plugins/summernote/summernote-bs3.assets/stylesheets/plugins','assets/javascripts/plugins/summernote/summernote.min.js','assets/javascripts/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
            }
        })
        .state('forms.markdown', {
            url: "/markdown",
            templateUrl: "views/viewtemplate/markdown.html",
            data: { pageTitle: 'Markdown' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['assets/javascripts/plugins/bootstrap-markdown/bootstrap-markdown.js','assets/javascripts/plugins/bootstrap-markdown/markdown.js','assets/stylesheets/plugins/plugins/bootstrap-markdown/bootstrap-markdown.min.assets/stylesheets/plugins']
                        }
                    ]);
                }
            }
        })
        .state('app', {
            abstract: true,
            url: "/app",
            templateUrl: "views/common/content.html",
        })
        .state('app.contacts', {
            url: "/contacts",
            templateUrl: "views/viewtemplate/contacts.html",
            data: { pageTitle: 'Contacts' }
        })
        .state('app.contacts_2', {
            url: "/contacts_2",
            templateUrl: "views/viewtemplate/contacts_2.html",
            data: { pageTitle: 'Contacts 2' }
        })
        .state('app.profile', {
            url: "/profile",
            templateUrl: "views/viewtemplate/profile.html",
            data: { pageTitle: 'Profile' }
        })
        .state('app.profile_2', {
            url: "/profile_2",
            templateUrl: "views/viewtemplate/profile_2.html",
            data: { pageTitle: 'Profile_2'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/sparkline/jquery.sparkline.min.js']
                        }
                    ]);
                }
            }
        })
        .state('app.projects', {
            url: "/projects",
            templateUrl: "views/viewtemplate/projects.html",
            data: { pageTitle: 'Projects' }
        })
        .state('app.project_detail', {
            url: "/project_detail",
            templateUrl: "views/viewtemplate/project_detail.html",
            data: { pageTitle: 'Project detail' }
        })
        .state('app.file_manager', {
            url: "/file_manager",
            templateUrl: "views/viewtemplate/file_manager.html",
            data: { pageTitle: 'File manager' }
        })
        .state('app.calendar', {
            url: "/calendar",
            templateUrl: "views/viewtemplate/calendar.html",
            data: { pageTitle: 'Calendar' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            files: ['assets/stylesheets/plugins/plugins/fullcalendar/fullcalendar.assets/stylesheets/plugins','assets/javascripts/plugins/fullcalendar/fullcalendar.min.js','assets/javascripts/plugins/fullcalendar/gcal.js']
                        },
                        {
                            name: 'ui.calendar',
                            files: ['assets/javascripts/plugins/fullcalendar/calendar.js']
                        }
                    ]);
                }
            }
        })
        .state('app.faq', {
            url: "/faq",
            templateUrl: "views/viewtemplate/faq.html",
            data: { pageTitle: 'FAQ' }
        })
        .state('app.timeline', {
            url: "/timeline",
            templateUrl: "views/viewtemplate/timeline.html",
            data: { pageTitle: 'Timeline' }
        })
        .state('app.pin_board', {
            url: "/pin_board",
            templateUrl: "views/viewtemplate/pin_board.html",
            data: { pageTitle: 'Pin board' }
        })
        .state('app.invoice', {
            url: "/invoice",
            templateUrl: "views/viewtemplate/invoice.html",
            data: { pageTitle: 'Invoice' }
        })
        .state('app.blog', {
            url: "/blog",
            templateUrl: "views/viewtemplate/blog.html",
            data: { pageTitle: 'Blog' }
        })
        .state('app.article', {
            url: "/article",
            templateUrl: "views/viewtemplate/article.html",
            data: { pageTitle: 'Article' }
        })
        .state('app.issue_tracker', {
            url: "/issue_tracker",
            templateUrl: "views/viewtemplate/issue_tracker.html",
            data: { pageTitle: 'Issue Tracker' }
        })
        .state('app.clients', {
            url: "/clients",
            templateUrl: "views/viewtemplate/clients.html",
            data: { pageTitle: 'Clients' }
        })
        .state('app.teams_board', {
            url: "/teams_board",
            templateUrl: "views/viewtemplate/teams_board.html",
            data: { pageTitle: 'Teams board' }
        })
        .state('app.social_feed', {
            url: "/social_feed",
            templateUrl: "views/viewtemplate/social_feed.html",
            data: { pageTitle: 'Social feed' }
        })
        .state('app.vote_list', {
            url: "/vote_list",
            templateUrl: "views/viewtemplate/vote_list.html",
            data: { pageTitle: 'Vote list' }
        })
        .state('pages', {
            abstract: true,
            url: "/pages",
            templateUrl: "views/common/content.html"
        })
        .state('pages.search_results', {
            url: "/search_results",
            templateUrl: "views/viewtemplate/search_results.html",
            data: { pageTitle: 'Search results' }
        })
        .state('pages.empy_page', {
            url: "/empy_page",
            templateUrl: "views/viewtemplate/empty_page.html",
            data: { pageTitle: 'Empty page' }
        })
        .state('login', {
            url: "/login",
            templateUrl: "views/viewtemplate/login.html",
            data: { pageTitle: 'Login', specialClass: 'gray-bg' }
        })
        .state('login_two_columns', {
            url: "/login_two_columns",
            templateUrl: "views/viewtemplate/login_two_columns.html",
            data: { pageTitle: 'Login two columns', specialClass: 'gray-bg' }
        })
        .state('register', {
            url: "/register",
            templateUrl: "views/viewtemplate/register.html",
            data: { pageTitle: 'Register', specialClass: 'gray-bg' }
        })
        .state('lockscreen', {
            url: "/lockscreen",
            templateUrl: "views/viewtemplate/lockscreen.html",
            data: { pageTitle: 'Lockscreen', specialClass: 'gray-bg' }
        })
        .state('forgot_password', {
            url: "/forgot_password",
            templateUrl: "views/viewtemplate/forgot_password.html",
            data: { pageTitle: 'Forgot password', specialClass: 'gray-bg' }
        })
        .state('errorOne', {
            url: "/errorOne",
            templateUrl: "views/viewtemplate/errorOne.html",
            data: { pageTitle: '404', specialClass: 'gray-bg' }
        })
        .state('errorTwo', {
            url: "/errorTwo",
            templateUrl: "views/viewtemplate/errorTwo.html",
            data: { pageTitle: '500', specialClass: 'gray-bg' }
        })
        .state('ui', {
            abstract: true,
            url: "/ui",
            templateUrl: "views/common/content.html",
        })
        .state('ui.typography', {
            url: "/typography",
            templateUrl: "views/viewtemplate/typography.html",
            data: { pageTitle: 'Typography' }
        })
        .state('ui.icons', {
            url: "/icons",
            templateUrl: "views/viewtemplate/icons.html",
            data: { pageTitle: 'Icons' }
        })
        .state('ui.buttons', {
            url: "/buttons",
            templateUrl: "views/viewtemplate/buttons.html",
            data: { pageTitle: 'Buttons' }
        })
        .state('ui.tabs_panels', {
            url: "/tabs_panels",
            templateUrl: "views/viewtemplate/tabs_panels.html",
            data: { pageTitle: 'Panels' }
        })
        .state('ui.tabs', {
            url: "/tabs",
            templateUrl: "views/viewtemplate/tabs.html",
            data: { pageTitle: 'Tabs' }
        })
        .state('ui.notifications_tooltips', {
            url: "/notifications_tooltips",
            templateUrl: "views/viewtemplate/notifications.html",
            data: { pageTitle: 'Notifications and tooltips' }
        })
        .state('ui.badges_labels', {
            url: "/badges_labels",
            templateUrl: "views/viewtemplate/badges_labels.html",
            data: { pageTitle: 'Badges and labels and progress' }
        })
        .state('ui.video', {
            url: "/video",
            templateUrl: "views/viewtemplate/video.html",
            data: { pageTitle: 'Responsible Video' }
        })
        .state('ui.draggable', {
            url: "/draggable",
            templateUrl: "views/viewtemplate/draggable.html",
            data: { pageTitle: 'Draggable panels' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.sortable',
                            files: ['assets/javascripts/plugins/ui-sortable/sortable.js']
                        }
                    ]);
                }
            }
        })
        .state('grid_options', {
            url: "/grid_options",
            templateUrl: "views/viewtemplate/grid_options.html",
            data: { pageTitle: 'Grid options' }
        })
        .state('miscellaneous', {
            abstract: true,
            url: "/miscellaneous",
            templateUrl: "views/common/content.html",
        })
        .state('miscellaneous.google_maps', {
            url: "/google_maps",
            templateUrl: "views/viewtemplate/google_maps.html",
            data: { pageTitle: 'Google maps' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.event',
                            files: ['assets/javascripts/plugins/uievents/event.js']
                        },
                        {
                            name: 'ui.map',
                            files: ['assets/javascripts/plugins/uimaps/ui-map.js']
                        },
                    ]);
                }
            }
        })
        .state('miscellaneous.code_editor', {
            url: "/code_editor",
            templateUrl: "views/viewtemplate/code_editor.html",
            data: { pageTitle: 'Code Editor' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['assets/stylesheets/plugins/plugins/codemirror/codemirror.assets/stylesheets/plugins','assets/stylesheets/plugins/plugins/codemirror/ambiance.assets/stylesheets/plugins','assets/javascripts/plugins/codemirror/codemirror.js','assets/javascripts/plugins/codemirror/mode/javascript/javascript.js']
                        },
                        {
                            name: 'ui.codemirror',
                            files: ['assets/javascripts/plugins/ui-codemirror/ui-codemirror.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.modal_window', {
            url: "/modal_window",
            templateUrl: "views/viewtemplate/modal_window.html",
            data: { pageTitle: 'Modal window' }
        })
        .state('miscellaneous.chat_view', {
            url: "/chat_view",
            templateUrl: "views/viewtemplate/chat_view.html",
            data: { pageTitle: 'Chat view' }
        })
        .state('miscellaneous.nestable_list', {
            url: "/nestable_list",
            templateUrl: "views/viewtemplate/nestable_list.html",
            data: { pageTitle: 'Nestable List' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.tree',
                            files: ['assets/stylesheets/plugins/plugins/uiTree/angular-ui-tree.min.assets/stylesheets/plugins','assets/javascripts/plugins/uiTree/angular-ui-tree.min.js']
                        },
                    ]);
                }
            }
        })
        .state('miscellaneous.notify', {
            url: "/notify",
            templateUrl: "views/viewtemplate/notify.html",
            data: { pageTitle: 'Notifications for angularJS' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'cgNotify',
                            files: ['assets/stylesheets/plugins/plugins/angular-notify/angular-notify.min.assets/stylesheets/plugins','assets/javascripts/plugins/angular-notify/angular-notify.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.timeline_2', {
            url: "/timeline_2",
            templateUrl: "views/viewtemplate/timeline_2.html",
            data: { pageTitle: 'Timeline version 2' }
        })
        .state('miscellaneous.forum_view', {
            url: "/forum_view",
            templateUrl: "views/viewtemplate/forum_view.html",
            data: { pageTitle: 'Forum - general view' }
        })
        .state('miscellaneous.forum_post_view', {
            url: "/forum_post_view",
            templateUrl: "views/viewtemplate/forum_post_view.html",
            data: { pageTitle: 'Forum - post view' }
        })
        .state('miscellaneous.diff', {
            url: "/diff",
            templateUrl: "views/viewtemplate/diff.html",
            data: { pageTitle: 'Text Diff' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/diff_match_patch/javascript/diff_match_patch.js']
                        },
                        {
                            name: 'diff-match-patch',
                            files: ['assets/javascripts/plugins/angular-diff-match-patch/angular-diff-match-patch.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.sweet_alert', {
            url: "/sweet_alert",
            templateUrl: "views/viewtemplate/sweet_alert.html",
            data: { pageTitle: 'Sweet alert' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/sweetalert/sweetalert.min.js', 'assets/stylesheets/plugins/plugins/sweetalert/sweetalert.assets/stylesheets/plugins']
                        },
                        {
                            name: 'oitozero.ngSweetAlert',
                            files: ['assets/javascripts/plugins/sweetalert/angular-sweetalert.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.idle_timer', {
            url: "/idle_timer",
            templateUrl: "views/viewtemplate/idle_timer.html",
            data: { pageTitle: 'Idle timer' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'cgNotify',
                            files: ['assets/stylesheets/plugins/plugins/angular-notify/angular-notify.min.assets/stylesheets/plugins','assets/javascripts/plugins/angular-notify/angular-notify.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.live_favicon', {
            url: "/live_favicon",
            templateUrl: "views/viewtemplate/live_favicon.html",
            data: { pageTitle: 'Live favicon' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/tinycon/tinycon.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.spinners', {
            url: "/spinners",
            templateUrl: "views/viewtemplate/spinners.html",
            data: { pageTitle: 'Spinners' }
        })
        .state('miscellaneous.validation', {
            url: "/validation",
            templateUrl: "views/viewtemplate/validation.html",
            data: { pageTitle: 'Validation' }
        })
        .state('miscellaneous.agile_board', {
            url: "/agile_board",
            templateUrl: "views/viewtemplate/agile_board.html",
            data: { pageTitle: 'Agile board' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.sortable',
                            files: ['assets/javascripts/plugins/ui-sortable/sortable.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.masonry', {
            url: "/masonry",
            templateUrl: "views/viewtemplate/masonry.html",
            data: { pageTitle: 'Masonry' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/masonry/masonry.pkgd.min.js']
                        },
                        {
                            name: 'wu.masonry',
                            files: ['assets/javascripts/plugins/masonry/angular-masonry.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.toastr', {
            url: "/toastr",
            templateUrl: "views/viewtemplate/toastr.html",
            data: { pageTitle: 'Toastr' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            name: 'toaster',
                            files: ['assets/javascripts/plugins/toastr/toastr.min.js', 'assets/stylesheets/plugins/plugins/toastr/toastr.min.assets/stylesheets/plugins']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.i18support', {
            url: "/i18support",
            templateUrl: "views/viewtemplate/i18support.html",
            data: { pageTitle: 'i18support' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            name: 'toaster',
                            files: ['assets/javascripts/plugins/toastr/toastr.min.js', 'assets/stylesheets/plugins/plugins/toastr/toastr.min.assets/stylesheets/plugins']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.truncate', {
            url: "/truncate",
            templateUrl: "views/viewtemplate/truncate.html",
            data: { pageTitle: 'Truncate' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/dotdotdot/jquery.dotdotdot.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.clipboard', {
            url: "/clipboard",
            templateUrl: "views/viewtemplate/clipboard.html",
            data: { pageTitle: 'Clipboard' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/ngclipboard/clipboard.min.js']
                        },
                        {
                            name: 'ngclipboard',
                            files: ['assets/javascripts/plugins/ngclipboard/ngclipboard.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.loading_buttons', {
            url: "/loading_buttons",
            templateUrl: "views/viewtemplate/loading_buttons.html",
            data: { pageTitle: 'Loading buttons' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            name: 'angular-ladda',
                            files: ['assets/javascripts/plugins/ladda/spin.min.js', 'assets/javascripts/plugins/ladda/ladda.min.js', 'assets/stylesheets/plugins/plugins/ladda/ladda-themeless.min.assets/stylesheets/plugins','assets/javascripts/plugins/ladda/angular-ladda.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.tour', {
            url: "/tour",
            templateUrl: "views/viewtemplate/tour.html",
            data: { pageTitle: 'Tour' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            files: ['assets/javascripts/plugins/bootstrap-tour/bootstrap-tour.min.js', 'assets/stylesheets/plugins/plugins/bootstrap-tour/bootstrap-tour.min.assets/stylesheets/plugins']
                        },
                        {
                            name: 'bm.bsTour',
                            files: ['assets/javascripts/plugins/angular-bootstrap-tour/angular-bootstrap-tour.min.js']
                        }
                    ]);
                }
            }
        })
        .state('miscellaneous.tree_view', {
            url: "/tree_view",
            templateUrl: "views/viewtemplate/tree_view.html",
            data: { pageTitle: 'Tree view' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/plugins/jsTree/style.min.assets/stylesheets/plugins','assets/javascripts/plugins/jsTree/jstree.min.js']
                        },
                        {
                            name: 'ngJsTree',
                            files: ['assets/javascripts/plugins/jsTree/ngJsTree.min.js']
                        }
                    ]);
                }
            }
        })
        .state('tables', {
            abstract: true,
            url: "/tables",
            templateUrl: "views/common/content.html"
        })
        .state('tables.static_table', {
            url: "/static_table",
            templateUrl: "views/viewtemplate/table_basic.html",
            data: { pageTitle: 'Static table' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'angular-peity',
                            files: ['assets/javascripts/plugins/peity/jquery.peity.min.js', 'assets/javascripts/plugins/peity/angular-peity.js']
                        },
                        {
                            files: ['assets/stylesheets/plugins/plugins/iCheck/custom.assets/stylesheets/plugins','assets/javascripts/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('tables.data_tables', {
            url: "/data_tables",
            templateUrl: "views/viewtemplate/table_data_tables.html",
            data: { pageTitle: 'Data Tables' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['assets/javascripts/plugins/dataTables/datatables.min.js','assets/stylesheets/plugins/plugins/dataTables/datatables.min.assets/stylesheets/plugins']
                        },
                        {
                            serie: true,
                            name: 'datatables',
                            files: ['assets/javascripts/plugins/dataTables/angular-datatables.min.js']
                        },
                        {
                            serie: true,
                            name: 'datatables.buttons',
                            files: ['assets/javascripts/plugins/dataTables/angular-datatables.buttons.min.js']
                        }
                    ]);
                }
            }
        })
        .state('tables.foo_table', {
            url: "/foo_table",
            templateUrl: "views/viewtemplate/foo_table.html",
            data: { pageTitle: 'Foo Table' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/footable/footable.all.min.js', 'assets/stylesheets/plugins/plugins/footable/footable.core.assets/stylesheets/plugins']
                        },
                        {
                            name: 'ui.footable',
                            files: ['assets/javascripts/plugins/footable/angular-footable.js']
                        }
                    ]);
                }
            }
        })
        .state('tables.nggrid', {
            url: "/nggrid",
            templateUrl: "views/viewtemplate/nggrid.html",
            data: { pageTitle: 'ng Grid' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ngGrid',
                            files: ['assets/javascripts/plugins/nggrid/ng-grid-2.0.3.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            files: ['assets/javascripts/plugins/nggrid/ng-grid.assets/stylesheets/plugins']
                        }
                    ]);
                }
            }
        })
        .state('commerce', {
            abstract: true,
            url: "/commerce",
            templateUrl: "views/common/content.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/footable/footable.all.min.js', 'assets/stylesheets/plugins/plugins/footable/footable.core.assets/stylesheets/plugins']
                        },
                        {
                            name: 'ui.footable',
                            files: ['assets/javascripts/plugins/footable/angular-footable.js']
                        }
                    ]);
                }
            }
        })
        .state('commerce.products_grid', {
            url: "/products_grid",
            templateUrl: "views/viewtemplate/ecommerce_products_grid.html",
            data: { pageTitle: 'E-commerce grid' }
        })
        .state('commerce.product_list', {
            url: "/product_list",
            templateUrl: "views/viewtemplate/ecommerce_product_list.html",
            data: { pageTitle: 'E-commerce product list' }
        })
        .state('commerce.orders', {
            url: "/orders",
            templateUrl: "views/viewtemplate/ecommerce_orders.html",
            data: { pageTitle: 'E-commerce orders' }
        })
        .state('commerce.product', {
            url: "/product",
            templateUrl: "views/viewtemplate/ecommerce_product.html",
            data: { pageTitle: 'Product edit' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/plugins/summernote/summernote.assets/stylesheets/plugins','assets/stylesheets/plugins/plugins/summernote/summernote-bs3.assets/stylesheets/plugins','assets/javascripts/plugins/summernote/summernote.min.js']
                        },
                        {
                            name: 'summernote',
                            files: ['assets/stylesheets/plugins/plugins/summernote/summernote.assets/stylesheets/plugins','assets/stylesheets/plugins/plugins/summernote/summernote-bs3.assets/stylesheets/plugins','assets/javascripts/plugins/summernote/summernote.min.js','assets/javascripts/plugins/summernote/angular-summernote.min.js']
                        }
                    ]);
                }
            }

        })
        .state('commerce.product_details', {
            url: "/product_details",
            templateUrl: "views/viewtemplate/ecommerce_product_details.html",
            data: { pageTitle: 'E-commerce Product detail' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/plugins/slick/slick.assets/stylesheets/plugins','assets/stylesheets/plugins/plugins/slick/slick-theme.assets/stylesheets/plugins','assets/javascripts/plugins/slick/slick.min.js']
                        },
                        {
                            name: 'slick',
                            files: ['assets/javascripts/plugins/slick/angular-slick.min.js']
                        }
                    ]);
                }
            }
        })
        .state('commerce.payments', {
            url: "/payments",
            templateUrl: "views/viewtemplate/ecommerce_payments.html",
            data: { pageTitle: 'E-commerce payments' }
        })
        .state('commerce.cart', {
            url: "/cart",
            templateUrl: "views/viewtemplate/ecommerce_cart.html",
            data: { pageTitle: 'Shopping cart' }
        })
        .state('gallery', {
            abstract: true,
            url: "/gallery",
            templateUrl: "views/common/content.html"
        })
        .state('gallery.basic_gallery', {
            url: "/basic_gallery",
            templateUrl: "views/viewtemplate/basic_gallery.html",
            data: { pageTitle: 'Lightbox Gallery' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/blueimp/jquery.blueimp-gallery.min.js','assets/stylesheets/plugins/plugins/blueimp/assets/stylesheets/plugins/blueimp-gallery.min.assets/stylesheets/plugins']
                        }
                    ]);
                }
            }
        })
        .state('gallery.bootstrap_carousel', {
            url: "/bootstrap_carousel",
            templateUrl: "views/viewtemplate/carousel.html",
            data: { pageTitle: 'Bootstrap carousel' }
        })
        .state('gallery.slick_gallery', {
            url: "/slick_gallery",
            templateUrl: "views/viewtemplate/slick.html",
            data: { pageTitle: 'Slick carousel' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/plugins/slick/slick.assets/stylesheets/plugins','assets/stylesheets/plugins/plugins/slick/slick-theme.assets/stylesheets/plugins','assets/javascripts/plugins/slick/slick.min.js']
                        },
                        {
                            name: 'slick',
                            files: ['assets/javascripts/plugins/slick/angular-slick.min.js']
                        }
                    ]);
                }
            }
        })
        .state('assets/stylesheets/plugins_animations', {
            url: "/assets/stylesheets/plugins_animations",
            templateUrl: "views/viewtemplate/assets/stylesheets/plugins_animation.html",
            data: { pageTitle: 'assets/stylesheets/plugins Animations' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            reconfig: true,
                            serie: true,
                            files: ['assets/javascripts/plugins/rickshaw/vendor/d3.v3.js','assets/javascripts/plugins/rickshaw/rickshaw.min.js']
                        },
                        {
                            reconfig: true,
                            name: 'angular-rickshaw',
                            files: ['assets/javascripts/plugins/rickshaw/angular-rickshaw.js']
                        }
                    ]);
                }
            }

        })
        .state('landing', {
            url: "/landing",
            templateUrl: "views/viewtemplate/landing.html",
            data: { pageTitle: 'Landing page', specialClass: 'landing-page' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/wow/wow.min.js']
                        }
                    ]);
                }
            }
        })
        .state('outlook', {
            url: "/outlook",
            templateUrl: "views/viewtemplate/outlook.html",
            data: { pageTitle: 'Outlook view', specialClass: 'fixed-sidebar' }
        })
        .state('off_canvas', {
            url: "/off_canvas",
            templateUrl: "views/viewtemplate/off_canvas.html",
            data: { pageTitle: 'Off canvas menu', specialClass: 'canvas-menu' }
        });

}


angular
    .module('MackenzyGymApp')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
