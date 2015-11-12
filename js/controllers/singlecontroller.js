let SingleController = function($scope, $stateParams, $http, PARSE) {

  let id = $stateParams.listId;

  let url = PARSE.URL + 'classes/lists/' + id;
  let itemsUrl = PARSE.URL + 'classes/items';

  $http.get(url, PARSE.CONFIG).then( (response) => {

    $scope.singleList = response.data;

  });

  $http.get(itemsUrl, PARSE.CONFIG).then( (resp) => {

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

    $http.post(itemsUrl, item, PARSE.CONFIG).then( (response) => {
      $scope.item = {};
    });
  };
  
};

SingleController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default SingleController;