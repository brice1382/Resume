(function () {
    'use strict';

    angular
        .module('contact')
        .service('ContactSvc', ContactSvc);

    ContactSvc.$inject = ['$resource'];

    function ContactSvc($resource) {
        var sv = this;


    }
})();
