/**
 * Created by Vladyslav on 18.08.2015.
 */

(function () {
    'use strict';

    angular.module('moreas.contact.controllers').controller('ContactFormController', ContactFormController);
    ContactFormController.$inject = ['Contact'];


    function ContactFormController(Contact) {
        var vm = this;
        vm.message = {};

        vm.createMessage = function (message) {
            Contact.createMessage(message).then(successFn, errorFn);
        };

        vm.getErrorClass = function (fieldName) {
            var field = vm.form[fieldName];
            var result = '';

            if (field.$dirty && field.$valid) {
                result = 'has-success';
                $("input[name=" + fieldName + "]").popover('hide');
            }
            else if (field.$dirty && !field.$valid) {
                result = 'has-error';
                $("input[name=" + fieldName + "]").popover({content: 'bla-blabla-blabla-blabla-blabla-blabla-blabla-blabla-blabla-blabla-blabla-bla'}).popover('show');
            }
            return result;
        };


        function successFn() {

        }

        function errorFn() {

        }
    }
})();