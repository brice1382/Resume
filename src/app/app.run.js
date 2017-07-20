(function () {
    'use strict';

    angular
        .module('brport')
        .run(run);

    run.$inject = ['$rootScope', 'FlashManager'];

    function run ($rootScope, FlashManager) {
        $rootScope.FlashManager = FlashManager;

        (function (){
            var styles = [
                'background: linear-gradient(#000428, #004e92)'
                , 'border: 1px solid #3E0E02'
                , 'color: azure'
                , 'padding-top: 60px'
                , 'padding-bottom: 15px'
                , 'padding-left: 30px'
                , 'padding-right: 30px'
                , 'display: block'
                , 'border-radius: 6px'
                , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
                , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
                , 'line-height: 40px'
                , 'background-color: #333'
                , 'text-align: center'
                , 'font-weight: bold'
                , 'font-size: 1.3em'
            ].join(';');
            console.log('%c WELCOME TO MY RESUME DEMO SITE. - BRANDON SCOTT RICE', styles);
            return "";
        }());
    }
})();
