document.addEventListener('DOMContentLoaded', () => {

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.log("This is the url examined: " + url);
    document.getElementById("GooglePlayScraper").disabled = true;
    document.getElementById("SpotifyScraper").disabled = true;
    if (url.includes('https://play.google.com/music/listen') == true || url.includes('http://play.google.com/music/listen') == true) {
      console.log("We have google play music");
      if (url.includes('/pl/') == true) {
        console.log("We also have google play music playlist");
        document.getElementById("GooglePlayVerify").text = "You may scrape Google Play playlist.";
        document.getElementById("GooglePlayScraper").disabled = false;
      }
    }
    if (url.includes('https://open.spotify.com') == true || url.includes('http://open.spotify.com') == true) {
      console.log("We have Spotify");
      if (url.includes('/playlist/') == true) {
        console.log("We also have Spotify playlist");
        document.getElementById("SpotifyVerify").text = "You may scrape Spotify playlist.";
        document.getElementById("SpotifyScraper").disabled = false;
      }
    }
  });

  document.getElementById("GooglePlayScraper").addEventListener('click', () => {
    scrapersFunctions.googlePlayScrape();
  });

  document.getElementById("SpotifyScraper").addEventListener('click', () => {
    scrapersFunctions.spotifyPlayScrape();
  });

  console.log("This log message just goes to popup console, put in a chrome.tabs to get real browser");
});
