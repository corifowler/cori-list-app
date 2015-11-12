let ListService = function($http, PARSE, $state) {
  
  let url = PARSE.URL + 'classes/lists/';

  let itemsUrl = PARSE.URL + 'classes/items';

  this.getLists = function () {
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET'
    });
  };

  let List = function (obj) {
    this.title = obj.title;
    this.description = obj.description;
    this.creator = obj.creator;
  };

  this.newList = function (obj) {
    let l = new List(obj);

    return $http.post(url, l, PARSE.CONFIG);
  };

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

  this.getItem = function (itemId) {
    return $http({
      url: itemsUrl + '/' + itemId,
      headers: PARSE.CONFIG.headers,
      method: 'GET'
    });
  };

  this.updateListItem = function (item) {
    return $http.put(itemsUrl + '/' + item.objectId, item, PARSE.CONFIG);
  };

  this.addListItems = function (item) {
    return $http.post(itemsUrl, item, PARSE.CONFIG);
  };

  

};

ListService.$inject = ['$http', 'PARSE', '$state'];

export default ListService;