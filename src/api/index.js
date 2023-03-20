import { Client, Account } from 'appwrite';

const client = new Client()
    .setEndpoint('http://hl-appwriter.buildapi.cyou/v1') // Your API Endpoint
    .setProject('6418281b82bbc4911f5b');   // Your project ID

const account = new Account(client);

export {client,account}