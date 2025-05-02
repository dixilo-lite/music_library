const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

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
                  },
       printPlayLists: function() {
              let playlistKeys=Object.keys(this.playlists);
              let playList=[];
              for(const playlist of playlistKeys)
              {
                     playList.push(`${this.playlists[playlist].id} : ${this.playlists[playlist].name} - ${this.playlists[playlist].tracks.length}`);
              }
              return playList;
       },
       printTracks: function(){
              let trackKeys=Object.keys(this.tracks);
              let trackList=[];
              for (const track of trackKeys)
              {
                     trackList.push(`${this.tracks[track].id}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`);
              }
              return trackList;
       },
       printPlaylist:function(playlistId){
       let playList=[];
       let id=this.playlists[playlistId].id;
       let name= this.playlists[playlistId].name;
       let tracks= this.playlists[playlistId].tracks;
       playList.push(`${id} : ${name} - ${tracks.length}`);
       for(const track of tracks){
       playList.push(`${this.tracks[track].id}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`);
       }
       return playList;
       },
       addTrackToPlaylist:function(trackId,playlistId){
              this.playlists[playlistId].tracks.push(trackId);
       },
       addTrack:function(name, artist, album){
              newID=generateUid();
              this.tracks[newID]={
                     id:newID,
                     name:name,
                     artist:artist,
                     album:album
              }
              console.log(this.tracks);
       },
       addPlaylist:function(name){
              newID=generateUid();
              this.playlists[newID]={
                     id:newID,
                     name:name
              }
              console.log(this.playlists);
       }
  
     };
console.log(library.addPlaylist("hehe3"));
/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)

// adds a playlist to the library
const addPlaylist = function(name,object) {
       newID=generateUid();
       object.playlists[newID] ={
              id:newID,
              name:name,
       }
}
addPlaylist("test name",library)
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}
