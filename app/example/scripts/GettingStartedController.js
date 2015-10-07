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
          //supersonic.logger.log(images[0]);
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
    /*var PictureData = supersonic.data.model('PictureData');
    //console.log(PictureData);
     var images =[];
    
    //PictureData.findAll().then(function (allPictures) {
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
     */         
	var createModal = function(){
            /*var modalView = new supersonic.ui.View("example#comments");
			var options = {
 			 animate: true
				          }*/
			var index = incrementImageIndex.incrementCount();
			console.log(index);
			$scope.currentImage = images[index%images.length];
            $scope.currentTitle = titles[index%titles.length];
			console.log($scope.currentImage);
			//$scope.$apply();
			//supersonic.ui.modal.show(modalView, options);
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
