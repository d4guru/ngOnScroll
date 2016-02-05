# ngOnScroll
An Angular infinite scroll directive that takes 2 parameters. on-scroll and on-scroll-distance.


```javascript on-scroll="loadMore()" => the controller function that populate the list of data``` 
<br />
```javascript on-scroll-distance="0" => the distance from the bottom. Where 0 is the closest from bottom.``` 

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
