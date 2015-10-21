angular
.module('example')
.controller('GettingStartedController', ['$scope', 'supersonic',
  function($scope, supersonic) {
    $scope.isLoading = true;
    $scope.Images = [];
    var imageindex = 0;
    $scope.currentImg = "BOOBIES";
    var CustClass = Parse.Object.extend("newimg");
var query = new Parse.Query(CustClass);
query.find({
  success: function(results) {
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      $scope.Images.push(object);
    }
    var obj = $scope.Images[imageindex];
    var img = obj.get('newimage');
    $scope.currentImg = img.url();
    $scope.currentTitle = obj.get('title');
    $scope.isLoading = false;
  },
  error: function(error) {
    supersonic.ui.dialog.alert('ABANDON SHIP!!');
  }
});
     // $scope.swipeArray = backendArray;
     // $scope.isLoading = true;
     // $scope.swipeArray.$loaded().then
     //        (function(data){
     //         $scope.noMoreImages = false;
     //         $scope.isLoading = false;
     //         $scope.cardIndex = 0;
     //         });
             
     // var incrementImageIndex = function(){
             
     //         if(incrementIndex.getCount() < $scope.swipeArray.length - 1)
     //            $scope.cardIndex = incrementIndex.incrementCount()%$scope.swipeArray.length;
     //         else {
     //                $scope.noMoreImages = true;
     //                var options = {
     //                                message: "No more images for now! :(",
     //                                buttonLabel: "Close"
     //                };
     //                supersonic.ui.dialog.alert("Oops!", options).then(function() {
     //                                supersonic.logger.log("Alert closed.");
     //                                });
     //              }
     // }
     
     // var animate = function(action){
     //      var options = {duration: .4}
     //      supersonic.logger.log(action);
     //      supersonic.ui.animate(action, options).perform();
     // }
     
     $scope.swipeLeft = function(){
          var image = $scope.Images[imageindex % $scope.Images.length];
          image.increment("dislikes");
          image.save();
          imageindex = imageindex + 1;
          var obj = $scope.Images[imageindex % $scope.Images.length];
          var img = obj.get('newimage');
          $scope.currentImg = img.url();
          $scope.currentTitle = obj.get('title');

          var options = {duration:.4}
          supersonic.ui.animate("slideFromRight",options).perform();
     }
                                         
     $scope.swipeRight = function(){
          var image = $scope.Images[imageindex % $scope.Images.length];
          image.increment("likes");
          image.save();
          imageindex = imageindex + 1;
          var obj = $scope.Images[imageindex % $scope.Images.length];
          var img = obj.get('newimage');
          $scope.currentImg = img.url();
          $scope.currentTitle = obj.get('title');

          var options = {duration:.4}
          supersonic.ui.animate("slideFromLeft",options).perform();
     }
                                         
     // $scope.refreshFeed = function() {
        
     //    if(incrementIndex.getCount() < $scope.swipeArray.length - 1){
     //         $scope.noMoreImages = false;
     //         $scope.cardIndex = incrementIndex.incrementCount()%$scope.swipeArray.length;
     //    }
     //    else {
     //        var options = {
     //                        message: "Try after sometime!",
     //                        buttonLabel: "Close"
     //                       };
     //        supersonic.ui.dialog.alert("Sorry!", options).then(function() {
     //                supersonic.logger.log("Alert closed.");
     //        });
     //    }
     //  }
     }]);
