var scrapersFunctions =
{
  googlePlayScrape : function ()
    {
      console.log("This googlePlayScrape message will appear in popup's console.");

      chrome.tabs.executeScript({
        code: "console.log('We got executeScript for googlePlayScrape and this appears in original tab')"
      });

      chrome.tabs.executeScript({
        file: "songListScrapers.js"
      });

    },
  spotifyPlayScrape: function()
    {
      console.log("This spotifyPlayScrape message will appear in popup's console.");

      chrome.tabs.executeScript({
        code: "console.log('We got executeScript for spotifyPlayScrape and this appears in original tab')"
      });

      chrome.tabs.executeScript({
        file: "spotifyScraper.js"
      });

    }
}
