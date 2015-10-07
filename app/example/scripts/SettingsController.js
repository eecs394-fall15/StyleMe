angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic, $firebaseObject) {
              
    $scope.navbarTitle = "Settings";
    $scope.userid;
              
    $scope.animateView = function(){
             supersonic.logger.log("Animate called");
              supersonic.ui.animate("curlDown").perform();
              /*var options = {
              duration: 10,
              curve: "easeInOut
              }
              supersonic.ui.animate("curlDown", options).perform().then( function() {
                                                                        supersonic.logger.log("About to start an animation");
                                                                        });*/
    };

	
    $scope.openCamera = function(){
		var options = {
		  quality: 50,
		  allowEdit: true,
		  targetWidth: 600,
		  targetHeight: 600,
		  encodingType: "png",
		  saveToPhotoAlbum: false,
		  destinationType: "dataURL"
		};
		supersonic.media.camera.takePicture(options).then( function(result){
			$scope.base64 = result;
			
		});
	};
	$scope.base64;

	$scope.submitPicture = function(){
			var ref = new Firebase("https://styleme1.firebaseio.com/" + $scope.userid);
			ref.push({
			  title: $scope.question,
			  image: $scope.base64,
			  likes : 0,
			  dislikes : 0
			});	

			var options = {
			  
			  buttonLabel: "Close"
			};

			supersonic.ui.dialog.alert("Success!", options).then(function() {
			  supersonic.logger.log("Alert closed.");
			});

			$scope.base64="";
			$scope.question="";
	}

  	// download the data into a local object
  	// $scope.data = $firebaseObject(ref);

  	

  // putting a console.log here won't work, see below
});