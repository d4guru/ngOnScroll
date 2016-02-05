# ngOnScroll
Angular infinite scroll directive

params
<code>on-scroll="loadMore()"</code> // the controller function that populate the list of data
<code>on-scroll-distance="0"</code> // 0 is the closest it can get. With 3 loadMore() will be called earlier.

<h3Example</h3> 

<h5>Template</h5>
<pre>
<div ng-repeat="model in data.list"  on-scroll="loadMore()" on-scroll-distance="0">
  /* display some data */
</div>
</pre>

<h5>Controller</h5>
angular.module('myApp', ['ng-on-scroll']).
  controller('myCtrl', ['someHttpService', function($scope, someHttpService) {
    $scope.data = {};
    $scope.loadMore = function(){
      someHttpService.loadMore( function( data ){
        $scope.data.list.push(data);  
      } )
    }
  }
);

<h2>Enjoy :-)</h2>
