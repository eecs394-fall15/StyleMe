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
           
           })
.factory('backendArray', ['$firebaseArray',
  function($firebaseArray) {
    // create a reference to the database where we will store our data
    var ref = new Firebase("https://styleme1.firebaseio.com/");

    return $firebaseArray(ref);
  }
]);
