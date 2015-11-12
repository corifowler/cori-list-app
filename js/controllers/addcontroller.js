let AddController = function($scope, ListService) {
  
  $scope.createList = (obj) => {

    ListService.newList(obj).then( (response) => {
      console.log(response);
      $scope.list = {};
    });
  };
  
};

AddController.$inject = ['$scope', 'ListService'];

export default AddController;