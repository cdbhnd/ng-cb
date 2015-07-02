(function() {
    'use strict';

    angular
        .module('cb.components.validation')
        .directive('cbIpadress', cbIpadress);

    function cbIpadress() {

        var directive = {
            link: link,
            restrict: 'A',
            require: 'ngModel'
        };

        return directive;

        function link(scope, element, attrs, ctrl) {

            function ipAddressValidator(viewValue) {

                if (!viewValue) {
                    return setValidity(false, viewValue);
                }

                var parts = viewValue.split('.');

                if (parts.length !== 4) {
                    return setValidity(false, viewValue);
                }

                var areAllZeroes = true;
                for (var i = 0; i < parts.length; i++) {

                    var num = parseInt(parts[i]);
                    if (isNaN(num)) {
                        return setValidity(false, viewValue);
                    }

                    if (num < 0 || num > 255) {
                        return setValidity(false, viewValue);
                    }

                    if (num !== 0) {
                        areAllZeroes = false;
                    }
                }

                if (areAllZeroes) {
                    return setValidity(false, viewValue);
                } else {
                    return setValidity(true, viewValue);
                }
            }

            function setValidity(isValid, viewValue) {

                ctrl.$setValidity('ipaddress', isValid);
                return viewValue;
            }

            ctrl.$parsers.unshift(ipAddressValidator);
            ctrl.$formatters.unshift(ipAddressValidator);
        }
    }
})();
