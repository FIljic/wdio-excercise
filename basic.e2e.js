// describe('Open Wdio Website', () => {
//     it('Proper title is displayed', () => {
//         browser.url('https://webdriver.io/');
//         expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
//     })
// })

describe('Swag login', () =>{
    it('Login with wrong data', async ()=>{
        await browser.url('https://www.saucedemo.com/');
        
        const inputUser = await $('#user-name');
        await inputUser.setValue('test')

        const inputPassword = await $('#password');
        await inputPassword.setValue('test')

        const loginButton = await $('#login-button');
        await loginButton.click();

        const error = await $('h3');
        await expect (error).toHaveText('Epic sadface: Username and password do not match any user in this service')

    })
    it('Login with right data', async ()=>{
        await browser.url('https://www.saucedemo.com/');
        
        const inputUser = await $('#user-name');
        await inputUser.setValue('standard_user')

        const inputPassword = await $('#password');
        await inputPassword.setValue('secret_sauce')

        const loginButton = await $('#login-button');
        await loginButton.click();

        const header = await $('.app_logo');
        await expect (header).toHaveText('Swag Labs')

    })
    it('Logout', async ()=>{
        await browser.url('https://www.saucedemo.com/inventory.html');
        
        const menu = await $('#react-burger-menu-btn');
        await menu.click();

        const loginButton = await $('a=Logout');
        await loginButton.click();

        const header = await $('.login_logo');
        await expect (header).toHaveText('Swag Labs')

    })
})