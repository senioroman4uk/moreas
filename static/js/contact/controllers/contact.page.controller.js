/**
 * Created by Vladyslav on 21.08.2015.
 */

(function () {
    'use strict';
    function ContactPageController(Contact) {
        var vm = this;
        vm.images = [];

        activate();

        function activate() {
            var infoWindow = new google.maps.InfoWindow({content: '<span class="black">We are here</span>'});
            vm.gmap = new GMaps({
                div: '#map',
                lat: 50.3925286,
                lng: 30.6224799,
                height: '200px'
            });
            vm.gmap.addMarker({
                    lat: 50.3925286,
                    lng: 30.6224799,
                    infoWindow: infoWindow
                });
            infoWindow.open();
            return Contact.getSlideShowImages().then(successFn);
        }

        function successFn(response) {
            vm.images = response.data;
        }
    }

    ContactPageController.$inject = ['Contact'];
    angular.module('moreas.contact.controllers').controller('ContactPageController', ContactPageController);
})();