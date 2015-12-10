angular.module('example', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic', 'ngTouch', 'ngTagsInput'
])
.run(function($rootScope) {
 
    //Parse.initialize("parse app", "parse credentials");
    Parse.initialize("h04Fc8KyRVc4KBuYuQemUeOsrBQCF38DKrMn1LtD", "5pYMzefxZVdr3207uXNkcFVo2D8P7APtYVafm89K");
    $rootScope.currentUser = Parse.User.current();
    supersonic.logger.log($rootScope.currentUser);
 
  })
.service('ParseService',['$rootScope', 'supersonic',  '$q', function($rootScope, supersonic, $q) {
  this.find = function() {
        var resultImages = [];
        var deferred = $q.defer();
    //$scope.currentUser = Parse.User.current();

    var CustClass = Parse.Object.extend("newimg");
    var query = new Parse.Query(CustClass);
    query.equalTo("userid", $rootScope.currentUser.id);

    query.find({
      success: function(results) {
        var myImages = [];
         for (var i = 0; i < results.length; i++) {
          var object = results[i];
          var newResImg = {};

          newResImg.likes = object.get("likes");
          newResImg.dislikes = object.get("dislikes");
          newResImg.title = object.get("title");
          var img = object.get('newimage');
          newResImg.photo = img.url();
          myImages.push(newResImg);
      }
         deferred.resolve(myImages);
      },
      error: function(error) {
        supersonic.ui.dialog.alert('ABANDON SHIP!!');
         deferred.reject();
      }
    });
    return deferred.promise;
  };
}])
// .factory('Auth', ['$firebaseAuth', function($firebaseAuth){
//   var ref = new Firebase("https://styleme1.firebaseio.com");
//   return $firebaseAuth(ref);
// }])
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
