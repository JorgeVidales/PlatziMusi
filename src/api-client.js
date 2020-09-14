const URL =
  'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=238dab528eed8ea4b5004b56a474f836&format=json';

function getArtists() {
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist =>{
        return {
          id: artist.mbid,
          name: artist.name,
          image: artist.image[3]['#text'],
          comments: '13',
          likes: '3'
        }
    }))
}

// const URL =
//   'https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=238dab528eed8ea4b5004b56a474f836&format=json';

// function getArtists() {
//   return fetch(URL)
//     .then(response => response.json())
//     .then(data => data.topalbums.album)

//     // .then(data =>{
//     //     console.warn('datos', data)
//     // })
    
//     .then(artists => artists.map(album =>{
//         return {
//           id: album.mbid,
//           name: album.name,
//           image: album.image[3]['#text'],
//           comments: '12',
//           likes: '1',
          
//         }
//     }))
    
// }
export {getArtists}
