import { test as Base,expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
type MyFixtures={
    loginpage:LoginPage
}
export const test=Base.extend<MyFixtures>({
    loginpage:async({page},use)=>{
        const loginpageinstance=new LoginPage(page)
        await use(loginpageinstance)

     try {
        await loginpageinstance.logout()
        
     } catch (e) {
        console.warn('Auto-logout skipped:', (e as Error).message);

        
     }

    }

}
    

);
export {expect};