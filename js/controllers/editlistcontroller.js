let EditListController = function($scope, $stateParams, ListService, $state) {
  
  let listId = $stateParams.listId; 

  ListService.getSingleList(listId).then( (response) => {
    $scope.list = response.data;
  });

  $scope.updateList = function (list) {
    ListService.updateList(list).then( (response) => {
      console.log(response);
      $state.go('root.home');
    });
  }; 


};

EditListController.$inject = ['$scope', '$stateParams', 'ListService', '$state'];

export default EditListController;