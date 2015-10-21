angular
  .module('example')
  .controller('SettingsController', ['$scope' , 'backendArray','Auth', 'supersonic',  function($scope, backendArray, Auth, supersonic) {
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

		var CustClass = Parse.Object.extend("customclass");
      var custClass = new CustClass();

      custClass.set("likes", 0);
      custClass.set("dislikes", 0);
      custClass.set("title", $scope.question);
      custClass.set("userid", authData.uid);

      var file = new Parse.File("myphoto.png", { base64: $scope.base64 });

      file.save().then(function() {
        // supersonic.ui.dialog.alert('saved that image!');
        // The file has been saved to Parse.
      }, function(error) {
        // supersonic.ui.dialog.alert('didnt save that image :(');
        // The file either could not be read, or could not be saved to Parse.
      });

      custClass.set('newimage', file);
      custClass.save(null, {
        success: function(gameScore) {
          // Execute any logic that should take place after the object is saved.
          supersonic.ui.dialog.alert('Uploaded photo!');
        },
        error: function(gameScore, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          supersonic.ui.dialog.alert('Sorry, there was a problem.');
        }
      });
      

			$scope.base64="";
			$scope.question="";
              };
}]);