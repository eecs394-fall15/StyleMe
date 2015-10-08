angular
.module('example')
.controller('GettingStartedController', ['$scope', 'supersonic', 'incrementImageIndex', function($scope, supersonic, incrementImageIndex, $firebaseObject) {
     var ref = new Firebase("https://styleme1.firebaseio.com/");
     var images = [];
     var titles = [];
     $scope.isLoading = true;
     ref.once("value", function(data) {
              $scope.isLoading = false;
              for (var key in data.val()){
              supersonic.logger.log(key);
              if (data.val().hasOwnProperty(key)){
              images.push(data.val()[key].image);
              titles.push(data.val()[key].title);
              }
              }
              $scope.currentImage = images[incrementImageIndex.getCount()%images.length];
              $scope.currentTitle = titles[incrementImageIndex.getCount()%images.length];
              $scope.$apply;
              // do some stuff once
              });
     ref.on("value", function(snapshot) {
            images = [];
            titles = [];
            for (var key in snapshot.val()){
            if (snapshot.val().hasOwnProperty(key)){
            images.push(snapshot.val()[key].image);
            titles.push(snapshot.val()[key].title);
            }
            }
            $scope.currentImage = images[incrementImageIndex.getCount()%images.length];
            $scope.currentTitle = titles[incrementImageIndex.getCount()%images.length];
            console.log(snapshot.val());
            }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            });
  
     var createModal = function(){
     var index = incrementImageIndex.incrementCount();
     console.log(index);
     $scope.currentImage = images[index%images.length];
     $scope.currentTitle = titles[index%titles.length];
     }
     
     $scope.swipeLeft = function(){
     createModal();
     supersonic.ui.animate("slideFromRight").perform();
     }
     $scope.swipeRight = function(){
     createModal();
     supersonic.ui.animate("slideFromLeft").perform();
     }
     }]);
