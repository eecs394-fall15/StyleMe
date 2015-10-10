angular
.module('example')
.controller('GettingStartedController', ['$scope', 'supersonic', 'incrementIndex', 'backendArray', 
  function($scope, supersonic, incrementIndex, backendArray, $firebaseObject) {
     


     $scope.swipeArray = backendArray;

     

     var ref = new Firebase("https://styleme1.firebaseio.com/");

     $scope.isLoading = true;
     ref.once("value", function(data) {
               $scope.isLoading = false;
               $scope.cardIndex = incrementIndex.getCount();
     });  

     //for (var key in data.val()){
     //            if (data.val().hasOwnProperty(key)){

     //              nestedRef = new Firebase("https://styleme.firebaseio.com/"+ key);
     //              nestedRef.once("value", function(nestedData) {
     //                $scope.isLoading = false;
     //                for (var nestedKey in nestedData.val()){


     //                  if (nestedData.val().hasOwnProperty(nestedKey)){
     //                    supersonic.logger.log(nestedData.val()[nestedKey].title);
     //                    images.push(nestedData.val()[nestedKey].image);
     //                    titles.push(nestedData.val()[nestedKey].title);
                        
     //                  }
     //                }
     //                $scope.currentImage = images[incrementImageIndex.getCount()%images.length];
     //                $scope.currentTitle = titles[incrementImageIndex.getCount()%images.length];
     //                $scope.$apply;
     //              });
     //            }
     //          }
     //          // do some stuff once
     
     // ref.on("value", function(data) {
     //          $scope.isLoading = false;

     //          for (var key in data.val()){
     //            supersonic.logger.log(key);
     //            if (data.val().hasOwnProperty(key)){

     //              nestedRef = new Firebase("https://styleme2.firebaseio.com/"+ key);
     //              nestedRef.once("value", function(nestedData) {
     //                $scope.isLoading = false;
     //                for (var nestedKey in nestedData.val()){

     //                  supersonic.logger.log(nestedKey);

     //                  if (nestedData.val().hasOwnProperty(nestedKey)){
     //                    supersonic.logger.log(nestedData.val()[nestedKey].title);
     //                    images.push(nestedData.val()[nestedKey].image);
     //                    titles.push(nestedData.val()[nestedKey].title);
                        
     //                  }
     //                }
     //                $scope.currentImage = images[incrementImageIndex.getCount()%images.length];
     //                $scope.currentTitle = titles[incrementImageIndex.getCount()%images.length];
     //                $scope.$apply;
     //              });
     //            }
     //          }
     //          // do some stuff once
     //          });
     
     var createModal = function(){
          $scope.cardIndex = incrementIndex.incrementCount()%$scope.swipeArray.length;
     }
     
     $scope.swipeLeft = function(){
          backendArray[$scope.cardIndex].dislikes = backendArray[$scope.cardIndex].dislikes + 1;
          backendArray.$save($scope.cardIndex);
          createModal();
          supersonic.ui.animate("slideFromRight").perform();
     }
     $scope.swipeRight = function(){
          backendArray[$scope.cardIndex].likes = backendArray[$scope.cardIndex].likes + 1;
          backendArray.$save($scope.cardIndex);
          createModal();
          supersonic.ui.animate("slideFromLeft").perform();
     }
     }]);
