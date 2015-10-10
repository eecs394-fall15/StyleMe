angular
  .module('example')
  .controller('LearnMoreController', ['$scope', function($scope, supersonic) {

  	$scope.test = "abc";
    supersonic.logger.log("its getting hereee");
//   	var ref = new Firebase("https://stylemelogin.firebaseio.com");
//     $scope.authObj = $firebaseAuth(ref);
//   	$scope.username;
//   	$scope.Password;
//   	supersonic.logger.log("its etting here");
//   	$scope.createUser = function() {
//   		supersonic.logger.log("caling login fffunction");
//   		Auth.$createUser({
//         email: $scope.username,
//         password: $scope.Password
//       }).then(function(userData) {
//         $scope.message = "User created with uid: " + userData.uid;
//         supersonic.logger.log("logged in" + userData.uid);
//       }).catch(function(error) {
//         $scope.error = error;
//         supersonic.logger.log($scope.error);
//       });
//   	}
//   	$scope.login = function (){
//   	$scope.authObj.$authWithPassword({
//   email: $scope.email,
//   password: $scope.Password
// }).then(function(authData) {
//   supersonic.logger.log("Logged in as:", authData.uid);
// }).catch(function(error) {
//   console.error("Authentication failed:", error);
// });
//   	}
    $scope.navbarTitle = "Learn More";

  }]);
