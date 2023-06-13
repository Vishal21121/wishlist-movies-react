import {Client, Account, Databases} from "appwrite"

// Init SDK
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64884d226c9a147cbf0f') // Your project ID
    .setKey('8692f4bbd3a6ddb0f3656bc2335d40d5d8f73682a9d5993a24fa6981d58e46720f27591338d4a7ab10f038ebb7b2b84b5e4cb56d30db93f3d64df6c42d9a6e3cff4495f096301741b15ea998b7bd01ecad905607b033fd936577d144e6b097cb5ee9de0396cab83bcd183615517ca1d546e4bfc1ae49ea4ed40aea76ba1514e4') // Your secret API key
;

export const account = new Account(client);

export const databases = new Databases(client);


