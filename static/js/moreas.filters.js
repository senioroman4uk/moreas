/**
 * Created by Vladyslav on 25.08.2015.
 */

angular.module('moreas.filters', []);

angular.module('moreas.filters').filter('unsafe', Unsafe);
Unsafe.$inject = ['$sce'];


function Unsafe($sce) {
    return function(value) {
        return $sce.trustAsHtml(value);
    }
}