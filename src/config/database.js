
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'servey_management'; 

let db;

async function connection() {
    if (!db) {
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connecté à la base de données MongoDB');
        db = client.db(dbName);
    }
    return db;
}

async function closeConnection() {
    if (db) {
        await db.client.close();
        console.log('Connexion à  la base de données MongoDB fermée');
        db = null;
    }
}

module.exports = { connection, closeConnection };