angular
  .module('example')
  .controller('LearnMoreController', ['$scope', 'supersonic', 'incrementImageIndex', function($scope, supersonic, incrementImageIndex, $firebaseObject) {
    $scope.userid;
    
    $scope.fetchByID() = function() {
    	var ref = new Firebase("https://styleme1.firebaseio.com/" + userid);
    var images = [];
    var titles = [];
    $scope.isLoading = true;
    ref.once("value", function(data) {
      $scope.isLoading = false;
      for (var key in data.val()){
        supersonic.logger.log(key);
        if (data.val().hasOwnProperty(key)){
          images.push(data.val()[key].image);
          titles.push(data.val()[key].title);
        }
      }
          $scope.resultImage = images[incrementImageIndex.getCount()%images.length];
          $scope.currentTitle = titles[incrementImageIndex.getCount()%images.length];
          //supersonic.logger.log(images[0]);
          $scope.$apply; 
  // do some stuff once
    });
}]);
