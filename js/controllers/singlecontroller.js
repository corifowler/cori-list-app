let SingleController = function($scope, $stateParams, ListService) {

  let id = $stateParams.listId;

  ListService.getSingleList(id).then( (response) => {
    $scope.singleList = response.data;
  });

  ListService.getListItems().then( (resp) => {

    // Gets all list items, need to narrow down to specific list
    $scope.allListItems = resp.data.results;

    $scope.matchListItems = [];    

    angular.forEach($scope.allListItems, function(items) {
      if (items.list.objectId === id) {
        $scope.matchListItems.push(items);        
        console.log($scope.matchListItems);
      }
    });
  });


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
    });
  };
  
};

SingleController.$inject = ['$scope', '$stateParams', 'ListService'];

export default SingleController;