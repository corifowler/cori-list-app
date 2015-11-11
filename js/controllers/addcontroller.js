let AddController = function($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/lists';

  let List = function(obj) {
    this.title = obj.title;
    this.description = obj.description;
    this.creator = obj.creator;
  };

  $scope.createList = (obj) => {

    let l = new List(obj);

    $http.post(url, l, PARSE.CONFIG).then( (response) => {
      console.log(response);
      $scope.list = {};
    });

    console.log(l);

    return l;

  };

};

AddController.$inject = ['$scope', '$http', 'PARSE'];

export default AddController;