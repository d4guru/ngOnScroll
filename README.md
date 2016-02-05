# ngOnScroll
Angular infinite scroll directive

params
```javascript on-scroll="loadMore()"// the controller function that populate the list of data``` 
```javascript on-scroll-distance="0"</code> // the distance from bottom page where 0 is the closest.``` 

<h3Example</h3> 

<h5>Template</h5>
```javascript
<div ng-repeat="model in data.list"  on-scroll="loadMore()" on-scroll-distance="0">
  /* display some data */
</div>

<h5>Controller</h5>

```javascript
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
```

<h2>Enjoy :-)</h2>
