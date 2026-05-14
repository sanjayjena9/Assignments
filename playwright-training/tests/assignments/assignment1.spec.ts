/* Assignment - 1

1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
2.verify application logo is displayed
3.Verify application caption displayed as "Experience the difference"
4.Enter invalid username
5.Enter empty Password
6.Click on login button
7.Verify the error message "Please enter a username and password."
8.Click on admin page link
9.select the option "soap" from dba mode radio button
10.Scroll to element dropdown
11.Select the option web service from the dropdown
12.click on submit button
13.verify submission is successful by validating success message
14.Click on services page link
15.wait for service page
16.Scroll down till bookstore services table
17.get total rows of books store services table
18.get total columns of books store services table
19.Print table data (row wise and column wise data)

*/

import { test, expect } from '@playwright/test';


  test('Assignment1', async ({ page }) => {

    //1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

     //2.verify application logo is displayed
    const isAppLogoVisible = await page.locator('img.logo');
    await expect(isAppLogoVisible).toBeVisible();

    //3.Verify application caption displayed as "Experience the difference"
    await expect(page.getByText('Experience the difference')).toBeVisible();

    //4.Enter invalid username
    await page.locator('input[name="username"]').fill('invalid_user');

    //5.Enter empty Password
    await page.locator('input[name="password"]').fill('');

    //6.Click on login button
    await page.getByRole('button', { name: 'Log In' }).click();
    
    //7.Verify the error message "Please enter a username and password."
    await expect(page.locator('.error')).toContainText('Please enter a username and password.');

    //8.Click on admin page link
    await page.getByRole('link', { name: 'Admin Page' }).click();

    //Check if the admin page is opened or not
    await expect(page).toHaveURL(/admin\.htm/);

    //9.select the option "soap" from data access mode radio button
    await page.locator('#accessMode1').click();

    //10.Scroll to element dropdown
    const loanProvider = page.locator('select#loanProvider');
    await loanProvider.scrollIntoViewIfNeeded();

    //11.Select the option web service from the dropdown
    await loanProvider.selectOption({ label: 'Web Service' });

    //12.click on submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    //13.verify submission is successful by validating success message
    await expect(page.getByText('Settings saved successfully.')).toBeVisible({ timeout: 15_000 });

    //14.Click on services page link
    await page.getByRole('link', { name: 'Services' }).first().click();
    await expect(page).toHaveURL(/services\.htm/);

    //15.wait for service page
    await page.waitForLoadState('domcontentloaded');

    //16.Scroll down till bookstore services table
    const label = page.getByText('Bookstore services:', { exact: false });
    await label.scrollIntoViewIfNeeded();

    const table = label.locator('xpath=following::table[1]');
    await expect(table).toBeVisible();

    const rows = table.locator('tr');

    //17.get total rows of books store services table
    const rowCount = await rows.count();

    //18.get total columns of books store services table
    const colCount = await table.locator('tr').first().locator('th, td').count();

    console.log('Bookstore services table — rows:', rowCount, 'columns:', colCount);

    for (let r = 0; r < rowCount; r++) {
      const cells = rows.nth(r).locator('th, td');
      const n = await cells.count();
      const rowData: string[] = [];
      for (let c = 0; c < n; c++) {
        rowData.push((await cells.nth(c).innerText()).trim());
      }
      console.log(`Row ${r}:`, rowData.join(' | '));
    }
    for (let c = 0; c < colCount; c++) {
      const colData: string[] = [];
      for (let r = 0; r < rowCount; r++) {
        const cell = rows.nth(r).locator('th, td').nth(c);
        colData.push((await cell.innerText()).trim());
      }
      console.log(`Column ${c}:`, colData.join(' | '));
    }
  });


