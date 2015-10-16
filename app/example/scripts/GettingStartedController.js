angular
.module('example')
.controller('GettingStartedController', ['$scope', 'supersonic', 'incrementIndex', 'backendArray', 
  function($scope, supersonic, incrementIndex, backendArray, $firebaseObject) {
     
     $scope.swipeArray = backendArray;
     $scope.isLoading = true;
     $scope.swipeArray.$loaded().then
            (function(data){
             $scope.noMoreImages = false;
             $scope.isLoading = false;
             $scope.cardIndex = 0;
             });
             
     var incrementImageIndex = function(){
             
             if(incrementIndex.getCount() < $scope.swipeArray.length - 1)
                $scope.cardIndex = incrementIndex.incrementCount()%$scope.swipeArray.length;
             else {
                    $scope.noMoreImages = true;
                    var options = {
                                    message: "No more images for now! :(",
                                    buttonLabel: "Close"
                    };
                    supersonic.ui.dialog.alert("Oops!", options).then(function() {
                                    supersonic.logger.log("Alert closed.");
                                    });
                  }
     }
     
     var animate = function(action){
          var options = {duration: .4}
          supersonic.logger.log(action);
          supersonic.ui.animate(action, options).perform();
     }
     
     $scope.swipeLeft = function(){
          backendArray[$scope.cardIndex].dislikes++;
          backendArray.$save($scope.cardIndex);
          incrementImageIndex();
          animate("slideFromRight");
     }
                                         
     $scope.swipeRight = function(){
          backendArray[$scope.cardIndex].likes++;
          backendArray.$save($scope.cardIndex);
          incrementImageIndex();
          animate("slideFromLeft");
     }
                                         
     $scope.refreshFeed = function() {
        
        if(incrementIndex.getCount() < $scope.swipeArray.length - 1){
             $scope.noMoreImages = false;
             $scope.cardIndex = incrementIndex.incrementCount()%$scope.swipeArray.length;
        }
        else {
            var options = {
                            message: "Try after sometime!",
                            buttonLabel: "Close"
                           };
            supersonic.ui.dialog.alert("Sorry!", options).then(function() {
                    supersonic.logger.log("Alert closed.");
            });
        }
      }
     }]);
