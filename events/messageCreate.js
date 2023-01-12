const client = require("../index");
const db =  require('megadb')
const prefix_db = new db.crearDB("prefix")

client.on("messageCreate", async (message) => {

    let prefix;
    if(prefix_db.tiene(message.guild.id)){
        prefix = await prefix_db.obtener(message.guild.id)
    }else{
        prefix = client.config.prefix
    }
    
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);
});
