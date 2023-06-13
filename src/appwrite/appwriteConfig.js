import {Client, Account, Databases} from "appwrite"

// Init SDK
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64884d226c9a147cbf0f') // Your project ID
;

export const account = new Account(client);

export const databases = new Databases(client,"64888ea5dd24c6a92a69");


