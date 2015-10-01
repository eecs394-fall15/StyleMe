angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic, $firebaseObject) {
    $scope.navbarTitle = "Settings";
	

	var options = {
	  quality: 50,
	  allowEdit: true,
	  targetWidth: 300,
	  targetHeight: 300,
	  encodingType: "png",
	  saveToPhotoAlbum: true,
	  destinationType: "dataURL"
	};
	supersonic.media.camera.takePicture(options).then( function(result){
		$scope.base64 = result;
		var ref = new Firebase("https://styleme1.firebaseio.com/");
		// var syncObject = $firebaseObject(ref);
		ref.set(result);
  		// syncObject.set({pic: $scope.base64});
	});


  	// download the data into a local object
  	// $scope.data = $firebaseObject(ref);

  	

  // putting a console.log here won't work, see below
});