/**
 * Created by Vladyslav on 18.08.2015.
 */

(function () {
    'use strict';

    /**
     *
     *
     *
     */
    function Contact($http) {
        var Contact = {
            createMessage: createMessage,
            getSlideShowImages: getSlideShowImages
        };

        return Contact;

        function createMessage(message) {
            return $http.post('/api/contact', message)
        }

        function getSlideShowImages() {
            return $http.get('/api/contact');
        }
    }


    Contact.$inject = ['$http'];
    angular.module('moreas.contact.services').factory('Contact', Contact);

})();