let ListService = function($http, PARSE, $state) {
  
  let url = PARSE.URL + 'classes/lists/';
  
  let itemsUrl = PARSE.URL + 'classes/items'; 

  this.getSingleList = function (id) {
    return $http({
      url: url + id,
      headers: PARSE.CONFIG.headers,
      method: 'GET'
    });
  };

  this.getListItems = function () {
    return $http({
      url: itemsUrl,
      headers: PARSE.CONFIG.headers,
      method: 'GET'
    });
  };


  this.addListItems = function (item) {
    return $http.post(itemsUrl, item, PARSE.CONFIG);
  };

  

};

ListService.$inject = ['$http', 'PARSE', '$state'];

export default ListService;