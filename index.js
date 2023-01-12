const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

client.commands = new Collection();
client.config = require("./src/config.json");


require("./handler")(client);

client.login(client.config.token);
