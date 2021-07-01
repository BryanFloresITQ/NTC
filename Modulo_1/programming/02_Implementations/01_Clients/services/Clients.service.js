const { MongoConnection } = require('../lib/Mongo');

//Collection
const COLLECTION = "clients"

const findUsers = () => new Promise(async(resolve, reject) => {
    try {
        //Inicializo MongoClient para que me retorne la Base de Datos
        const DB = await MongoConnection();
        //Obtenemos la collection
        const clients = DB.collection(COLLECTION);
        const clientsList = await clients.find({}).toArray();
        resolve(clientsList);
    } catch (error) {
        reject(error);
    }
});

module.exports = {
    findUsers,
}