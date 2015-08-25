/**
 * Created by Vladyslav on 23.08.2015.
 */

(function () {
    'use strict';

    function Product($http) {
        var Product = {
            getProducts: function getProducts(page, per_page) {
                return $http.get('/api/products', {
                    params: {page: page, per_page: per_page}
                });
            }
        };

        return Product;


    }

    Product.$inject = ['$http'];

    angular.module('moreas.product.services').factory('Product', Product);
})();
