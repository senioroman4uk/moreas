/**
 * Created by Vladyslav on 24.08.2015.
 */

(function () {
    'use strict';

    angular.module('moreas.product.controllers').controller('ProductPageController', ProductPageController);
    ProductPageController.$inject = ['Product', '$scope', '$window', '$document'];


    function ProductPageController(Product, $scope, $window, $document) {
        var vm = this;
        vm.products = [];
        vm.page = 1;
        vm.inProgress = false;
        vm.allDownloaded = false;
        vm.lastColumn = 0;

        angular.element($window).bind('scroll', onScroll);
        for(var i = 0; i < calculateNumberOfColumns(); i++)
            vm.products.push([]);
        activate();

        function onScroll() {
            if (!vm.inProgress && !vm.allDownloaded && $window.scrollY + $window.innerHeight >= $document.height())
                activate();
        }

        function activate() {
            vm.inProgress = true;
            Product.getProducts(vm.page, 9).then(successFn, errorFn)
        }

        function successFn(response) {
            vm.allDownloaded = vm.page >= response.data.pages_count;
            ++vm.page;
            for(var i = 0; i < response.data.products.length; i++)
                vm.products[(i+ vm.lastColumn) % calculateNumberOfColumns()].push(response.data.products[i])
            vm.lastColumn = i % calculateNumberOfColumns();
            //vm.products.concat(response.data.products);
            vm.inProgress = false;
        }

        function errorFn(response) {
            vm.inProgress = false;
        }

        /**
         * @name calculateNumberOfColumns
         * @desc Calculate number of columns based on screen width
         * @returns {Number} The number of columns containing Posts
         * @memberOf thinkster.posts.controllers.PostsControllers
         */
        function calculateNumberOfColumns() {
            var width = $(window).width();


            if (width >= 1200)
                return 3;
            if (width >= 992)
                return 3;
            if (width >= 768)
                return 2;
            return 1;
        }
    }
})();