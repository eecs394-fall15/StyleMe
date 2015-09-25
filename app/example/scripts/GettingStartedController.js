angular
  .module('example')
  .controller('GettingStartedController', function($scope, supersonic) {
    
    var options = {
                    message: "Leave your feedback",
                    buttonLabel: "Close"
                  };
	var createModal = function(){
	
            var modalView = new supersonic.ui.View("example#comments");
			var options = {
 			 animate: true
				}
			supersonic.ui.modal.show(modalView, options);
			}
	
    $scope.swipeLeft = function(){
    createModal();
              


  //            supersonic.ui.dialog.alert("You Swiped Left!", options).then(function() {
                                                                            supersonic.logger.log("Alert closed.");
                                                                        //});
              }
    $scope.swipeRight = function()
              {
              createModal();
              //supersonic.ui.dialog.alert("You Swiped Right!", options).then(function() {
                                                                       //     supersonic.logger.log("Alert closed.");
                                                                        //});
              }
              
              supersonic.ui.tabs.hide();

  });
