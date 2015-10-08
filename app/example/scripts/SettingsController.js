angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic, $firebaseObject) {
    $scope.userid = null;
    $scope.navbarTitle = "Settings";
	
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
			var ref = new Firebase("https://styleme2.firebaseio.com/");
            
			ref.child($scope.userid).push({
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
              };

  	// download the data into a local object
  	// $scope.data = $firebaseObject(ref);
});