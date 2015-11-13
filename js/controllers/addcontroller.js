let AddController = function($scope, ListService, $state) {
  
  $scope.createList = (obj) => {

    ListService.newList(obj).then( (response) => {
      console.log(response);
      $scope.list = {};
      $state.go('root.home');
    });
  };
  
};

AddController.$inject = ['$scope', 'ListService', '$state'];

export default AddController;