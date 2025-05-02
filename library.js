const library = {
       tracks: { t01: { id: "t01",
                        name: "Code Monkey",
                        artist: "Jonathan Coulton",
                        album: "Thing a Week Three" },
                 t02: { id: "t02",
                        name: "Model View Controller",
                        artist: "James Dempsey",
                        album: "WWDC 2003"},
                 t03: { id: "t03",
                        name: "Four Thirty-Three",
                        artist: "John Cage",
                        album: "Woodstock 1952"}
               },
       playlists: { p01: { id: "p01",
                           name: "Coding Music",
                           tracks: ["t01", "t02"]
                         },
                    p02: { id: "p02",
                           name: "Other Playlist",
                           tracks: ["t03"]
                         }
                  }
     };
/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// for ever play list
// store the id, name and track length
const printPlaylists = function(object) {
      let playlistKeys=Object.keys(object.playlists);
    
    for (const playlist of playlistKeys)
    {  
       let id = object.playlists[playlist].id;
       let name = object.playlists[playlist].name;
       let tracks= object.playlists[playlist].tracks;          
       
    }    
}
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(object) {
       let trackKeys=Object.keys(object.tracks)
       {
              for(const tracks of trackKeys )
              {
                     let id=object.tracks[tracks].id;
                     let name= object.tracks[tracks].name;
                     let artist = object.tracks[tracks].artist;
                     let album = object.tracks[tracks].album;
              }
       }
}
printTracks(library);
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId, object) {
       let id = object.playlists[playlistId].id;
       let name = object.playlists[playlistId].name;
       let tracks= object.playlists[playlistId].tracks; 
      
       for(const track of tracks)
       {
              let id=object.tracks[track].id;
              let name= object.tracks[track].name;
              let artist = object.tracks[track].artist;
              let album = object.tracks[track].album;
       }

}


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId,object) {
object.playlists[playlistId].tracks.push(trackId);
}

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album,object) {
newID=generateUid();

object.tracks[`${newID}`] ={
       id:newID,
       name:name,
       artist:artist,
       album:album
}
console.log(library);
}
addTrack("name","art","al",library);

// adds a playlist to the library
const addPlaylist = function(name,object) {
       newID=generateUid();
       object.playlists[newID] ={
              id:newID,
              name:name,
       }
console.log(library);
}
addPlaylist("test name",library)
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}
