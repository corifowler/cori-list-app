let HomeController = function($scope, ListService) {

  ListService.getLists().then( (response) => {
    $scope.lists = response.data.results;
  });

};

HomeController.$inject = ['$scope', 'ListService'];

export default HomeController;