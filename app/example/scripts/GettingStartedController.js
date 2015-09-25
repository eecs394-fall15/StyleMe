angular
  .module('example')
  .controller('GettingStartedController', function($scope, supersonic) {
    
    var options = {
                    message: "Leave your feedback",
                    buttonLabel: "Close"
                  };

    $scope.swipeLeft = function()
              {
              
              supersonic.ui.dialog.alert("You Swiped Left!", options).then(function() {
                                                                            supersonic.logger.log("Alert closed.");
                                                                        });
              }
    $scope.swipeRight = function()
              {
              
              supersonic.ui.dialog.alert("You Swiped Right!", options).then(function() {
                                                                            supersonic.logger.log("Alert closed.");
                                                                        });
              }
              
              supersonic.ui.tabs.hide();

  });
