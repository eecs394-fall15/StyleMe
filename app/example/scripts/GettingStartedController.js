angular
.module('example')
.controller('GettingStartedController', ['$scope', 'supersonic', 
  function($scope, supersonic) {
    var uid = '4c9ad587-f03e-4096-ba27-affa8bf45baf';
    $scope.isLoading = true;
    $scope.Images = [];
    $scope.noMoreImages =false;
    var imageindex = 0;
    $scope.currentImg = "YO";
    var CustClass = Parse.Object.extend("newimg");
    var query = new Parse.Query(CustClass);
    query.notEqualTo("userid", uid); // If your finding any lags remove this line, though I dont know why this would slow down the app.
    query.find({
     success: function(results) {
           supersonic.logger.log(results.length);
           if(results.length)
      {// Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        $scope.Images.push(object);
      }
      var obj = $scope.Images[imageindex];
      var img = obj.get('newimage');
      $scope.currentImg = img.url();
      $scope.currentTitle = obj.get('title');
      $scope.isLoading = false;
    }
  
    else
    {     
      $scope.isLoading = false;
      $scope.noMoreImages = true;
              var options = {
                     message: "No images for now! :(",
                     buttonLabel: "Close"
                    };
              supersonic.ui.dialog.alert("Oops!", options).then(function() {
                 supersonic.logger.log("Alert closed.");
               });
    }          
      },
     error: function(error) {
      supersonic.ui.dialog.alert('ABANDON SHIP!!');
    }
  });
     // $scope.swipeArray = backendArray;
     // $scope.isLoading = true;
     // $scope.swipeArray.$loaded().then
     //        (function(data){
     //         $scope.noMoreImages = false;
     //         $scope.isLoading = false;
     //         $scope.cardIndex = 0;
     //         });
     
     // var animate = function(action){
     //      var options = {duration: .4}
     //      supersonic.logger.log(action);
     //      supersonic.ui.animate(action, options).perform();
     // }
     
     $scope.swipeLeft = function(){
          var image = $scope.Images[imageindex];
          image.increment("dislikes");
          image.save();
          if(imageindex < $scope.Images.length - 1){
          imageindex = imageindex + 1;
          var obj = $scope.Images[imageindex];
          var img = obj.get('newimage');
          $scope.currentImg = img.url();
          $scope.currentTitle = obj.get('title');
          //Animate                       
          var options = {duration:.4}
          supersonic.ui.animate("slideFromRight",options).perform();
          }
          // $('button').class('')
        else{
              
        }
     }
                                         
     $scope.swipeRight = function(){
          var image = $scope.Images[imageindex];
          image.increment("likes");
          image.save();
          if(imageindex < $scope.Images.length - 1){
          imageindex = imageindex + 1;
          var obj = $scope.Images[imageindex];
          var img = obj.get('newimage');
          $scope.currentImg = img.url();
          $scope.currentTitle = obj.get('title');
          //Animate
          var options = {duration:.4}
          supersonic.ui.animate("slideFromLeft",options).perform();
                                         }
         else{
                $scope.noMoreImages = true;
                var options = {
                     message: "No more images for now! :(",
                     buttonLabel: "Close"
                  };
              supersonic.ui.dialog.alert("Oops!", options).then(function() {
                  supersonic.logger.log("Alert closed.");
              });
        }
     }
                                         
      $scope.refreshFeed = function() {
            query.find({
                success: function(results) {
                supersonic.logger.log("Sucess");
                // Do something with the returned Parse.Object values
                if(imageindex < results.length - 1){
                 $scope.noMoreImages = false;
                 imageindex = imageindex + 1;
                  for (var i = imageindex; i < results.length; i++) {
                       var object = results[i];
                       $scope.Images.push(object);
                        }
                        var obj = $scope.Images[imageindex];
                        var img = obj.get('newimage');
                        $scope.currentImg = img.url();
                        $scope.currentTitle = obj.get('title');  
                       }
                  else{ var options = {
                          message: "Try after sometime!",
                          buttonLabel: "Close"
                         };
                        supersonic.ui.dialog.alert("Sorry!", options).then(function() {
                           supersonic.logger.log("Alert closed.");
                            });
                       }
                    },
                  error: function(error) {
                  supersonic.ui.dialog.alert('ABANDON SHIP!!');
                }
          });   
     }
     }]);
