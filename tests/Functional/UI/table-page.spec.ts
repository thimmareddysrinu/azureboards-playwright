import { test, expect } from '@playwright/test';

import {TablePage} from '../../pages/Statictable'
import {DynamicTablePage} from '../../pages/DynamicTable'
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login Page Core Functionality', () => {
  test('StaticTables Testing',{"tag":["@Regression",'@UI'] }, async ({ page }) => {

  const login = new LoginPage(page);
  await login.goto();
  await login.login(process.env.APP_EMAIL!, process.env.APP_PASSWORD!);
  await expect(page).not.toHaveURL(/Login/);
  const table = new TablePage(page);
  await table.tableGoto();
  const headers=await table.tableHeaderscheck()
  const tabledata=await table.tableDatacheck()
  console.log("Data are : ",tabledata)

  
  });
  test('DynamicTables Testing',{"tag":["@Regression",'@UI'] }, async ({ page }) => {

  const login = new LoginPage(page);
  await login.goto();
  await login.login(process.env.APP_EMAIL!, process.env.APP_PASSWORD!);
  await expect(page).not.toHaveURL(/Login/);
  const table = new DynamicTablePage(page);
  await table.tableGoto();
  const headers=await table.dynamicTableHeadersCheck()
  const tabledata=await table.dynamicTableDataCheck()
  console.log("Data are:",tabledata.length)
  
  });





 





  
  
})