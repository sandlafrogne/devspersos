
/* Contrôleur principal
 ================================================== */
angular.module('controllers', [])
    .controller('homeCtrl', ['$scope',
        function ($scope) {
            $scope.view = false;
        }])
    .controller('poolNumbersCtrl', ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            $scope.view = false;
        }
    ])
    .controller('allNumbersCtrl', ['$scope',
        function ($scope) {
            $scope.view = false;
        }])
    .controller('newUserCtrl', ['$scope',
        function ($scope) {
            $scope.view = false;
        }])
    .controller('razCtrl', ['$scope',
        function ($scope) {
            $scope.view = false;
        }])
    .controller('loginCtrl', ['$scope','$http','$location',function ($scope,$http,$location) {
        $scope.login = function (mail, password) {
            $http({method: 'POST', url: '/login', data: {email: mail, password: password}}).
                success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    $('#info .modal-body').html('Bienvenue')
                    $('#info').modal("show")
                    $location.path('/home');
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    $('#error').modal - body.html(error.data.message)
                    $('#error').modal("show");
                    //redirection sur la page d'accueil
                    $location.path('/login');
                });
        }
    }])

    //methode en utilisabt la factory dans services. Mais pb de déclaration de la factory, authjentificationEntreprise n'est pas trouvé
  /*  .controller('loginCtrl', ['$scope','AuthentificationEntreprise',function ($scope,AuthentificationEntreprise) {
        $scope.login = function (login, pwd) {
            AuthentificationEntreprise.loginAuth('toto', 'titi',
                function (data) {
                    //l'application existe
                    // $scope.variable=data
                    $('#info .modal-body').html('Bienvenue')
                    $('#info').modal("show")
                    $location.path('/home');
                },
                function () {
                    //ERREUR lors de la récupération des données
                    $('#error').modal - body.html(error.data.message)
                    $('#error').modal("show");
                    //redirection sur la page d'accueil
                    $location.path('/login');
                });
        }
    }])*/
    .controller("logoutCtrl", ["$scope",
        function ($scope) {
            $scope.view = false;

        }])