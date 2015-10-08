angular
  .module('example')
  .controller('ResultsController', function($scope, supersonic, incrementImageIndex, $firebaseObject) {
    $scope.cards = [];
    $scope.fetchImageById = function(){
    var ref = new Firebase("https://styleme1.firebaseio.com/" + $scope.userid);
              
    ref.once("value", function(data) {
                       $scope.isLoading = false;
                       for (var key in data.val()){
                            supersonic.logger.log(key);
                            if (data.val().hasOwnProperty(key)){
                                $scope.cards.push({
                               image: data.val()[key].image,
                               title: data.val()[key].title});
                            }
                       }
                       $scope.$apply;
                       });

    };
              
});
