let SingleController = function($scope, $stateParams, $http, PARSE) {

  let id = $stateParams.listId;

  let url = PARSE.URL + 'classes/lists/' + id;
  let itemsUrl = PARSE.URL + 'classes/items';

  $http.get(url, PARSE.CONFIG).then( (response) => {

    $scope.singleList = response.data;

  });


  $scope.addListItems = (item) => {

    console.log(item);

    item = { 
      name: item.name,
      list: {
        __type: 'Pointer',
        className: 'lists',
        objectId: id
      }
    };

    $http.post(itemsUrl, item, PARSE.CONFIG).then( (response) => {
      console.log(response);
      $scope.item = {};
    });

  };
  
};

SingleController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default SingleController;