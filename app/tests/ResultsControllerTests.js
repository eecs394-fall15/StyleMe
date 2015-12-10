describe('ResultsControllerTests', function() {
  beforeEach(module('supersonic'));
  beforeEach(module('example'));

  var resultsControllerMock;
  var $scope, rootScope, $timeout, deferred, controller,q, createController;
  var ParseServiceMock;
  var resultsMock = [{ 'likes': 10, 'dislikes': 15, 'title': 'How is this for a Business Casual?', 'photo':'http://parse-cdn/img1'},
                      { 'likes': 20, 'dislikes': 5, 'title': 'How is this for a Halloween Party?', 'photo':'http://parse-cdn/img2'}
                       ];
                      // {'likes': 20, 'dislikes': 5, 'title': 'How is this for a Halloween Party?', 
                      // 'newimage': {url: function(){return "http://parse-cdn/img2";}}, get: function(name){}}];

  beforeEach(function (){
    inject(function($rootScope, $controller, $q, _ParseService_){
    q = $q;
    controller = $controller;
    ParseServiceMock = _ParseService_;
    rootScope = $rootScope;
    $rootScope.currentUser = {};
    $rootScope.currentUser.id = 1;
    $scope=$rootScope.$new();
   
  // Faking Parse Service 
  spyOn(ParseServiceMock, 'find').and.callFake(function() {
          deferred = $q.defer();
        return deferred.promise;
    });

     //Creating Results Controller with fake Parse Service as DI
     createController = function()
    { 
      return $controller('ResultsController', {
      $scope: $scope,
      $rootScope: $rootScope,
      'ParseService': ParseServiceMock
      });
    }
 })
});


   describe('Retrieve images for a user', function() {
    it('should retrieve list of images for currentUser', function() {
     
      var controller = createController();
      deferred.resolve(resultsMock);
       $scope.$digest();
      expect($scope.resultImages.length).toEqual(2);
      expect($scope.resultImages[0].title).toEqual('How is this for a Business Casual?');
      expect($scope.resultImages[0].likes).toEqual(10);
      expect($scope.resultImages[0].dislikes).toEqual(15);
      expect($scope.resultImages[0].photo).toEqual("http://parse-cdn/img1");
      expect($scope.resultImages[1].title).toEqual('How is this for a Halloween Party?');
      expect($scope.resultImages[1].likes).toEqual(20);
      expect($scope.resultImages[1].dislikes).toEqual(5);
      expect($scope.resultImages[1].photo).toEqual("http://parse-cdn/img2");
    });

     it('should refresh new images for the currentUser', function() {
       createController();
      resultsMock.push(
          { 'likes': 30, 'dislikes': 1, 'title': 'How is this for a First Date?', 'photo':'http://parse-cdn/img3'});
        
      expect(resultsMock.length).toEqual(3);
      
      $scope.refresh();
      deferred.resolve(resultsMock);
      $scope.$digest();

      expect($scope.resultImages.length).toEqual(3);
      expect($scope.resultImages[2].title).toEqual('How is this for a First Date?');
      expect($scope.resultImages[2].likes).toEqual(30);
      expect($scope.resultImages[2].dislikes).toEqual(1);
      expect($scope.resultImages[2].photo).toEqual("http://parse-cdn/img3");
     
  });

      it('should refresh new images for the currentUser returns 500 Error from Parse', function() {     
       createController();
      
       $scope.refresh();
       deferred.reject("500 internal server error from Parse");
       $scope.$digest();
       
      expect($scope.resultImages.length).toEqual(0);
      expect($scope.error).toEqual("500 internal server error from Parse");
     
  });
});
});