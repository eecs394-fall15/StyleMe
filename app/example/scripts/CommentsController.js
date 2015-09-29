angular
  .module('example')
  .controller('CommentsController', function($scope, supersonic) {
              $scope.tags = [
                             { text: 'smart' },
                             { text: 'funky' },
                             { text: 'cool' },
                             { text: 'dapper' },
                             { text: 'suave' },
                             { text: 'sloppy' },
                             { text: 'unfashionable' },
                             { text: 'sexy' },
                             { text: 'bold' },
                             { text: 'hot' },
                             { text: 'old-fashioned' },
                             { text: 'loose' },
                             ];
              
              $scope.submitComments = function()
              {
              //var modalView = new supersonic.ui.View("example#getting-started");
              var options = {
              animate: true
              }
              supersonic.ui.modal.hide(options);
              //supersonic.ui.modal.show(modalView, options);
              }

              });
