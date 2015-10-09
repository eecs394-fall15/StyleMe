angular.module('example', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic', 'ngTouch', 'ngTagsInput', 'firebase'
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
.factory('imagesArray', ['$firebaseArray',
  function($firebaseArray) {
    // create a reference to the database where we will store our data
    var ref = new Firebase("https://stylemearray.firebaseio.com/");

    return $firebaseArray(ref);
  }
]);
