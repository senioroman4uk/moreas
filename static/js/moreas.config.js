/**
 * Created by Vladyslav on 18.08.2015.
 */

(function () {
    'use strict';

    angular.module('moreas.config', []).config(config);

    config.$inject = ['$locationProvider'];

    /**
     * @name config
     * @desc Enable HTML5 routing
     */
    function config($locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
})();
