angular
  .module('example')
  .controller('ResultsController', function($scope, supersonic, backendArray, $firebaseObject) {
    
    $scope.resultsArray = backendArray;
    $scope.searchID = "_____";
    
    $scope.fetchImageById = function(){
      $scope.searchID = $scope.userid;
    };
              
});
