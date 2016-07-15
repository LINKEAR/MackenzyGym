/**
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/index/main");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/viewtemplate/main.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "views/viewtemplate/minor.html",
            data: { pageTitle: 'Example view' }
        })

        .state('index.basic_form', {
            url: "/basic_form",
            templateUrl: "views/viewtemplate/form_basic.html",
            data: { pageTitle: 'Basic form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/iCheck/custom.css','assets/javascripts/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
}
angular
    .module('MackenzyGymApp')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
**************************************************************************************************************************************************************************************/
/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/sys/inicio");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

         .state('sys', {
            abstract: true,
            url: "/sys",
            templateUrl: "views/common/content.html",
        })
        .state('sys.inicio', {
            url: "/inicio",
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

       .state('activity', {
            abstract: true,
            url: "/activity",
            templateUrl: "views/common/content.html",
            controller:"searchCtrl"
        })
        .state('activity.new', {
            url: "/new",
            templateUrl: "views/admin/Activity/create.html",
            data: { pageTitle: 'Basic form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/iCheck/custom.css','assets/javascripts/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('activity.edit', {
            url: "/edit",
            templateUrl: "views/admin/Activity/create.html",
            data: { pageTitle: 'Basic form'
                  },
            params: {
                    activity: '*.*'
                },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/iCheck/custom.css','assets/javascripts/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('activity.find', {
            url: "/find",
            templateUrl: "views/admin/Activity/list.html",
             params: {
                arg: '*.*'
            },
            data: { pageTitle: 'Basic form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {

                            files: ['assets/stylesheets/plugins/iCheck/custom.css','assets/javascripts/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('membership', {
            abstract: true,
            url: "/membership",
            templateUrl: "views/common/content.html",
            controller:"searchCtrl"

        })

        .state('membership.new', {
          url: "/new",
            templateUrl: "views/admin/Membership/create.html",
            data: { pageTitle: 'Basic form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/javascripts/plugins/blueimp/jquery.blueimp-gallery.min.js','assets/stylesheets/plugins/blueimp/css/blueimp-gallery.min.css']
                        }
                    ]);
                }
            }
        })

        .state('membership.edit', {
            url: "/edit",
            templateUrl: "views/admin/Membership/create.html",
            data: { pageTitle: 'Basic form'},
            params: {
                membership: '*.*'
            },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/iCheck/custom.css','assets/javascripts/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })

        .state('membership.find', {
            url: "/find",
            templateUrl: "views/admin/Membership/list.html",
             params: {
                arg: '*.*'
            },
            data: { pageTitle: 'Basic form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/iCheck/custom.css','assets/javascripts/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }

        })
        .state('schedule', {
             abstract: true,
             url: "/schedule",
             templateUrl: "views/common/content.html",
             controller:"searchCtrl"
         })
         .state('schedule.new', {
              url: "/new",
              templateUrl: "views/admin/Schedule/form.html",
              resolve: {
                  loadPlugin: function ($ocLazyLoad) {
                      return $ocLazyLoad.load([
                          {

                              files: [  'assets/others/select2-4.0.2/dist/css/select2.min.css', 'assets/others/select2-4.0.2/dist/js/select2.min.js']
                          }
                      ]);
                  }
                }

          })


        .state('admin.advanced_plugins', {
            url: "/advanced_plugins",
            templateUrl: "views/viewtemplate/form_advanced.html",
            data: { pageTitle: 'Advanced form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.knob',
                            files: ['assets/javascripts/plugins/jsKnob/jquery.knob.js','assets/javascripts/plugins/jsKnob/angular-knob.js']
                        },
                        {
                            files: ['assets/stylesheets/plugins/ionRangeSlider/ion.rangeSlider.css','assets/stylesheets/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css','assets/javascripts/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['assets/stylesheets/plugins/chosen/chosen.css','assets/javascripts/plugins/chosen/chosen.jquery.js','assets/javascripts/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['assets/stylesheets/plugins/nouslider/jquery.nouislider.css','assets/javascripts/plugins/nouslider/jquery.nouislider.min.js','assets/javascripts/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['assets/stylesheets/plugins/datapicker/angular-datapicker.css','assets/javascripts/plugins/datapicker/angular-datepicker.js']
                        },
                        {
                            files: ['assets/javascripts/plugins/jasny/jasny-bootstrap.min.js']
                        },
                        {
                            files: ['assets/stylesheets/plugins/clockpicker/clockpicker.css', 'assets/javascripts/plugins/clockpicker/clockpicker.js']
                        },
                        {
                            name: 'ui.switchery',
                            files: ['assets/stylesheets/plugins/switchery/switchery.css','assets/javascripts/plugins/switchery/switchery.js','assets/javascripts/plugins/switchery/ng-switchery.js']
                        },
                        {
                            name: 'colorpicker.module',
                            files: ['assets/stylesheets/plugins/colorpicker/colorpicker.css','assets/javascripts/plugins/colorpicker/bootstrap-colorpicker-module.js']
                        },
                        {
                            name: 'ngImgCrop',
                            files: ['assets/javascripts/plugins/ngImgCrop/ng-img-crop.js','assets/stylesheets/plugins/ngImgCrop/ng-img-crop.css']
                        },
                        {
                            serie: true,
                            files: ['assets/javascripts/plugins/moment/moment.min.js', 'assets/javascripts/plugins/daterangepicker/daterangepicker.js', 'assets/stylesheets/plugins/daterangepicker/daterangepicker-bs3.css']
                        },
                        {
                            name: 'daterangepicker',
                            files: ['assets/javascripts/plugins/daterangepicker/angular-daterangepicker.js']
                        },
                        {
                            files: ['assets/stylesheets/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            name: 'ui.select',
                            files: ['assets/javascripts/plugins/ui-select/select.min.js', 'assets/stylesheets/plugins/ui-select/select.min.css']
                        }

                    ]);
                }
            }
        })
        .state('admin.wizard', {
            url: "/wizard",
            templateUrl: "views/viewtemplate/form_wizard.html",
            controller: wizardCtrl,
            data: { pageTitle: 'Wizard form' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/steps/jquery.steps.css']
                        }
                    ]);
                }
            }
        })
        .state('admin.wizard.step_one', {
            url: '/step_one',
            templateUrl: 'views/viewtemplate/wizard/step_one.html',
            data: { pageTitle: 'Wizard form' }
        })
        .state('admin.wizard.step_two', {
            url: '/step_two',
            templateUrl: 'views/viewtemplate/wizard/step_two.html',
            data: { pageTitle: 'Wizard form' }
        })
        .state('admin.wizard.step_three', {
            url: '/step_three',
            templateUrl: 'views/viewtemplate/wizard/step_three.html',
            data: { pageTitle: 'Wizard form' }
        })
        .state('admin.file_upload', {
            url: "/file_upload",
            templateUrl: "views/viewtemplate/form_file_upload.html",
            data: { pageTitle: 'File upload' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['assets/stylesheets/plugins/dropzone/basic.css','assets/stylesheets/plugins/dropzone/dropzone.css','assets/javascripts/plugins/dropzone/dropzone.js']
                        }
                    ]);
                }
            }
        })
        .state('admin.text_editor', {
            url: "/text_editor",
            templateUrl: "views/viewtemplate/form_editors.html",
            data: { pageTitle: 'Text editor' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'summernote',
                            files: ['assets/stylesheets/plugins/summernote/summernote.css','assets/stylesheets/plugins/summernote/summernote-bs3.css','assets/javascripts/plugins/summernote/summernote.min.js','assets/javascripts/plugins/summernote/angular-summernote.min.js']
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
                            files: ['assets/stylesheets/plugins/fullcalendar/fullcalendar.css','assets/javascripts/plugins/fullcalendar/fullcalendar.min.js','assets/javascripts/plugins/fullcalendar/gcal.js']
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
                            files: ['assets/stylesheets/plugins/codemirror/codemirror.css','assets/stylesheets/plugins/codemirror/ambiance.css','assets/javascripts/plugins/codemirror/codemirror.js','assets/javascripts/plugins/codemirror/mode/javascript/javascript.js']
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
                            files: ['assets/stylesheets/plugins/uiTree/angular-ui-tree.min.css','assets/javascripts/plugins/uiTree/angular-ui-tree.min.js']
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
                            files: ['assets/stylesheets/plugins/angular-notify/angular-notify.min.css','assets/javascripts/plugins/angular-notify/angular-notify.min.js']
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
                            files: ['assets/javascripts/plugins/sweetalert/sweetalert.min.js', 'assets/stylesheets/plugins/sweetalert/sweetalert.css']
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
                            files: ['assets/stylesheets/plugins/angular-notify/angular-notify.min.css','assets/javascripts/plugins/angular-notify/angular-notify.min.js']
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
                            files: ['assets/javascripts/plugins/toastr/toastr.min.js', 'assets/stylesheets/plugins/toastr/toastr.min.css']
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
                            files: ['assets/stylesheets/plugins/iCheck/custom.css','assets/javascripts/plugins/iCheck/icheck.min.js']
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
                            files: ['assets/javascripts/plugins/dataTables/jquery.dataTables.js','assets/stylesheets/plugins/dataTables/dataTables.bootstrap.css']
                        },
                        {
                            serie: true,
                            files: ['assets/javascripts/plugins/dataTables/dataTables.bootstrap.js']
                        },
                        {
                            name: 'datatables',
                            files: ['assets/javascripts/plugins/dataTables/angular-datatables.min.js']
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
                            files: ['assets/javascripts/plugins/footable/footable.all.min.js', 'assets/stylesheets/plugins/footable/footable.core.css']
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
                            files: ['assets/javascripts/plugins/nggrid/ng-grid.css']
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
                            files: ['assets/javascripts/plugins/footable/footable.all.min.js', 'assets/stylesheets/plugins/footable/footable.core.css']
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
                            files: ['assets/stylesheets/plugins/summernote/summernote.css','assets/stylesheets/plugins/summernote/summernote-bs3.css','assets/javascripts/plugins/summernote/summernote.min.js']
                        },
                        {
                            name: 'summernote',
                            files: ['assets/stylesheets/plugins/summernote/summernote.css','assets/stylesheets/plugins/summernote/summernote-bs3.css','assets/javascripts/plugins/summernote/summernote.min.js','assets/javascripts/plugins/summernote/angular-summernote.min.js']
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
                            files: ['assets/stylesheets/plugins/slick/slick.css','assets/stylesheets/plugins/slick/slick-theme.css','assets/javascripts/plugins/slick/slick.min.js']
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
                            files: ['assets/javascripts/plugins/blueimp/jquery.blueimp-gallery.min.js','assets/stylesheets/plugins/blueimp/assets/stylesheets/blueimp-gallery.min.css']
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
                            files: ['assets/stylesheets/plugins/slick/slick.css','assets/stylesheets/plugins/slick/slick-theme.css','assets/javascripts/plugins/slick/slick.min.js']
                        },
                        {
                            name: 'slick',
                            files: ['assets/javascripts/plugins/slick/angular-slick.min.js']
                        }
                    ]);
                }
            }
        })
        .state('css_animations', {
            url: "/css_animations",
            templateUrl: "views/viewtemplate/css_animation.html",
            data: { pageTitle: 'CSS Animations' },
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
            data: { pageTitle: 'Landing page', specialClass: 'landing-page' }
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
