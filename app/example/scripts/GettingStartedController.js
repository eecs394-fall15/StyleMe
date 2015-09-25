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
            }
    $scope.swipeRight = function(){
              createModal();
                        }
              
    supersonic.ui.tabs.hide();

  });
