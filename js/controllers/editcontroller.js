let EditController = function($scope, $stateParams, ListService, $state) {

  let itemId = $stateParams.itemId;
  
  ListService.getItem(itemId).then( (response) => {
    $scope.item = response.data;
  });

  $scope.updateItem = function (item) {
    ListService.updateListItem(item).then( (response) => {
      console.log(response);
      $state.go('root.home');
    });
  };

};

EditController.$inject = ['$scope', '$stateParams', 'ListService', '$state'];

export default EditController; 