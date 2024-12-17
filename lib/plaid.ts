import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

if (!process.env.PLAID_CLIENT_ID || !process.env.PLAID_SECRET) {
    throw new Error('Missing Plaid credentials in environment variables');
}

const configuration = new Configuration({
    basePath: PlaidEnvironments[process.env.PLAID_ENV as keyof typeof PlaidEnvironments] || PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID.trim(),
            'PLAID-SECRET': process.env.PLAID_SECRET.trim(),
        }
    }
});

export const plaidClient = new PlaidApi(configuration);