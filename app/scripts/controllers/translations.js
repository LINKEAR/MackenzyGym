/**
 * INSPINIA - Responsive Admin Theme
 *
 */
function config($translateProvider) {

    $translateProvider
        .translations('en', {

            // Define all menu elements


            DASHBOARD: 'Dashboard',
            GRAPHS: 'Graphs',
            MAILBOX: 'Mailbox',
            WIDGETS: 'Widgets',
            METRICS: 'Metrics',
            FORMS: 'Forms',
            APPVIEWS: 'App views',
            OTHERPAGES: 'Other pages',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Miscellaneous',
            GRIDOPTIONS: 'Grid options',
            TABLES: 'Tables',
            COMMERCE: 'E-commerce',
            GALLERY: 'Gallery',
            MENULEVELS: 'Menu levels',
            ANIMATIONS: 'Animations',
            LANDING: 'Landing page',
            LAYOUTS: 'Layouts',

            // Define some custom text
            WELCOME: 'Welcome Amelia',
            MESSAGEINFO: 'You have 42 messages and 6 notifications.',
            SEARCH: 'Search for something...',
            //OPERACIONES
            SAVE:'Save',
            UPDATE:'Update',

            //ESTADOS
            NEW:'New',
            EDIT:'Edit',
            FIND:'List',

            //ENTIDADES
            //Activity
            ACTIVITY:'Activity',
              activity_name:"Name",
              activity_place_name:"Enter the name of activity",
              activity_state:"State",
              activity_place_state:"Enter the state of activity",

          MEMBERSHIP:'Membership',
                membership_image:"Image",
                membership_place_image:"Select some image for the membership",
                membership_name:"Name",
                membership_place_name:"Enter the name of membership",
                membership_state:"State",
                membership_place_state:"Select the state of membership",

            SCHEDULE:'Schedule',
              schedule_activity:'Activity',
              shedule_membership:'Membership',
              schedule_day:'Day',
              schedule_start_time:'Start Time',
              schedule_time_duration:'Duration Time',

            OPTIONS:'Options',
            HOME:'Home',
            FORM:'Form',

            //Mensajes
            SUCCESS_SAVE:'Has been successfully saved',
            SUCCESS_UPDATE:'Has been successfully updated',
            SUCCESS_REMOVE:'Has been successfully removed',

            ERROR_FIELD_REQUIRE:'The field is required',
            ERROR_FIELD_INVALID:'Invalid data',
            FORM_404:'You can not process an empty form',
            UNKNOWN_ERROR:'Unknown error, contact your system administrator',
            RESULT:'Result',








        })
        .translations('es', {

            // Define all menu elements
            DASHBOARD: 'Salpicadero',
            GRAPHS: 'Gráficos',
            MAILBOX: 'El correo',
            WIDGETS: 'Widgets',
            METRICS: 'Métrica',
            FORMS: 'Formas',
            APPVIEWS: 'Vistas app',
            OTHERPAGES: 'Otras páginas',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Misceláneo',
            GRIDOPTIONS: 'Cuadrícula',
            TABLES: 'Tablas',
            COMMERCE: 'E-comercio',
            GALLERY: 'Galería',
            MENULEVELS: 'Niveles de menú',
            ANIMATIONS: 'Animaciones',
            LANDING: 'Página de destino',
            LAYOUTS: 'Esquemas',

            // Define some custom text
            WELCOME: 'Bienvenido Amelia',
            MESSAGEINFO: 'Usted tiene 42 mensajes y 6 notificaciones.',
            SEARCH: 'Busca algo ...',

           //OPERACIONES
            SAVE:'Guardar',
            UPDATE:'Actualizar',

            //ESTADOS
            NEW:'Nuevo',
            EDIT:'Editar',
            FIND:'Lista',

            //ENTIDADES
            ACTIVITY:'Actividad',
              activity_name:"Nombre",
              activity_place_name:"Ingrese el nombre de la actividad",
              activity_state:"Estado",
              activity_place_state:"Ingrese el estado de la actividad",

              MEMBERSHIP:'Membresia',
                membership_image:"Imagen",
                membership_place_image:"Seleccione una imagen para la Membresia",
                membership_name:"Name",
                membership_place_name:"Ingrese el nombre de la Membresia",
                membership_state:"State",
                membership_place_state:"Seleccione el estado de la Membresia",



            SCHEDULE:'Horario',
              schedule_activity:'Actividad',
              shedule_membership:'Membresia',
              schedule_day:'Dia',
              schedule_start_time:'Hora de Inicio',
              schedule_time_duration:'Tiempo de Duración',




            OPTIONS:'Opciones',
            HOME:'Inicio',
            FORM:'Formulario',

        //Mensajes
            ERROR_FIELD_REQUIRE:'El campo es requerido',
            ERROR_FIELD_INVALID:'Formato no valido',


                    //Mensajes
            SUCCESS_SAVE:'Se ha guardado de forma exitosa',
            SUCCESS_UPDATE:'Se ha actualizado de forma exitosa',
            SUCCESS_REMOVE:'Se ha eliminado de forma exitosa',

            ERROR_FIELD_REQUIRE:'El campo es requerido',
            ERROR_FIELD_INVALID:'Dato no valido',
            FORM_404:'Usted no puede procesar un formulario vacío',
            UNKNOWN_ERROR:'Error desconocido, contacte a su administrador del sistema',
            RESULT:'Resultado',
        });

    $translateProvider.preferredLanguage('en');
      // Enable escaping of HTML
    $translateProvider.useSanitizeValueStrategy('sanitize');
}

angular
    .module('MackenzyGymApp')
    .config(['$translateProvider',config])
