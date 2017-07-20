(function () {
    'use strict';

    angular
        .module('contact')
        .controller('ContactCtrl', ContactCtrl);

    ContactCtrl.$inject = ['$scope'];

    function ContactCtrl($scope) {
        var vm = this;

        vm.max = 250;
        vm.characters = vm.max + ' Characters Left!!!';
        vm.textLength = vm.max;

        vm.question = {};

        vm.question.ngKeyup = function() {
            var textLeft = vm.max - vm.questionText.length;
            vm.characters = textLeft + ' Characters Left!!!';
        };

        var resetForm = function () {
            vm.name = '';
            vm.phone = '';
            vm.email = '';
            vm.questionText = '';
            vm.characters = vm.max + ' Characters Left!!!';
            vm.contact.$setPristine();
        };

        vm.clearForm = function () {
            resetForm();
        };

        vm.SendContactForm = function () {
            swal({
                title: 'Success',
                type: 'success',
                text: 'Thank You ' + '\r\n' +
                vm.name + '\r\n' +
                'I will be sure to get back to you as soon as possible.',
                showConfirmButton: true
            });
            resetForm();
        }

     }
})();
