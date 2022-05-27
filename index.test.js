// import puppeteer library after its installation
const puppeteer = require("puppeteer");

describe("Test for Jones Automation Task", () => {
  it("Should type in the fields and take a screenshot before submitting the form", async function () {
    // launchs the browser with the given arguments
    const browser = await puppeteer.launch({
      headless: false, // enables to run the test
      slowMo: 5, // how fast will the fields be filled
      devtools: false, // open browser's dev tools or not
    });
    // create a new page in the browser
    const page = await browser.newPage();
    // access the tested url
    await page.goto("http://contractorsinsurancereview.com/ExampleForm/");
    // Enter the values in the fields by selector id
    await page.type("#name", "Igor Marushenko");
    await page.type("#email", "igormarushenko@gmail.com");
    await page.type("#phone", "0522573966");
    await page.type("#company", "Jones");
    // Bonus - change the number of employees from 1-10 to 51-500
    await page.select("#employees", "51-500");
    // take a screenshot - define the name and the type of the screenshot
    await page.screenshot({ path: "screenshot.jpeg", type: "jpeg" });
    // click the button by finding the html tag
    await page.click("button");
    // logs a message for a single page load event after clicking the button
    page.once("load", () =>
      console.log('You have reached to the "thank you" page!')
    );
    // refer to the next page
    await page.waitForNavigation();
    // closes all the browser's pages
    await browser.close();
  });
});
