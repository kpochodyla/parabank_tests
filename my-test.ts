// my-test.ts
import { test as base } from '@playwright/test';

export type TestOptions = {
  user: {            
    'firstName': string,
    'lastName': string,
    'address': string,
    'city': string,
    'zipCode': string,
    'state': string,
    'phoneNumber': string,
    'SSN': string,
    'username': string,
    'password': string
    };
};

export const test = base.extend<TestOptions>({
  // Define an option and provide a default value.
  // We can later override it in the config.
  user: [{
            'firstName': 'krystian',
            'lastName': 'niatsyrk',
            'address': 'kpstreet 1',
            'city': 'kpcity',
            'zipCode': '11-111',
            'state': 'Maine',
            'phoneNumber': '123123123',
            'SSN': '005-24-3143',
            'username': 'kplogin',
            'password': 'kppass'
        }, 
        { option: true }],

});