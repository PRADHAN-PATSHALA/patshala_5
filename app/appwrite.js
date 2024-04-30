import { Client, Account} from 'appwrite';



   export const client = new Client;

   client
    .setEndpoint('https://pradhanpatshalanazat0.netlify.app/') 
    .setProject('663056c30027d48154ae')

   export const account = new Account(client);
   export {ID} from 'appwrite';   