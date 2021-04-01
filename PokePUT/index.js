module.exports = async function (context, req) {
    //Classe para os pokemons
    class Pokemon {
        constructor(name, image, order, stats) {
            this.name = name;
            this.image = image;
            this.order = order;
            this.stats = stats;
        }
    }

    //Conexão para o mongodb
    const { MongoClient } = require("mongodb");
    const url = "mongodb+srv://<usuário>:<senha>@starkindustries.r6do7.mongodb.net/";
    const client = new MongoClient(url);
    await client.connect();
    const database = client.db("API");
    const collection = database.collection('pokemon');

    const myJson = req.body;
    
    const pokemon01 = new Pokemon(myJson.name, myJson.image, myJson.order, myJson.stats);

    var mongoose = require('mongoose');
    var id = mongoose.Types.ObjectId(req.params.id);

    const query = { _id: id };

    const newData = {
        name: pokemon01.name,
        image: pokemon01.image,
        order: pokemon01.order,
        stats: pokemon01.stats,
    };

    const newValues = { $set: newData };

    await collection.findOneAndUpdate(query, newValues);

    context.res = {
        status: 200,
        body: "Atualizado",
    }
}