app.service('userService', ['$log', '$http', '$location', function($log, $http, $location){
//    this.send= function(user, cb){
  //      $log.log('got the data in service' + JSON.stringify(user)); 
    //    $http.post('/regi',user).success(function(resp){
      //      $log.log('sent data from service to node server' + resp);
        //    cb(resp);
           // $location.path('/');
 //       },function(){
   //         $log.log('error in client service')
     //   });

    //}
         this.send = function (user, cb) {
        $http({
            url: '/regi',
            method: 'POST',
            data: user,
        }).then(function (resp) {
            $log.log('recieved from ctrl and sent data from serivce' + JSON.stringify(resp));
            cb(resp);
        }, function (resp) {
            $log.error('Error occurred');
        });
    }
}]);

app.service('getService', ['$http', '$log', function($http, $log){
     this.findPerson = function (cb) {
        $http({
            url: '/regi',
            method: 'GET',
        }).then(function (resp) {
            $log.log('got the data in serivce' + JSON.stringify(resp));
            cb(resp);
        }, function (resp) {
            $log.error('Error occurred');
        });
    }
}]);

app.service('editService', ['$http', '$log', function($http, $log){
     this.edit = function (id, cb) {
          $log.log('id in service' + id);
          $log.log('id sent from client');
        $http({
            url: '/edit/'+id,
            method: 'GET',
            id: id
        }).then(function (resp) {
            $log.log('sent id' + id);
            cb(resp.data);
        }, function (resp) {
            $log.error('Error occurred');
        });
    }

    this.put = function(data){
        $http({
            url:'/put',
            method:'PUT',
            data: data
        }).then(function(res){
            $log.error('data sent to server' + res);
            //cb(res)
        }, function(){
            $log.error('Error occurred');
        })
    }
}])

