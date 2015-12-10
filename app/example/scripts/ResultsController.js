angular
  .module('example')
  .controller('ResultsController', ['$scope', 'supersonic', '$rootScope', 'ParseService',
  function($scope, supersonic, $rootScope, ParseService) {
  	$scope.resultImages = [];
    //$scope.currentUser = Parse.User.current();

    // $scope.CustClass = Parse.Object.extend("newimg");
    // $scope.query = new Parse.Query($scope.CustClass);
    // $scope.query.equalTo("userid", $rootScope.currentUser.id);

      $scope.refresh = function(){
      $scope.resultImages = [];
      var promise = ParseService.find();
    promise.then(
          function(results) {
        // supersonic.ui.dialog.alert(results.length);
        // Do something with the returned Parse.Object values
        // for (var i = 0; i < results.length; i++) {
        //   var object = results[i];
        //   var newResImg = {};

        //   newResImg.likes = object.get("likes");
        //   newResImg.dislikes = object.get("dislikes");
        //   newResImg.title = object.get("title");
        //   var img = object.get('newimage');
        //   newResImg.photo = img.url();
        //   $scope.resultImages.push(newResImg);
        // }
         $scope.resultImages = results;
      },
      function(error) {
        supersonic.ui.dialog.alert('ABANDON SHIP!!');
        $scope.error = error;
      });
    //$scope.$apply();
  }

  var promise = ParseService.find();
    promise.then(
          function(results) {
        // supersonic.ui.dialog.alert(results.length);
        // Do something with the returned Parse.Object values
        // for (var i = 0; i < results.length; i++) {
        //   var object = results[i];
        //   var newResImg = {};

        //   newResImg.likes = object.get("likes");
        //   newResImg.dislikes = object.get("dislikes");
        //   newResImg.title = object.get("title");
        //   var img = object.get('newimage');
        //   newResImg.photo = img.url();
         $scope.resultImages = results;
          //$scope.resultImages.push(newResImg);
      },
      function(error) {
        supersonic.ui.dialog.alert('ABANDON SHIP!!');
      });
    

    // $scope.query.find({
    //   success: function(results) {
    //     // supersonic.ui.dialog.alert(results.length);
    //     // Do something with the returned Parse.Object values
    //     for (var i = 0; i < results.length; i++) {
    //       var object = results[i];
    //       var newResImg = {};

    //       newResImg.likes = object.get("likes");
    //       newResImg.dislikes = object.get("dislikes");
    //       newResImg.title = object.get("title");
    //       var img = object.get('newimage');
    //       newResImg.photo = img.url();
    //       $scope.resultImages.push(newResImg);
    //     }
    //   },
    //   error: function(error) {
    //     supersonic.ui.dialog.alert('ABANDON SHIP!!');
    //   }
    // });

  
      // $scope.query.find({
      //   success: function(results) {
      //     supersonic.logger.log("running refresh");
      //     // supersonic.ui.dialog.alert(results.length);
      //     // Do something with the returned Parse.Object values
      //     for (var i = 0; i < results.length; i++) {
      //       var object = results[i];
      //       var newResImg = {};

      //       newResImg.likes = object.get("likes");
      //       newResImg.dislikes = object.get("dislikes");
      //       newResImg.title = object.get("title");
      //       var img = object.get('newimage');
      //       newResImg.photo = img.url();
      //       $scope.resultImages.push(newResImg);
      //     }
      //   },
      //   error: function(error) {
      //     supersonic.ui.dialog.alert('ABANDON SHIP!!');
      //   }
      // });

  }]);

