
angular.module('ng-on-scroll', [])
    .directive( 'ngOnScroll', ['$timeout', function($timeout) {
        return {
            restrict:'A',
            scope:{
                onScroll:'&',
                onScrollDistance : '='
            },
            link : function(scope, elm, attr) {
                var onScrollDistance = (scope.onScrollDistance * 100) || 0;
                $timeout( function (){
                    window.onscroll = function (event) {
                        var clientHeight = document.documentElement.clientHeight;
                        var clientRect = document.body.getBoundingClientRect();
                        if( (clientHeight + onScrollDistance) >= clientRect.bottom){
                            scope.onScroll()
                        }
                    }
                }, 0, false);
            }
        }
    }]);
