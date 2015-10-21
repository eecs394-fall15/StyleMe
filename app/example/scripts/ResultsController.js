angular
  .module('example')
  .controller('ResultsController', ['$scope' ,'Auth', 'supersonic',  
  function($scope, Auth, supersonic) {
  	$scope.resultImages = [];
    var authData = Auth.$getAuth();

    var CustClass = Parse.Object.extend("newimg");
    var query = new Parse.Query(CustClass);
    query.equalTo("userid", authData.uid);

    query.find({
      success: function(results) {
        // supersonic.ui.dialog.alert(results.length);
        // Do something with the returned Parse.Object values
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          var newResImg = {};

          newResImg.likes = object.get("likes");
          newResImg.dislikes = object.get("dislikes");
          newResImg.title = object.get("title");
          var img = object.get('newimage');
          newResImg.photo = img.url();
          $scope.resultImages.push(newResImg);
        }
      },
      error: function(error) {
        supersonic.ui.dialog.alert('ABANDON SHIP!!');
      }
    });

    $scope.refresh = function(){
      $scope.resultImages = [];
      query.find({
        success: function(results) {
          supersonic.logger.log("running refresh");
          // supersonic.ui.dialog.alert(results.length);
          // Do something with the returned Parse.Object values
          for (var i = 0; i < results.length; i++) {
            var object = results[i];
            var newResImg = {};

            newResImg.likes = object.get("likes");
            newResImg.dislikes = object.get("dislikes");
            newResImg.title = object.get("title");
            var img = object.get('newimage');
            newResImg.photo = img.url();
            $scope.resultImages.push(newResImg);
          }
        },
        error: function(error) {
          supersonic.ui.dialog.alert('ABANDON SHIP!!');
        }
      });
      $scope.$apply;
    }

  }]);
