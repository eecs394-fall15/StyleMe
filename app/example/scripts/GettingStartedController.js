angular
  .module('example')
  .controller('GettingStartedController', ['$scope', 'supersonic', 'incrementImageIndex', function($scope, supersonic, incrementImageIndex) {
    var PictureData = supersonic.data.model('PictureData');
    //console.log(PictureData);
     var images =[];
    
    PictureData.findAll().then(function (allPictures) {
    //console.log(allPictures);
    angular.forEach(allPictures, function (picture){
    //console.log(picture.imageUrl);
    images.push(picture.imageUrl);
    });
    console.log(images[0]);
    $scope.currentImage = images[0];
    $scope.$apply();
    console.log($scope.currentImage);
    });
    //console.log(images[0]);
    
    //console.log(images[0].imageUrl);
    var options = {
                    message: "Leave your feedback",
                    buttonLabel: "Close"
                  };
              
	var createModal = function(){
            var modalView = new supersonic.ui.View("example#comments");
			var options = {
 			 animate: true
				          }
			var index = incrementImageIndex.incrementCount();
			console.log(index);
			$scope.currentImage = images[index%images.length];
			console.log($scope.currentImage);
			//$scope.$apply();
			supersonic.ui.modal.show(modalView, options);
			}
	
    $scope.swipeLeft = function(){
              createModal();
            }
    $scope.swipeRight = function(){
              createModal();
                        }
  }]);
