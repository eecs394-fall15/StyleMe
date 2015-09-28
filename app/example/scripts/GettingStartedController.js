angular
  .module('example')
  .controller('GettingStartedController', function($scope, supersonic) {
    var PictureData = supersonic.data.model('PictureData');
     var images ;
    var index = 0;
    PictureData.findAll().then(function (allPictures) {
	$scope.images = allPictures;
    });
    $scope.currentImage = $scope.images[index].imageUrl;
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
			index += 1;
			$scope.currentImage = images[index%images.length].imageUrl;
			supersonic.ui.modal.show(modalView, options);
			}
	
    $scope.swipeLeft = function(){
              createModal();
            }
    $scope.swipeRight = function(){
              createModal();
                        }
              
    supersonic.ui.tabs.hide();

  });
