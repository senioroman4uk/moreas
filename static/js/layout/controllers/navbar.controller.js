/**
 * Created by Vladyslav on 14.08.2015.
 */
(function () {
    'use strict';

    function NavbarController($scope) {
        var vm = this;
        vm.selected = '';

        //save selected page
        $scope.$on('$routeChangeSuccess', function (event, current, previous) {
            vm.selected = current.page;
        });

        /**
         * @name isActive
         * @desc checks if given page selected
         * @param {string} page
         * @return {boolean}
         */
        vm.isActive = function (page) {
            return vm.selected === page;

        }
    }

    NavbarController.$inject = ['$scope'];
    angular.module('moreas.layout.controllers').controller('NavbarController', NavbarController);
})();



