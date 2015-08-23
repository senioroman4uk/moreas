/**
 * Created by Vladyslav on 23.08.2015.
 */

(function() {
    'use strict';

    function Product($http) {
        var Product = {getProducts: getProducts};

        return Product;

        function getProducts(page, per_page) {
            return $http.get();
        }
    }
    Product.$inject = ['$http'];

    angular.module('moreas.product.services').factory('Product', Product);
})();
