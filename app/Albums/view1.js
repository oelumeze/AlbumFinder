'use strict';

angular.module('myApp.Albums', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/albums', {
    templateUrl: 'Albums/view1.html',
    controller: 'AlbumsController'
  });
}])

.controller('AlbumsController', ['iTunesService', '$scope', function(iTunesService, $scope) {

  $scope.artistName = "";
  $scope.albums = null;
  $scope.relevance = "random";

  /** find all albums for a given artist */
  $scope.findAlbum = () => {
    console.log("find albums")
    getAllAlbums($scope.artistName, null)
  }

  $scope.getByRelevance = (relevance) => {
    console.log("get by relevance", relevance)
    getAllAlbums($scope.artistName, relevance)
  }

  /**
   * get all albums for an artist by its release date
   * @param {String} artistName - the artist name
   */
  function getAllAlbums(_artistName, _byRelevance) {
      let albumResult = {}

      iTunesService.getArtistAlbum(_artistName)
        .then((_response) => { 
          albumResult = Object.assign({}, _response.data);
          sortByDate(albumResult.results, _byRelevance);  //sort 
          $scope.albums = albumResult;
          
        })
  }

  /**
   * sort all returned albums by its release dateA
   * @param {String} relevance - relevance term, either newest or oldest
   * @param {Array} _albumObject - the returned albums
   */
  function sortByDate(_albumObject, relevance){
    _albumObject.sort(function compare(a, b) {
        let dateA = new Date(a.releaseDate)
        let dateB = new Date(b.releaseDate)
        
        //return albums based on relevance term
       let sortOrder = relevance === 'oldest' ? dateA - dateB : relevance === 'newest' ? dateB - dateA : -1;
       return sortOrder
    })
  }

  
   
}]);