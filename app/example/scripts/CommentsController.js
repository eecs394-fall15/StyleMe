angular
  .module('example')
  .controller('CommentsController', function($scope, supersonic) {
              $scope.tags = [
                             { text: 'perfect' },
                             { text: 'almost there' },
                             { text: 'start over from scratch' },
                             { text: 'overdressed' },
                             { text: 'underdressed' },
                             { text: 'good color choice' },
                             { text: 'colors don\'t match' },
                             ];
               $scope.tagsset = [];
              $scope.addTag = function(tag){
              console.log(tag);
              if ($scope.tagsset.indexOf({text : tag}) <= -1){
              $scope.tagsset.push({text : tag});
              }
              }
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
