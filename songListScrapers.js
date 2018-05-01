//look at songlist-container for google play music
var googlePlaySongs = document.getElementsByClassName("song-table")[0].children[1];
var songTableLength = googlePlaySongs.getAttribute("data-count");
console.log(googlePlaySongs);
console.log("This is songTableLength " + songTableLength); // works, but NOT TESTED ABOVE 50 songs
var songScrapArray = [];
/*
var songTableIterator = googlePlaySongs.firstElementChild;
console.log("This is songTableIterator");
console.log(songTableIterator);
songTableIterator = songTableIterator.nextElementSibling;
console.log("This is songTableIterator after sibling");
console.log(songTableIterator);
console.log("This is supposed to be song title ");
console.log(songTableIterator.childNodes[1].childNodes[1].innerText);
console.log("This is supposed to be artist title ");
console.log(songTableIterator.childNodes[3].childNodes[0].childNodes[0].innerText);
console.log("This is supposed to be album title ");
console.log(songTableIterator.childNodes[4].childNodes[0].childNodes[0].innerText);
*/
songTableIterator = googlePlaySongs.firstElementChild;
songTableIterator = songTableIterator.nextElementSibling;
console.log(songTableIterator);
var delayInMilliseconds = 1000;
//document.getElementById("mainPanel").scrollIntoView();
/*
      setTimeout(function() {
      }, delayInMilliseconds)
*/
  for (i = 0; i < songTableLength - 1; i++) {

    if (i % 10 == 0) {
      console.log("This is the ideal i " + i);

      setTimeout(function() {
        songTableIterator.scrollIntoView({behavior: "smooth"});
      }, 1000)

    }

    console.log(songTableIterator);
    songTableIterator = songTableIterator.nextElementSibling;
    //songScrapArray.push({songTableIterator.childNodes[1].childNodes[1].innerText,songTableIterator.childNodes[3].childNodes[0].childNodes[0].innerText,songTableIterator.childNodes[4].childNodes[0].childNodes[0].innerText});
  }

/*
for (i = 0; i < songTableLength - 1; i++) {
  if (i % 10 == 0) {
    songTableIterator.scrollIntoView({behavior: "smooth"});
  }
  console.log(songTableIterator);
  songTableIterator = songTableIterator.nextElementSibling;
  //songScrapArray.push({songTableIterator.childNodes[1].childNodes[1].innerText,songTableIterator.childNodes[3].childNodes[0].childNodes[0].innerText,songTableIterator.childNodes[4].childNodes[0].childNodes[0].innerText});
}
*/
//console.log(songScrapArray);
/*
var googlePlaySongs = document.getElementsByClassName("song-table")[0].children[1].children[20];
googlePlaySongs.scrollIntoView();
*/
