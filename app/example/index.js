angular.module('example', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic', 'ngTouch', 'ngTagsInput'
])
.factory('incrementImageIndex', function (){
var countF = 0;
return {
        getCount : function () {

            return countF;
        },
        incrementCount:function(){
           countF++;
            return countF;
        }
    }});
