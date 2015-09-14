define([], function() {
    "use strict";
    function mousewheelDirective() {
        return function (scope, element, attr, ctrl) {
            element.bind('DOMMouseScroll mousewheel onmousewheel', function(event) {
                scope.$apply(function () {
                    scope.$eval(attr.mtkMousewheel);
                });
            });
        };
    }
    mousewheelDirective.$inject = [];
    return mousewheelDirective;
});
