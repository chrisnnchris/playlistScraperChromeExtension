var scrapersFunctions =
{
  googlePlayScrape : function ()
    {
      console.log("This googlePlayScrape message will appear in popup's console.");

      chrome.tabs.executeScript({
        code: "console.log('We got executeScript for googlePlayScrape and this appears in original tab')"
      });

      chrome.tabs.executeScript({
        file: "GooglePlayScraper.js"
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

    },
  youtubeScrape: function () {
    console.log("About to youtubeScrape");

    chrome.tabs.executeScript({
      code: "console.log('We got executeScript for youtubeScrape and this appears in original tab')"
    });

    chrome.tabs.executeScript({
      file: "YoutubeScraper.js"
    });

  }
}
