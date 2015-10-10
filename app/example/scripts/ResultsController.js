angular
  .module('example')
  .controller('ResultsController', ['$scope' , 'Auth', 'supersonic', function($scope, Auth, supersonic, $firebaseObject) {
  	//var authData = Auth.$getAuth();
  	var authData = null;
  	$scope.test = "hey";
  	//$scope.$apply;
  	var ref = new Firebase("https://styleme1.firebaseio.com/images");
  	$scope.data = [];
  	if (authData){
  		supersonic.logger.log("Hey we have the user");
  		$scope.test = "got here";
  		ref("once", function(data){
  			for (var key in data.val){
				if (data.val().hasOwnProperty(key)){
					if (data.val()[key].userid == authData.uid){
						$scope.data.push(data.val()[key].likes);
					}

  			}
  		}
  		$scope.$apply;
  	});
  	} else {
  		supersonic.logger.log("it was null");
  	}
  }]);