import { Client, Databases } from 'appwrite';

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(process.env.CL_ID)




export const db = new Databases(client);