angular
  .module('example')
  .controller('SettingsController', ['$scope' , 'backendArray','Auth', 'supersonic',  function($scope, backendArray, Auth, supersonic, $firebaseObject) {
    $scope.userid = null;
    $scope.navbarTitle = "Settings";
    var authData = Auth.$getAuth();
	
    $scope.openCamera = function(){
		var options = {
		  quality: 50,
		  allowEdit: true,
		  targetWidth: 400,
		  targetHeight: 400,
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
			supersonic.logger.log(authData.uid);
			$scope.db = backendArray;
            if (authData){
            	$scope.db.$add({
			  title: $scope.question,
			  image: $scope.base64,
			  likes : 0,
			  dislikes : 0,
			  user: authData.uid
			});	

            }
			
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
}]);