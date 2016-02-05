app.directive( 'ngOnScroll', ['$timeout', function($timeout) {
    return {
        restrict:'A',
        scope:{
            onScroll:'&',
            onScrollDistance : '='
        },
        link : function(scope, elm, attr) {
            var onScrollDistance = (scope.onScrollDistance * 100) || 0;
            $timeout( function (){
                console.log("onScrollDistance : ", onScrollDistance);
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
