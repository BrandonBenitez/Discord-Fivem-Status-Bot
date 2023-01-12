const client = require("../index");
const  Players = require("../src/players")

function presence(){
    setInterval(() => {
        Players.Players().then((result) => {
            client.user.setPresence({activities:[{name:`${client.config.server_name} || ${result.data.length} Jugadores Conectados`,type: 'PLAYING'}], status:"dnd"})
        })
      }, 10000);
}

client.on("ready", () =>
    console.log(`Logged in as ${client.user.username}!`),
    presence()
);
