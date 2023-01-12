const { MessageEmbed, Message, Client } = require("discord.js");
const Players = require("../../src/players")

module.exports = {
    name: "status",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        
        Players.Players().then((result) => {

            if(result.status === 200){

                const embedonline = new MessageEmbed()
                .setTitle(`**Server Name: ${client.config.server_name}\nStatus: ✅ Online **`)
                .addFields({ name: 'Players Online', value: result.data.length, inline: true  })
                .setTimestamp()
                .setColor("#03fc41")
                .setAuthor(client.user.username, client.user.avatarURL())
                .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
                .setFooter(message.guild.name, message.guild.iconURL())
                .setURL("");

                message.channel.send({ embeds: [embedonline] });
           }
           

        }).catch(function(){
            const embedoffline = new MessageEmbed()
            .setTitle(`**Server Name: ${client.config.server_name}\nStatus: ❌ Offline **`)
            .addFields({ name: 'Players Online', value: 'None', inline: true  })
            .setTimestamp()
            .setColor("RANDOM")
            .setAuthor(client.user.username, client.user.avatarURL())
            .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
            .setFooter(message.guild.name, message.guild.iconURL())
            .setURL("");

        message.channel.send({ embeds: [embedoffline] });

        })

    },
};
