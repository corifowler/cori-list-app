let AddController = function($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/lists';

  let List = function(obj) {
    this.title = obj.title;
    this.description = obj.description;
  };

  $scope.createList = (obj) => {

    let l = new List(obj);

    $http.post(url, l, PARSE.CONFIG).then( (response) => {
      console.log(response);
      $scope.list = {};
    });

  };

};

AddController.$inject = ['$scope', '$http', 'PARSE'];

export default AddController;