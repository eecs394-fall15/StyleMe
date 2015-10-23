angular
  .module('example')
  .controller('LoginController', ['$scope' , 'supersonic', '$rootScope', function($scope, supersonic, $rootScope) {
    $scope.scenario = 'Log in';
    if($rootScope.currentUser)
    {
      $scope.scenario = 'Logged in';
      var animation = supersonic.ui.animate("curlDown");
      supersonic.ui.initialView.dismiss(animation);
    }
  $scope.signUp = function(form) {
    var user = new Parse.User();
    user.set("email", form.email);
    user.set("username", form.username);
    user.set("password", form.password);
   
    user.signUp(null, {
      success: function(user) {
        $rootScope.currentUser = user;
        $scope.$apply(); // Notify AngularJS to sync currentUser
        var animation = supersonic.ui.animate("curlDown");
        supersonic.ui.initialView.dismiss(animation);
      },
      error: function(user, error) {
        alert("Unable to sign up:  " + error.code + " " + error.message);
      }
    });    
  };

  $scope.logIn = function(form) {
    Parse.User.logIn(form.username, form.password, {
      success: function(user) {
        $rootScope.currentUser = user;
        $scope.scenario = 'Logged in';
        $scope.$apply();
        var animation = supersonic.ui.animate("curlDown");
        supersonic.ui.initialView.dismiss(animation);
      },
      error: function(user, error) {
        alert("Unable to log in: " + error.code + " " + error.message);
      }
    });
  };

  $scope.logOut = function()
    {    
          Parse.User.logOut();
          $rootScope.currentUser = null;
          $scope.scenario = 'Log in';
    }

    $scope.logOutTrigger = function()
    {
      supersonic.ui.initialView.show();
    }

//   	$scope.test = "abc";
//     supersonic.logger.log("its geettiing here");
//   	var ref = new Firebase("https://styleme1.firebaseio.com");
//     $scope.authObj = $firebaseAuth(ref);
//   	$scope.username;
//   	$scope.password;
//   	supersonic.logger.log("its etting here");
//   	$scope.createUser = function() {
//   		supersonic.logger.log("caling signup function");
//   		$scope.authObj.$createUser({
//         email: $scope.username,
//         password: $scope.password
//       }).then(function(userData) {
//         $scope.message = "User created with uid: " + userData.uid;
//         supersonic.logger.log("signed up" + userData.uid);
//       }).catch(function(error) {
//         $scope.error = error;
//         supersonic.logger.log($scope.error);
//         supersonic.logger.log("failed signup");
//       });
//   	}
//   	$scope.login = function (){
//   	$scope.authObj.$authWithPassword({
//   email: $scope.username,
//   password: $scope.password
// }).then(function(authData) {
//   supersonic.logger.log("Logged in as:", authData.uid);
// }).catch(function(error) {
//   console.error("Authentication failed:", error);
//   supersonic.logger.log("error" + error);
// });

//   	}
//      $scope.authObj.$onAuth(function(authData){

//     $scope.authData = authData;
//     if (authData){
//       supersonic.logger.log(authData.uid);
//       var animation = supersonic.ui.animate("curlDown");
//     supersonic.ui.initialView.dismiss(animation);
//     }
    

//   });
  	


  	
  }]);