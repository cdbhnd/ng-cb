(function() {
    'use strict';

    angular
        .module('cb.components.validation')
        .directive('cbMin', cbMin);

    function cbMin() {

        var directive = {
            link: link,
            restrict: 'A',
            require: 'ngModel'
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

            var minValidator = function(viewValue) {

                var min = scope.$eval(attrs.cbMin) || 0;

                if (!isEmpty(viewValue) && viewValue < min) {
                    ctrl.$setValidity('min', false);
                    return undefined;
                } else {
                    ctrl.$setValidity('min', true);
                    return viewValue;
                }
            };

            ctrl.$parsers.unshift(minValidator);
            ctrl.$formatters.unshift(minValidator);
        }

        function isEmpty(viewValue) {
            return angular.isUndefined(viewValue) || viewValue === '' || viewValue === null || viewValue !== viewValue;
        }
    }

})();
