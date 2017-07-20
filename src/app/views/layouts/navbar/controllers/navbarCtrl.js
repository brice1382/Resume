(function () {
    'use strict';

    angular
        .module('navbar')
        .controller('NavbarCtrl', NavbarCtrl);

    NavbarCtrl.$inject = ['$scope'];

    function NavbarCtrl($scope) {
        var vm = this;

        $scope.home = function() {
            location.href = '#!/home';
        };

        $scope.contact = function() {
            location.href = '#!/contact';
        };

        $scope.about = function() {
            location.href = '#!/about';
        };

        $scope.$on('blur')
    }
})();
