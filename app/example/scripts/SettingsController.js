angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic, $firebaseObject) {
    $scope.navbarTitle = "Settings";
	var ref = new Firebase("https://styleme1.firebaseio.com/");

  	// download the data into a local object
  	$scope.data = $firebaseObject(ref);

  	var syncObject = $firebaseObject(ref);

  	syncObject.$bindTo($scope, "data");

  // putting a console.log here won't work, see below
});