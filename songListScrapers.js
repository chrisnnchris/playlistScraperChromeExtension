var googlePlaySongs = document.getElementsByClassName("song-table")[0].children[1];
var songTableLength = googlePlaySongs.getAttribute("data-count");
console.log(googlePlaySongs);
console.log("This is songTableLength " + songTableLength); // works, but NOT TESTED ABOVE 50 songs
var songScrapArray = [];
songScrapArray.push("Song Title,Artist Title,Album Title");
songTableIterator = googlePlaySongs.firstElementChild;
songTableIterator = songTableIterator.nextElementSibling;
console.log("This is first item in playlist");
console.log(songTableIterator);

songTableCounter = 0;
var scraperFunction = setInterval(function() { scraperAndScroller() }, 400);
function scraperAndScroller() {
  var topElement = document.getElementById("imageWrapper");
  console.log("This is the song table iterator");
  console.log(songTableIterator);
  console.log("This is the songTableIterator song title: " + songTableIterator.childNodes[1].childNodes[1].innerText);
  console.log("This is the songTableIterator artist title: " + songTableIterator.childNodes[3].childNodes[0].childNodes[0].innerText);
  console.log("This is the songTabelIterator album title: " + songTableIterator.childNodes[4].childNodes[0].childNodes[0].innerText);
  console.log("This is the songTableCounter " + songTableCounter);
  songTableCounter++;
  var songTitleToAdd = "\"" + songTableIterator.childNodes[1].childNodes[1].innerText + "\"";
  //songTitleToAdd = songTitleToAdd.replace(/,/g,"\",\"");
  var songArtistToAdd = "\"" +  songTableIterator.childNodes[3].childNodes[0].childNodes[0].innerText  + "\"";
  var songAlbumToAdd = "\"" +  songTableIterator.childNodes[4].childNodes[0].childNodes[0].innerText  + "\"";
  songScrapArray.push(songTitleToAdd + "," + songArtistToAdd +","+ songAlbumToAdd);
  songTableIterator = songTableIterator.nextElementSibling;
  songTableIterator.scrollIntoView();
  if (songTableCounter == songTableLength) {
    clearInterval(scraperFunction);
    console.log("This is the songScrapArray");
    console.log(songScrapArray);
    // Following is test

    var csvString = songScrapArray.join("\n");
    console.log("This is the CSV string");
    console.log(csvString);
    var encodedCSVString = encodeURI(csvString);
    console.log(encodedCSVString);
    topElement.scrollIntoView();

    var a         = document.createElement('a');
    a.href        = 'data:attachment/csv,' + encodedCSVString;
    a.target      = '_blank';
    a.download    = 'myFile.csv';

    document.body.appendChild(a);
    a.click();

  }
}

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
//var delayInMilliseconds = 1000;
//document.getElementById("mainPanel").scrollIntoView();
/*
      setTimeout(function() {
      }, delayInMilliseconds)
*/

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
