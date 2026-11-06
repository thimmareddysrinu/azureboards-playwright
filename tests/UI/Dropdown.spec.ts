import { test, expect } from '@playwright/test';


import { LoginPage } from '../../pages/LoginPage';
import { DropdownPage } from '../../pages/DropDown'
test.describe('Login Page Core Functionality', () => {
    test('StaticTables Testing', { "tag": ["@Regression", '@UI'] }, async ({ page }) => {

        const login = new LoginPage(page);
        await login.goto();
        await login.login(process.env.APP_EMAIL!, process.env.APP_PASSWORD!);
        await expect(page).not.toHaveURL(/Login/);
        const dropdown = new DropdownPage(page)

        await dropdown.tableGoto();
        await dropdown.singleDropdownsTesting();
        await dropdown.multiselectDropdownsTesting();


    });














})