const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // defaultCommandTimeout: 4000,
  // viewportHeight: 900,
  
  e2e: {
    defaultCommandTimeout:8000,
    baseUrl: "https://www.saucedemo.com/",
    screenshotOnRunFailure: false,
    // viewportWidth: 1000,
    // viewportHeight: 600,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if(browser.name === "chrome"){
          launchOptions.args.push(
            "--incognito"
          );
          //  launchOptions.args.push('--force-device-scale-factor=2')
          // launchOptions.args.push('--start-fullscreen');
          // launchOptions.args.push('--user-data-dir=C:/Users/clacc/AppData/Local/Google/Chrome/User Data/Profile')
        }

        return launchOptions;
      })
    },
  },
});
