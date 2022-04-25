import { expect } from '@playwright/test';
import { test } from '../my-test'

const numberOfDigits = 1000000;

test.describe('User registration', () => {
    test('Register new user', async ({ page, user}) =>{
        // Generate random unique username 
        const username = user.username + String(Math.floor(Math.random() * numberOfDigits))
        await page.goto('/');
        // Go to registration page
        await page.locator('text=Register').click();
        // Type in all of the user data into the fields
        await page.locator('[id="customer.firstName"]').type(user.firstName);
        await page.locator('[id="customer.lastName"]').type(user.lastName);
        await page.locator('[id="customer.address.street"]').type(user.address);
        await page.locator('[id="customer.address.city"]').type(user.city);
        await page.locator('[id="customer.address.state"]').type(user.state);
        await page.locator('[id="customer.address.zipCode"]').type(user.zipCode);
        await page.locator('[id="customer.phoneNumber"]').type(user.phoneNumber);
        await page.locator('[id="customer.ssn"]').type(user.SSN);
        // Type in the random username and password 
        await page.locator('[id="customer.username"]').type(username);
        await page.locator('[id="customer.password"]').type(user.password);
        await page.locator('[id="repeatedPassword"]').type(user.password);
        // Register the user
        await page.locator('[class=button] >> text=Register').click();
        // Validate that the user was sucessfully created
        const rightPanel = await page.locator('[id="rightPanel"]')
        await expect(rightPanel.locator('[class="title"]')).toContainText(
            "Welcome " + username
            )
    });
    test('Register new user without phone number', async ({ page, user}) =>{
        // Generate random unique username 
        const username = user.username + String(Math.floor(Math.random() * numberOfDigits))
        await page.goto('/');
        // Go to registration page
        await page.locator('text=Register').click();
        // Type in the user data without phone number into the fields
        await page.locator('[id="customer.firstName"]').type(user.firstName);
        await page.locator('[id="customer.lastName"]').type(user.lastName);
        await page.locator('[id="customer.address.street"]').type(user.address);
        await page.locator('[id="customer.address.city"]').type(user.city);
        await page.locator('[id="customer.address.state"]').type(user.state);
        await page.locator('[id="customer.address.zipCode"]').type(user.zipCode);
        await page.locator('[id="customer.ssn"]').type(user.SSN);
        // Type in the random username and password 
        await page.locator('[id="customer.username"]').type(username);
        await page.locator('[id="customer.password"]').type(user.password);
        await page.locator('[id="repeatedPassword"]').type(user.password);
        // Register the user
        await page.locator('[class=button] >> text=Register').click();
        // Validate that the user was sucessfully created
        const rightPanel = await page.locator('[id="rightPanel"]')
        await expect(rightPanel.locator('[class="title"]')).toContainText(
            "Welcome " + username
            )
    });
});
test.describe('User registration without required fields', () => {
    test('Register new user with no first name', async ({ page, user }) =>{
        // Generate random unique username 
        const username = user.username + String(Math.floor(Math.random() * numberOfDigits))
        await page.goto('/');
        // Go to registration page
        await page.locator('text=Register').click();
        // Type in the user data without first name into the fields
        await page.locator('[id="customer.lastName"]').type(user.lastName);
        await page.locator('[id="customer.address.street"]').type(user.address);
        await page.locator('[id="customer.address.city"]').type(user.city);
        await page.locator('[id="customer.address.state"]').type(user.state);
        await page.locator('[id="customer.address.zipCode"]').type(user.zipCode);
        await page.locator('[id="customer.phoneNumber"]').type(user.phoneNumber);
        await page.locator('[id="customer.ssn"]').type(user.SSN);
        // Type in the random username and password 
        await page.locator('[id="customer.username"]').type(username);
        await page.locator('[id="customer.password"]').type(user.password);
        await page.locator('[id="repeatedPassword"]').type(user.password);
        // Register the user
        await page.locator('[class=button] >> text=Register').click()
        // Validate that the error about missing first name appears
        const firstNameError = await page.locator('[id="customer.firstName.errors"]')
        await expect(firstNameError).toContainText('First name is required.')
    });
    test('Register new user with no  last name', async ({ page, user }) =>{
        // Generate random unique username 
        const username = user.username + String(Math.floor(Math.random() * numberOfDigits))
        await page.goto('/');
        // Go to registration page
        await page.locator('text=Register').click();
        // Type in the user data without lastn name into the fields
        await page.locator('[id="customer.firstName"]').type(user.firstName);
        await page.locator('[id="customer.address.street"]').type(user.address);
        await page.locator('[id="customer.address.city"]').type(user.city);
        await page.locator('[id="customer.address.state"]').type(user.state);
        await page.locator('[id="customer.address.zipCode"]').type(user.zipCode);
        await page.locator('[id="customer.phoneNumber"]').type(user.phoneNumber);
        await page.locator('[id="customer.ssn"]').type(user.SSN);
        // Type in the random username and password 
        await page.locator('[id="customer.username"]').type(username);
        await page.locator('[id="customer.password"]').type(user.password);
        await page.locator('[id="repeatedPassword"]').type(user.password);
        // Register the user
        await page.locator('[class=button] >> text=Register').click()
        // Validate that the error about missing last name appears
        const lastNameError = await page.locator('[id="customer.lastName.errors"]')
        await expect(lastNameError).toContainText('Last name is required.')
    });
    test('Register new user with no address', async ({ page, user }) =>{
        // Generate random unique username 
        const username = user.username + String(Math.floor(Math.random() * numberOfDigits))
        await page.goto('/');
        // Go to registration page
        await page.locator('text=Register').click();
        // Type in the user data without address into the fields
        await page.locator('[id="customer.firstName"]').type(user.firstName);
        await page.locator('[id="customer.lastName"]').type(user.lastName);
        await page.locator('[id="customer.address.city"]').type(user.city);
        await page.locator('[id="customer.address.state"]').type(user.state);
        await page.locator('[id="customer.address.zipCode"]').type(user.zipCode);
        await page.locator('[id="customer.phoneNumber"]').type(user.phoneNumber);
        await page.locator('[id="customer.ssn"]').type(user.SSN);
        // Type in the random username and password 
        await page.locator('[id="customer.username"]').type(username);
        await page.locator('[id="customer.password"]').type(user.password);
        await page.locator('[id="repeatedPassword"]').type(user.password);
        // Register the user
        await page.locator('[class=button] >> text=Register').click()
        // Validate that the error about missing address appears
        const addressError = await page.locator('[id="customer.address.street.errors"]')
        await expect(addressError).toContainText('Address is required.')
    });
    test('Register new user with no city', async ({ page, user }) =>{
        // Generate random unique username 
        const username = user.username + String(Math.floor(Math.random() * numberOfDigits))
        await page.goto('/');
        // Go to registration page
        await page.locator('text=Register').click();
        // Type in the user data without city into the fields
        await page.locator('[id="customer.firstName"]').type(user.firstName);
        await page.locator('[id="customer.lastName"]').type(user.lastName);
        await page.locator('[id="customer.address.street"]').type(user.address);
        await page.locator('[id="customer.address.state"]').type(user.state);
        await page.locator('[id="customer.address.zipCode"]').type(user.zipCode);
        await page.locator('[id="customer.phoneNumber"]').type(user.phoneNumber);
        await page.locator('[id="customer.ssn"]').type(user.SSN);
        // Type in the random username and password 
        await page.locator('[id="customer.username"]').type(username);
        await page.locator('[id="customer.password"]').type(user.password);
        await page.locator('[id="repeatedPassword"]').type(user.password);
        // Register the user
        await page.locator('[class=button] >> text=Register').click()
        // Validate that the error about missing city appears
        const cityError = await page.locator('[id="customer.address.city.errors"]')
        await expect(cityError).toContainText('City is required.')
    });
    test('Register new user with no state', async ({ page, user }) =>{
        // Generate random unique username 
        const username = user.username + String(Math.floor(Math.random() * numberOfDigits))
        await page.goto('/');
        // Go to registration page
        await page.locator('text=Register').click();
        // Type in the user data without state into the fields
        await page.locator('[id="customer.firstName"]').type(user.firstName);
        await page.locator('[id="customer.lastName"]').type(user.lastName);
        await page.locator('[id="customer.address.street"]').type(user.address);
        await page.locator('[id="customer.address.city"]').type(user.city);
        await page.locator('[id="customer.address.zipCode"]').type(user.zipCode);
        await page.locator('[id="customer.phoneNumber"]').type(user.phoneNumber);
        await page.locator('[id="customer.ssn"]').type(user.SSN);
        // Type in the random username and password 
        await page.locator('[id="customer.username"]').type(username);
        await page.locator('[id="customer.password"]').type(user.password);
        await page.locator('[id="repeatedPassword"]').type(user.password);
        // Register the user
        await page.locator('[class=button] >> text=Register').click()
        // Validate that the error about missing state appears
        const stateError = await page.locator('[id="customer.address.state.errors"]')
        await expect(stateError).toContainText('State is required.')
    });
    test('Register new user with no zip code', async ({ page, user }) =>{
        // Generate random unique username 
        const username = user.username + String(Math.floor(Math.random() * numberOfDigits))
        await page.goto('/');
        // Go to registration page
        await page.locator('text=Register').click();
        // Type in the user data without zip code into the fields
        await page.locator('[id="customer.firstName"]').type(user.firstName);
        await page.locator('[id="customer.lastName"]').type(user.lastName);
        await page.locator('[id="customer.address.street"]').type(user.address);
        await page.locator('[id="customer.address.city"]').type(user.city);
        await page.locator('[id="customer.address.state"]').type(user.state);
        await page.locator('[id="customer.phoneNumber"]').type(user.phoneNumber);
        await page.locator('[id="customer.ssn"]').type(user.SSN);
        // Type in the random username and password 
        await page.locator('[id="customer.username"]').type(username);
        await page.locator('[id="customer.password"]').type(user.password);
        await page.locator('[id="repeatedPassword"]').type(user.password);
        // Register the user
        await page.locator('[class=button] >> text=Register').click()
        // Validate that the error about missing state appears
        const zipCodeError = await page.locator('[id="customer.address.zipCode.errors"]')
        await expect(zipCodeError).toContainText('Zip Code is required.')
    });
    test('Register new user with no social security number', async ({ page, user }) =>{
        // Generate random unique username 
        const username = user.username + String(Math.floor(Math.random() * numberOfDigits))
        await page.goto('/');
        // Go to registration page
        await page.locator('text=Register').click();
        // Type in the user data without social security number into the fields
        await page.locator('[id="customer.firstName"]').type(user.firstName);
        await page.locator('[id="customer.lastName"]').type(user.lastName);
        await page.locator('[id="customer.address.street"]').type(user.address);
        await page.locator('[id="customer.address.city"]').type(user.city);
        await page.locator('[id="customer.address.state"]').type(user.state);
        await page.locator('[id="customer.address.zipCode"]').type(user.zipCode);
        await page.locator('[id="customer.phoneNumber"]').type(user.phoneNumber);
        // Type in the random username and password 
        await page.locator('[id="customer.username"]').type(username);
        await page.locator('[id="customer.password"]').type(user.password);
        await page.locator('[id="repeatedPassword"]').type(user.password);
        // Register the user
        await page.locator('[class=button] >> text=Register').click()
        // Validate that the error about missing social security number appears
        const ssnError = await page.locator('[id="customer.ssn.errors"]')
        await expect(ssnError).toContainText('Social Security Number is required.')
    });
});
