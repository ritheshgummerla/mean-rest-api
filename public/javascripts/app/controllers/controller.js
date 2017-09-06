app.controller('person',[ '$scope', '$location',  '$http', '$log', 'userService', function ($scope, $location,  $http, $log, userService){
    $scope.message = 'hi there........';
   $scope.submit = function(){
        $log.log('sent data to service' + JSON.stringify($scope.user));
        userService.send($scope.user,function(r){
             $log.log('data sent from client');
        })
        $location.path('/list');
//        $http.post('http://localhost:3000/user'+$scope.user).success(function(){
  //          $log.log('data sent from client');
    //    },function(){
      //      $log.log('error in client service')
        //});
   }
}]);

app.controller('list', ['$scope', '$log', 'getService', function($scope, $log, getService){
 getService.findPerson(function (r) {
          $log.log('data in Ctrl'+ r)
          $scope.data = r.data;
        });
}]);

app.controller('edit', ['$scope', '$log', 'editService', '$location', '$routeParams', function($scope, $log, editService, $location, $routeParams){
  var id = $routeParams.id
  $log.log('id' + id);
       editService.edit(id, function(r){
             
             $log.log('got id from  server'+ JSON.stringify(r));
             $scope.data = r;
        });
        $scope.update = function(){
           
           editService.put($scope.data, function(r){
             $log.log('successfull'+ JSON.stringify());
           })
           $location.path('/list');
        }

}]);