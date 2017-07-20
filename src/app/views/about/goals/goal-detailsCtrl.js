(function () {
    'use strict';

    angular
        .module('goal-details')
        .controller('GoalDetailsCtrl', ['$routeParams', 'GoalService', function ($routeParams, GoalService) {
            var vm = this;
            vm.goals = GoalService.get({id: $routeParams.id}, function(goals) {
                vm.setImage(goals.images[0]);
            });

            vm.setImage = function(imageUrl) {
                vm.mainImageUrl = imageUrl;
            };
        }])
})();
