var tracklist = document.getElementsByClassName("tracklist");
//console.log(tracklist);
//console.log(tracklist[0].children[0].children[0].children[1].children[0].children[0].innerText); // song title
//console.log(tracklist[0].children[0].children[0].children[1].children[0].children[1]); // artist title
console.log("This is artist + album length " + tracklist[0].children[0].children[0].children[1].children[0].children[1].children.length); // artist title
console.log("For loop going through the tracklist element");
var spotifySongScrapArray = [];
//console.log(tracklist[0]);
for (a = 0; a < tracklist[0].children.length; a++) {
  //console.log(tracklist[0].children[a].children[0].children[1].children[0].children[0].innerText);
  var songTitleToAdd = "\"" + tracklist[0].children[a].children[0].children[1].children[0].children[0].innerText + "\"";
  console.log("This is the song title to add: " + songTitleToAdd);
  console.log("This is the set of artists and albums");
  console.log(tracklist[0].children[a].children[0].children[1].children[0].children[1]);
  console.log("This is the set's length " + tracklist[0].children[a].children[0].children[1].children[0].children[1].children.length);
  var songArtistToAdd = "";
  var songAlbumToAdd = "";
  for (b = 0; b < tracklist[0].children[a].children[0].children[1].children[0].children[1].children.length; b++) {
    var trackListItr = tracklist[0].children[a].children[0].children[1].children[0].children[1].children[b];
    console.log("This is trackListItr");
    console.log(trackListItr);
    console.log("This is the trackListItr's classname " + trackListItr.className);
    if (trackListItr.className == "explicit-label") {
      console.log("We got some bad words");
    } else if (trackListItr.className == "second-line-separator") {
      console.log("line separator");
    } else if (trackListItr.className == "react-contextmenu-wrapper") {
      console.log("We got the album set");
      console.log(trackListItr.children[0].innerText);
      songAlbumToAdd += trackListItr.children[0].innerText;
    } else {
      console.log("This is supposed to be artist");
      console.log(trackListItr.children[0].children[0].innerText);
      if (songArtistToAdd != "") {
        songArtistToAdd += ", ";
      }
      songArtistToAdd += trackListItr.children[0].innerText;
    }
  }
  songArtistToAdd = "\"" + songArtistToAdd + "\"";
  songAlbumToAdd = "\"" + songAlbumToAdd + "\""
  console.log("This is the songTitleToAdd " + songTitleToAdd);
  console.log("This is the songArtistToAdd " + songArtistToAdd);
  console.log("This is the songAlbumToAdd " + songAlbumToAdd);
  spotifySongScrapArray.push(songTitleToAdd + "," + songArtistToAdd +","+ songAlbumToAdd);
}
console.log(spotifySongScrapArray);
/*
for (i = 0; i < tracklist[0].children[0].children[0].children[1].children[0].children[1].children.length; i++) {
  console.log(tracklist[0].children[0].children[0].children[1].children[0].children[1].children[i]);
  var trackListItr = tracklist[0].children[0].children[0].children[1].children[0].children[1].children[i];
  //console.log(trackListItr.className);
  if (i == 0) {
    songArtistToAdd = "";
    songAlbumToAdd = "";
  }
  if (trackListItr.className == "explicit-label") {
    console.log("We got some bad words");
  } else if (trackListItr.className == "second-line-separator") {
    console.log("line separator");
  } else if (trackListItr.className == "react-contextmenu-wrapper") {
    console.log("We got the album set");
    console.log(trackListItr.children[0].innerText);
    songAlbumToAdd += trackListItr.children[0].innerText;
  } else {
    console.log("This is supposed to be artist");
    console.log(trackListItr.children[0].children[0].innerText);
    if (songArtistToAdd != "") {
      songArtistToAdd += ", ";
    }
    songArtistToAdd += trackListItr.children[0].innerText;
  }
  console.log("This is the songArtistToAdd " + songArtistToAdd);
  console.log("This is the songAlbumToAdd " + songAlbumToAdd);
}
*/
//console.log(tracklist[0].children.length); //  this holds the for-loop to go over all songs
