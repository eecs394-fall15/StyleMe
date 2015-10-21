angular
  .module('example')
  .controller('ResultsController', ['$scope' ,'Auth', 'supersonic',  
  function($scope, Auth, supersonic) {
  	$scope.resultImages = [];
    var authData = Auth.$getAuth();

    var CustClass = Parse.Object.extend("newimg");
    var query = new Parse.Query(CustClass);
    query.equalTo("userid", authData.uid);
    query.find({
      success: function(results) {
        // supersonic.ui.dialog.alert(results.length);
        // Do something with the returned Parse.Object values
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          var newResImg = {};
          // supersonic.logger.log(object.get("likes"));
          // $scope.likeylike = object.get('likes');
          newResImg.likes = object.get("likes");
          newResImg.dislikes = object.get("dislikes");
          newResImg.title = object.get("title");
          var img = object.get('newimage');
          newResImg.photo = img.url();
          $scope.resultImages.push(newResImg);
        }
      },
      error: function(error) {
        supersonic.ui.dialog.alert('ABANDON SHIP!!');
      }
    });
    // $scope.fetchImageById = function(){
    //   $scope.searchID = $scope.userid;
    // };
  	//var authData = null;
  	//$scope.test = "hey";
  	//$scope.$apply;
  	// var ref = new Firebase("https://styleme1.firebaseio.com/images");
  	// $scope.data = [];
  	// if (authData){
  	// 	supersonic.logger.log("Hey we have the user");
  	// 	$scope.test = "got here";
  	// 	ref("once", function(data){
  	// 		for (var key in data.val){
			// 	if (data.val().hasOwnProperty(key)){
			// 		if (data.val()[key].userid == authData.uid){
			// 			$scope.data.push(data.val()[key].likes);
			// 		}
  	// 		}
  	// 	}
  	// 	$scope.$apply;
  	// });
  	// } else {
  	// 	supersonic.logger.log("it was null");
  	// }
  }]);

