let ItemController = function($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/items';

  $scope.addListItems = (item) => {

    console.log(item);

    item = { 
      name: item.name,
      list: {
        __type: 'Pointer',
        className: 'lists',
        objectId: singleList.objectId
      }
    };

    $http.post(url, item, PARSE.CONFIG).then( (response) => {
      console.log(response);
      $scope.item = {};
    });

  };

};

ItemController.$inject = ['$scope, $http, PARSE'];

export default ItemController;