angular.module('example', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic', 'ngTouch', 'ngTagsInput', 'firebase'
])
.factory('Auth', ['$firebaseAuth', function($firebaseAuth){
  var ref = new Firebase("https://stylemelogin.firebaseio.com");
  return $firebaseAuth(ref);
}])
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
         }})

.directive('loadingView', function ()
                         {
                         return {
                         restrict: 'E',
                         scope: {
                            isLoading: '='
                            },
                            };
           
           });
