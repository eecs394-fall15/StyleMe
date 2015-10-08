angular
  .module('example')
  .controller('LearnMoreController', ['$scope', 'supersonic', 'incrementImageIndex', 'firebaseObject', function($scope, supersonic, incrementImageIndex, $firebaseObject) {
    $scope.userid = "";
    $scope.navbarTitle = "Results";
    $scope.currentTitle = "Fetching Results";
    $scope.profile = "Fetching Profile";
    $scope.resultImage = "";
              
    $scope.fetchByID() = function(){
    var ref = new Firebase("https://styleme1.firebaseio.com/" + $scope.userid);
    supersonic.logger.log(ref);
    $scope.profile = $firebaseObject(ref);
    $scope.resultImage = $scope.profile.image;
    $scope.currentTitle = $scope.profile.currentTitle;
    };
              
}]);
