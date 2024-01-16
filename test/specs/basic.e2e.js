// describe('Open Wdio Website', () => {
//     it('Proper title is displayed', () => {
//         browser.url('https://webdriver.io/');
//         expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
//     })
// })
const percyScreenshot = require('@percy/webdriverio');
describe('Webdriverio', () =>{
    it('Opening Docs', async ()=>{
        await browser.url('https://webdriver.io/');

        const docs = await $('a=Get Started');
        await docs.click()

        const title = await $('h1');
        await expect (title).toHaveText('Getting Started')

    })
    it('Opening API', async ()=>{
        await browser.url('https://webdriver.io/');
            
        const api = await $('a=Why WebdriverIO?');
        await api.click()

        const title = await $('h1');
        await expect (title).toHaveText("Why Webdriver.IO?");

    })
    
    it('Searching selectors', async ()=>{
        await browser.url('https://webdriver.io/');
            
        const searchClick = await $('span=Search');
        await searchClick.click()

        const search = await $('h1');
        await expect (search).toHaveText("Why Webdriver.IO?");

    }) 
    
    })


