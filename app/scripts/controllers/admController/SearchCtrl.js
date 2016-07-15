function searchCtrl($scope,  $state, $filter)
{
  var dictionaryCommand=[  {command:"actividad", execution:"activity"}
                           ,{command:"actividad", execution:"activity"}
                           ,{command:"horario", execution:"schedule"}
                           ,{command:"membresia", execution:"membership"}

                           ,{command:">>buscar", execution:"find"}
                           ,{command:">>actualizar", execution:"new"}
                         ];
   var isprocess=false;

    //////////////////////////////////
    /// FUNCIONES PROCESAR COMANDOS
    function isCommand(command)
    {
      if(command!=undefined)
      {
          //>>Actualisar Cliente
          var index=command.indexOf(">>");
          if(index==-1)
            return false;
          else
             return true;
      } else
          return false;
    }


    function translateCommand(command)
    {
          command=$filter('uppercase')(command);
        for(var i=0; i<dictionaryCommand.length;i++)
        {
             var com=$filter('uppercase')(dictionaryCommand[i].command);
             if(com==command)
              return dictionaryCommand[i].execution;
        }
        return "404";
    }


    function processCommand(command)
    {
      var arrayCommand=command.split(' ');

      if(arrayCommand.length>=2 && arrayCommand.length<=3)
      {
          var base=translateCommand(arrayCommand[0]);
          var entity=translateCommand(arrayCommand[1]);
          if(base=="404" || entity=="404"){
            alert('Entidad o funcionalidad no valida');
              isprocess=false;
              return false;
          }
          var param=null;
          if(arrayCommand.length==3)
          {
              param=arrayCommand[2];
              isprocess=true;
              $state.go((entity+'.'+base),{arg:param});
          }
          else {
              isprocess=true;
              $state.go((entity+'.'+base));
          }
      }
      else {
       alert('Comando no valido:: formato valido: [>>funcionalidad entidad argumentos]');
      }
    }

    function stateNotFound(event, unfoundState, fromState, fromParams){
        if(isprocess==false)
        {
          var command=unfoundState.toParams.arg;
          if(isCommand(command))
             processCommand(command)
        }

    }
    $scope.find=function($searchText){
      // somewhere else
      $scope.$on('$stateNotFound',stateNotFound);
      if(isCommand($searchText))
            processCommand($searchText);
      else {
         var stateA=$state.current.name;
         var arrStateA = stateA.split(".");
         var base=arrStateA[0];
          if(base==undefined)
              base="undefined";
          $state.go((base+'.find'),{arg:$searchText});
        }

    }
}
 angular
    .module('MackenzyGymApp')
    .controller('searchCtrl', searchCtrl);
