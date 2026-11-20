import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AlertWindowPage } from '../../pages/Aler-Window';
test.describe('Login Page Core Functionality', () => {
    test('StaticTables Testing', { "tag": ["@Regression", '@UI'] }, async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login(process.env.APP_EMAIL!, process.env.APP_PASSWORD!);
        await expect(page).not.toHaveURL(/Login/);
        const AlertWindow = new AlertWindowPage(page)
        await AlertWindow.tableGoto();
        await AlertWindow.simpleAlertTesting();
         await AlertWindow.promptAlertTesting();
         await AlertWindow.confirumationAlertTesting();
         await AlertWindow.SuccessMessageTesting();
         await AlertWindow.errorMessageTesting();
         await AlertWindow.confirumationPopupTesting();
         await AlertWindow.NewTabTesting();


    });
    });