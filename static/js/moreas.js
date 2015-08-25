(function () {
    'use strict';
    angular.module('moreas', ['ngSanitize', 'ngFx', 'ngAnimate', 'moreas.config', 'moreas.routes', 'moreas.filters',
        'moreas.layout', 'moreas.contact', 'moreas.product']);

    angular.module('moreas').run(run);
    run.$inject = ['$http'];

    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }

})();