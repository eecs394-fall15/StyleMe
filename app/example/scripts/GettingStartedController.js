angular
.module('example')
.controller('GettingStartedController', ['$scope', 'supersonic', 'incrementImageIndex', function($scope, supersonic, incrementImageIndex, $firebaseObject) {
     var ref = new Firebase("https://styleme2.firebaseio.com/");
     var nestedRef;
     var images = [];
     var titles = [];
     $scope.isLoading = true;
     ref.once("value", function(data) {
              $scope.isLoading = false;
              supersonic.logger.log(images.length);
              for (var key in data.val()){
                supersonic.logger.log(key);
                if (data.val().hasOwnProperty(key)){

                  nestedRef = new Firebase("https://styleme2.firebaseio.com/"+ key);
                  nestedRef.once("value", function(nestedData) {
                    $scope.isLoading = false;
                    for (var nestedKey in nestedData.val()){

                      supersonic.logger.log(nestedKey);

                      if (nestedData.val().hasOwnProperty(nestedKey)){
                        supersonic.logger.log(nestedData.val()[nestedKey].title);
                        images.push(nestedData.val()[nestedKey].image);
                        titles.push(nestedData.val()[nestedKey].title);
                        
                      }
                    }
                    $scope.currentImage = images[incrementImageIndex.getCount()%images.length];
                    $scope.currentTitle = titles[incrementImageIndex.getCount()%images.length];
                    $scope.$apply;
                  });
                }
              }
              // do some stuff once
              });
     ref.on("value", function(data) {
              $scope.isLoading = false;

              for (var key in data.val()){
                supersonic.logger.log(key);
                if (data.val().hasOwnProperty(key)){

                  nestedRef = new Firebase("https://styleme2.firebaseio.com/"+ key);
                  nestedRef.once("value", function(nestedData) {
                    $scope.isLoading = false;
                    for (var nestedKey in nestedData.val()){

                      supersonic.logger.log(nestedKey);

                      if (nestedData.val().hasOwnProperty(nestedKey)){
                        supersonic.logger.log(nestedData.val()[nestedKey].title);
                        images.push(nestedData.val()[nestedKey].image);
                        titles.push(nestedData.val()[nestedKey].title);
                        
                      }
                    }
                    $scope.currentImage = images[incrementImageIndex.getCount()%images.length];
                    $scope.currentTitle = titles[incrementImageIndex.getCount()%images.length];
                    $scope.$apply;
                  });
                }
              }
              // do some stuff once
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
