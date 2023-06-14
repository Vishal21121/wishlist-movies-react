import {Client, Account, Databases} from "appwrite"
// Init SDK

const client = new Client();

// for vite, inorder to access the environment variables use the below way
client
    .setEndpoint(import.meta.env.VITE_END_POINT) // Your API Endpoint
    .setProject(import.meta.env.VITE_PROJECT_ID) // Your project ID
;

export const account = new Account(client);

export const databases = new Databases(client,import.meta.env.VITE_DATABASE_ID);


