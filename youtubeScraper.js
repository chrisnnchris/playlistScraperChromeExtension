console.log("This should output in the main window");
var youtubeSongs = document.getElementsByClassName("ytd-playlist-video-list-renderer");
var totalSongs = document.getElementById("stats");
console.log(youtubeSongs);
//console.log("This is total songs");
//console.log(totalSongs.children[0].innerHTML);

// grabbing the total number of songs
var totalSongsString = totalSongs.children[0].innerHTML;
var totalSongNumber = 0;
for (i = 0; i < totalSongsString.length; i++) {
  //console.log(totalSongsString[i]);
  if (totalSongsString[i] === " ") {
    //console.log("parseTime");
    //console.log(totalSongsString.substring(0, i));
    totalSongNumber = parseInt(totalSongsString.substring(0, i));
  }

}
console.log("This is totalSongNumber: " + totalSongNumber);

var youtubeSongsArr = [];

// for loop that iterates to number of songs
for (i = 1; i <= 80 ; i++) { // replace 80 with totalSongNumber
  console.log("i: " + i);
  console.log(youtubeSongs[i].children[2].children[0].children[1].children[0].children[1].innerHTML);
  youtubeSongsArr.push(youtubeSongs[i].children[2].children[0].children[1].children[0].children[1].innerHTML);
  // zoom at the 80th mark
}

//console.log("This is youtubeSongsArr");
//console.log(youtubeSongsArr);

//console.log("outputting song titles without spaces");
for (i = 0; i < youtubeSongsArr.length; i++) {
  youtubeSongsArr[i] = youtubeSongsArr[i].substring(17, youtubeSongsArr[i].length - 15);
  //console.log(youtubeSongsArr[i].substring(17, youtubeSongsArr[i].length - 15));

}

console.log("This is youtubeSongsArr after adjustment");
console.log(youtubeSongsArr);


//'↵                ' // first part, 17
//'↵              ' // second part , 15
