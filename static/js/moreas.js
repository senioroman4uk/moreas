(function () {
    'use strict';
    angular.module('moreas', ['moreas.config', 'moreas.routes', 'moreas.layout', 'moreas.contact']);

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