import { Client, Databases, Storage } from 'appwrite';

// Initialize Appwrite client
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67c7817d0022c8dbc5e9');

// Initialize the database and storage services
const databases = new Databases(client);
const storage = new Storage(client);

export { client, databases, storage };