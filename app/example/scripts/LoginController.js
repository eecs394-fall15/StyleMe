angular
  .module('example')
  .controller('LoginController', ['$scope' , 'supersonic','$firebaseAuth', function($scope, supersonic, $firebaseAuth) {
  	$scope.test = "abc";
    supersonic.logger.log("its geettiing here");
  	var ref = new Firebase("https://stylemelogin.firebaseio.com");
    $scope.authObj = $firebaseAuth(ref);
  	$scope.username;
  	$scope.password;
  	supersonic.logger.log("its etting here");
  	$scope.createUser = function() {
  		supersonic.logger.log("caling login fffunction");
  		$scope.authObj.$createUser({
        email: $scope.username,
        password: $scope.password
      }).then(function(userData) {
        $scope.message = "User created with uid: " + userData.uid;
        supersonic.logger.log("logged in" + userData.uid);
      }).catch(function(error) {
        $scope.error = error;
        supersonic.logger.log($scope.error);
        supersonic.logger.log("nope");
      });
  	}
  	$scope.login = function (){
  	$scope.authObj.$authWithPassword({
  email: $scope.username,
  password: $scope.password
}).then(function(authData) {
  supersonic.logger.log("Logged in as:", authData.uid);
}).catch(function(error) {
  console.error("Authentication failed:", error);
  supersonic.logger.log("error" + error);
});
  $scope.authObj.$onAuth(function(authData){

    $scope.authData = authData;
    var animation = supersonic.ui.animate("curlDown");
    supersonic.ui.initialView.dismiss(animation);

  });
  $scope.authObj.$getAuth(function(authData){
    $scope.authData = authData;
    supersonic.logger.log("getting auth " + authData.uid);
    var animation = supersonic.ui.animate("curlDown");
    supersonic.ui.initialView.dismiss(animation);

  })
  	}
  	


  	
  }]);