// Define the `phonecatApp` module
var app = angular.module('myApp', ["ngRoute"]);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
            templateUrl: 'javascripts/app/templates/index.html',  
             
        })
      .when('/user', {
            templateUrl: 'javascripts/app/templates/user.html',  
            controller: 'person' 
        })
        .when('/list', {
            templateUrl: 'javascripts/app/templates/list.html',  
            controller: 'list' 
        })
        .when('/user/:id', {
            templateUrl: 'javascripts/app/templates/edit.html',  
            controller: 'edit' 
        })
        .when('/put', {
            templateUrl: 'javascripts/app/templates/update.html',  
            controller: 'put' 
        });
        
        //.otherwise({
          //  redirectTo: '/'
       // })

}]);

   