angular.module('example', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic', 'ngTouch', 'ngTagsInput', 'firebase',
])
.run(function($rootScope) {
 
    //Parse.initialize("parse app", "parse credentials");
 
    $rootScope.currentUser = Parse.User.current();
    supersonic.logger.log($rootScope.currentUser);
 
  })
.factory('Auth', ['$firebaseAuth', function($firebaseAuth){
  var ref = new Firebase("https://styleme1.firebaseio.com");
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

.factory('incrementIndex', function (){
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
