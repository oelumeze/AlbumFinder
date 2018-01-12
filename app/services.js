

angular.module('myApp.service', [])

.service('iTunesService', ['$q', '$http', function ($q, $http) {

    const BASE_URL = 'https://itunes.apple.com'
    // const BASE_URL = 'https://itunes.apple.com/search?entity=album&term=ARTIST_NAME'
    return {

        //base URL for the Itunes API
         
        //get all albums by artist name
        getArtistAlbum : (_artistName) => {
            return $q((resolve, reject) => {
                $http.get(BASE_URL+'/search?entity=album&term='+_artistName)
                    .then((_response) => {
                        console.log("returned response", _response)
                        resolve(_response)
                    }, (_error) =>  {
                        console.log("an error occured", _error)
                        reject(_error)
                    })
            })
        }
    }    

}])