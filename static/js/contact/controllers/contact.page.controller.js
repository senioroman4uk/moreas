/**
 * Created by Vladyslav on 21.08.2015.
 */

(function () {
    'use strict';

    angular.module('moreas.contact.controllers').controller('ContactPageController', ContactPageController);
    ContactPageController.$inject = ['Contact'];

    function ContactPageController(Contact) {
        var vm = this;
        vm.images = [];

        activate();

        function activate() {
            try {
                vm.gmap = new GMaps({
                    div: '#map',
                    lat: 50.3925286,
                    lng: 30.6224799,
                    height: '200px'
                });

                var infoWindow = new google.maps.InfoWindow({content: '<span class="black">We are here</span>'});
                var marker = vm.gmap.addMarker({
                    lat: 50.3925286,
                    lng: 30.6224799,
                    infoWindow: infoWindow
                });

                infoWindow.open(vm.gmap, marker);
            }
            catch(e) {}

            return Contact.getSlideShowImages().then(successFn);
        }

        function successFn(response) {
            vm.images = response.data;
        }
    }
})();