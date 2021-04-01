module.exports = async function (context, req) {
    //Conexão para o mongodb
    const { MongoClient } = require("mongodb");
    const url = "mongodb+srv://<usuário>:<senha>@starkindustries.r6do7.mongodb.net/";
    const client = new MongoClient(url);
    await client.connect();
    const database = client.db("API");
    const collection = database.collection('pokemon');

    const res = await collection.find({});
    const list = await res.toArray();

    context.res = {
        status: 200,
        body: list
    }

}