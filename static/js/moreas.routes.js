/**
 * Created by Vladyslav on 18.08.2015.
 */

(function () {
    angular.module('moreas.routes', ['ngRoute']).config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    /**
     * @name routeConfig
     * @desc Define application routes
     */
    function routeConfig($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: '/static/partials/index.html', page: 'index'}).
            when('/awards', {templateUrl: '/static/partials/awards.html', page: 'awards'}).
            when('/about', {templateUrl: '/static/partials/about.html', page: 'about'}).
            when('/contact', {
                templateUrl: '/static/partials/contact.html',
                page: 'contact',
                controller: 'ContactPageController as ctrl'
            }).
            otherwise({redirectTo: '/'});
    }
})();
