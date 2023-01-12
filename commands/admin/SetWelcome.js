const { MessageEmbed, Message, Client } = require("discord.js");
const db = require("megadb")
const welcome_db = new db.crearDB("welcome")

module.exports = {
    name : 'setwelcome',
    aliases : [''],
    category : '',
    description : 'change channel welcome',
    usage:``,
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args,member) => {


        var perms = message.member.permissions.has("ADMINISTRATOR")
        if (!perms) return message.channel.send("You do not have permission to use this command").then((m)=>{m.delete({ timeout: 5000 })})
        

        if(!args[0]) return message.channel.send("write a new channel to send welcome image").then((m)=>{m.delete({ timeout: 5000 })})
        welcome_db.establecer(message.guild.id, args[0])
        
      
        const embed = new MessageEmbed()
            .setTitle(`The channel welcome has been changed`)
            .setDescription(`**New channel welcome ${args[0]}**`)
            .addField('Changed by:', `${message.member.user.username}`, true)
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(client.user.username, client.user.avatarURL())
            .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
            .setFooter(message.guild.name, message.guild.iconURL())
            .setURL("");


        message.channel.send({ embeds: [embed] });

    },
};
