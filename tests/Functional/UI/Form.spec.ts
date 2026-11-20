import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { FormPage } from '../../../pages/form';
test.describe('Login Page Core Functionality', () => {
    test('StaticTables Testing', { "tag": ["@Regression", '@UI'] }, async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login(process.env.APP_EMAIL!, process.env.APP_PASSWORD!);
        await expect(page).not.toHaveURL(/Login/);
        const form = new FormPage(page)
        await form.tableGoto();
        await form.formfill()
       


    });
    });