angular
  .module('example')
  .controller('ResultsController', ['$scope' , 'backendArray','Auth', 'supersonic',  function($scope, backendArray, Auth, supersonic, $firebaseObject) {
  	var authData = Auth.$getAuth();
      $scope.resultsArray = backendArray;
      if (authData){
        $scope.searchID = authData.uid;
      }
    
    
    // $scope.fetchImageById = function(){
    //   $scope.searchID = $scope.userid;
    // };
  	//var authData = null;
  	//$scope.test = "hey";
  	//$scope.$apply;
  	var ref = new Firebase("https://styleme1.firebaseio.com/images");
  	$scope.data = [];
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

