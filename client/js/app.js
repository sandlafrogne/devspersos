angular.module('vNumber', ['ngRoute',  'controllers', 'services', 'directives', 'filters','pascalprecht.translate'])
    .config(function ($routeProvider,$httpProvider) {
        $routeProvider
            .when('/', {templateUrl: 'login.html'})
            .when('/login', {templateUrl: 'login.html'})
            .when('/home', {templateUrl: 'home.html'})
            .when('/allnumbers', {templateUrl: 'allnumbers.html'})
            .when('/poolnumbers', {templateUrl: 'poolnumbers.html'})
            .when('/newuser', {templateUrl: 'newuser.html'})
            .when('/raz', {templateUrl: 'raz.html'})
            .when('/error', {templateUrl: 'error.html'})
            .when('/logout', {templateUrl: 'logout.html'})
            .otherwise({
                redirectTo: '/error'
            });
        //l'interceptor permet de mettre le nom de domaine devant l'url relative (accès à un serveur sur un autre domaine)
        $httpProvider.interceptors.push(function ($q, $window, $location) {
            return {
                request: function (config) {



             /*       config.headers = config.headers || {};
                    if ($window.sessionStorage.ext_accessToken) {
                        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.ext_accessToken;
                    } else if ($window.localStorage.ext_accessToken) {
                        $window.sessionStorage.ext_accessToken = $window.localStorage.ext_accessToken;
                        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.ext_accessToken;
                    }*/
                    return config;
                },
                'responseError': function (rejection) {
                    if (rejection.status === 401) {
                        $location.path('/login');
                    }
                    return $q.reject(rejection);
                }
            }
        });
    })
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'MY_ACCOUNT': 'My account',
            'LOG_OUT': 'Log out',
            'SEARCH': 'Search',
            'ERROR': 'Error, page not found',
            'AN_ERROR_HAS_OCCURRED': 'An error has occurred',
            'PANE': 'Panes',
            'HOME': 'home',
            'AS': 'asController'
        });
        $translateProvider.translations('fr', {
            'MY_ACCOUNT': 'Mon compte',
            'LOG_OUT': 'Se déconnecter',
            'SEARCH': 'Rechercher',
            'ERROR': 'Erreur, la page n\'existe pas',
            'AN_ERROR_HAS_OCCURRED': 'Une erreur s\'est produite',
            'PANE': 'Onglets',
            'HOME': 'accueil',
            'AS': 'Controlleur avec As'
        });
        $translateProvider.preferredLanguage('fr');
    }])




/*Ajout des modules externes*/

angular.module('controllers', []);
angular.module('services', []);
angular.module('directives', []);
angular.module('filters', []);
