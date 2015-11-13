let CommentController = function($scope, $stateParams, ListService, $state) {

  let id = $stateParams.listId;

  ListService.getComments().then( (response) => {
    $scope.allComments = response.data.results;

    $scope.comments = [];

    angular.forEach($scope.allComments, function(comments) {
      if (comments.list.objectId === id) {
        $scope.comments.push(comments);
        console.log($scope.comments);
      }
    });
  });


  $scope.addComment = (comment) => {

    comment = {
      author: comment.author,
      comment: comment.comment,
      list: {
        __type: 'Pointer',
        className: 'lists',
        objectId: id
      }
    };

    ListService.addComment(comment).then( (response) => {
      console.log(response);
      $state.reload();
    });

  };

  

};

CommentController.$inject = ['$scope', '$stateParams', 'ListService', '$state'];

export default CommentController;