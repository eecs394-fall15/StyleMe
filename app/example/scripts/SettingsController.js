angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic, $firebaseObject) {
    $scope.navbarTitle = "Settings";
	
    $scope.openCamera = function(){
		var options = {
		  quality: 50,
		  allowEdit: true,
		  targetWidth: 300,
		  targetHeight: 400,
		  encodingType: "png",
		  saveToPhotoAlbum: true,
		  destinationType: "dataURL"
		};
		supersonic.media.camera.takePicture(options).then( function(result){
			$scope.base64 = result;
			
		});
	};
	$scope.base64;

	$scope.submitPicture = function(){
			var ref = new Firebase("https://styleme1.firebaseio.com/");
			ref.push({
			  title: "Appropriate for an interview?",
			  image: $scope.base64
			});	
	}

  	// download the data into a local object
  	// $scope.data = $firebaseObject(ref);

  	

  // putting a console.log here won't work, see below
});