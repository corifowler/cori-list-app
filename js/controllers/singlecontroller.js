let SingleController = function($scope, $stateParams, ListService, $state) {

  let id = $stateParams.listId;

  ListService.getSingleList(id).then( (response) => {
    $scope.singleList = response.data;
  });

  ListService.getListItems().then( (resp) => {

    $scope.allListItems = resp.data.results;

    $scope.matchListItems = [];    

    angular.forEach($scope.allListItems, function(items) {
      if (items.list.objectId === id) {
        $scope.matchListItems.push(items);        
        console.log($scope.matchListItems);
      }
    });
  });

  $scope.delete = function (items) {
    console.log(items);
    ListService.deleteListItem(items).then( (response) => {
      console.log(response);
      $state.reload();
    });
  };

  $scope.addListItems = (item) => {

    item = { 
      name: item.name,
      list: {
        __type: 'Pointer',
        className: 'lists',
        objectId: id
      }
    };

    ListService.addListItems(item).then( (response) => {
      $scope.item = {};
      $state.reload();
    });
  };
   
};

SingleController.$inject = ['$scope', '$stateParams', 'ListService', '$state'];

export default SingleController;