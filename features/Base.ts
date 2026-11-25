import { test as Base, expect } from '@playwright/test'
import { LoginAccountPage } from '../pages/Accounts/LoginPage'
type MyFixtures = {
    loginpage: LoginAccountPage;
    loginIfRequired: (user: string, password: string) => Promise<void>
}
export const test = Base.extend<MyFixtures>({
    loginpage: async ({ page }, use) => {
        const loginpageinstance = new LoginAccountPage(page)
        await use(loginpageinstance)
    },


    loginIfRequired: async ({ page, loginpage }, use) => {
        let didlogin = false;
        await use(async (user?: string, password?: string) => {
            if (/login/i.test(page.url())) {
                await loginpage.login(user ?? process.env.APP_EMAIL!,
                    password ?? process.env.APP_PASSWORD!)
                didlogin = true;
            }

        })
        if (didlogin) {
            try {
                await loginpage.logout()

            } catch (e) {
                console.warn('Auto-logout skipped:', (e as Error).message);

            }
        }

    },




}




);
export { expect };