let EditController = function($scope, $stateParams, ListService) {

  let itemId = $stateParams.itemId;
  
  ListService.getItem(itemId).then( (response) => {
    $scope.item = response.data;
  });

  $scope.updateItem = function (item) {
    ListService.updateListItem(item).then( (response) => {
      console.log(response);
    });
  };

};

EditController.$inject = ['$scope', '$stateParams', 'ListService'];

export default EditController; 