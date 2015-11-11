let HomeController = function($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/lists';
  
  $http.get(url, PARSE.CONFIG).then( (response) => {
    $scope.lists = response.data.results;
  });


};

HomeController.$inject = ['$scope', '$http', 'PARSE'];

export default HomeController;