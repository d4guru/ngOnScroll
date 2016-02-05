# ngOnScroll

<h2>An Angular infinite scroll directive</h2>


The directive takes two parameters :

```javascript 
on-scroll="loadMore()"  //the controller function that populate the list of data
``` 

```javascript 
on-scroll-distance="0"  //the distance from the bottom. Where 0 is the closest from bottom.
``` 

<h3Example</h3> 

<h5>Template</h5>
```javascript
<div ng-repeat="model in data.list"  on-scroll="loadMore()" on-scroll-distance="0">
  /* display some data */
</div>
```
<h5>Controller</h5>

```javascript
angular.module('myApp', ['ng-on-scroll']).
  controller('myCtrl', ['someHttpService', function($scope, someHttpService) {
    $scope.data = {
      list : ["item1","item2","item3","item4"];
    };
    $scope.loadMore = function(){
      someHttpService.loadMore( function( data ){
        $scope.data.list.push(data); //item5, item6, item7, etc...  
      } )
    }
  }
);
```

<h3>Enjoy :-)</h3>
