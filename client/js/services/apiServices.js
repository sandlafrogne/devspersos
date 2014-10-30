/**
 * Created by tnvl6480 on 18/09/2014.
 */
angular.module('services')
    .factory('AuthentificationEntreprise', ['$http', '$window', function ($http, $window) {
       var inst={}
    /* $http({method: 'GET', url: 'login/'}).
            success(function (data) {
                //code
            }).
            error(function (data) {
                cbError('OUTRPC KO');
            })*/

        inst.loginAuth = function (mail, password, cb, cbError) {
            $http({method: 'POST', url: '/login', data: {email: mail, password: password}}).
                success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    cb(data);
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    cbError(data);
                });
        };

    }])
    .factory('loginSrv', ['$resource',  function ($resource) {
        return $resource('/login', {login: '@login', pwd:'@pwd'});
    }])

   /* .factory('MeSrv', ['$resource', function ($resource) {
        return $resource('out_rpc/users/me', {}, {'query': {method: 'GET', isArray: false}});
    }])

    .factory('userSrv', ['$resource',
        function ($resource) {
            return $resource('out_rpc/users/external/:id', {id: '@_id'},
                {
                    'update': {method: 'PUT'} //permet d'appeler l'update avec un PUT et non un post
                }
            )
        }
    ])*/
;