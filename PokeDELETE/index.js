module.exports = async function (context, req) {
    //Conexão para o mongodb
    const { MongoClient } = require("mongodb");
    const url = "mongodb+srv://<usuário>:<senha>@starkindustries.r6do7.mongodb.net/";
    const client = new MongoClient(url);
    await client.connect();
    const database = client.db("API");
    const collection = database.collection('pokemon');

    var mongoose = require('mongoose');
    var id = mongoose.Types.ObjectId(req.params.id);

    await collection.deleteOne({ _id: id });

    context.res = {
        status: 200,
        body: "Deletado",
    }

}