const { MessageEmbed, Message, Client } = require("discord.js");

module.exports = {
    name: "ip",
    aliases: ['connect'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        
        const Embed = new MessageEmbed()
        .setTitle(`How to connect in ${client.config.server_name}`)
        .setDescription('')
        .addFields(
        {
            name:"Connect in FiveM (Aplication)",
            value:`${client.config.server_name}`
        },
        {
            name:"Connect in FiveM (Connect)",
            value:`connect ${client.config.server_connect}`
        },
        {
            name:"Connect in Browser",
            value:`${client.config.server_url}`
        })
        .setImage('')
        .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
        .setAuthor(`${client.user.username}`, `${client.user.avatarURL()}`)
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
        .setColor('RANDOM')
        .setURL('');

        message.channel.send({ embeds: [Embed] });

    },
};
