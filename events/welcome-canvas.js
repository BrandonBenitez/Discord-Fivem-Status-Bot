const discord = require("discord.js")
const client = require("../index")
const { createCanvas, loadImage } = require("canvas");
const { join } = require("path");
const db =  require('megadb')
const welcome_db = new db.crearDB("welcome")
let welcome;

client.on("messageCreate", async (message, guild) => {

    if(welcome_db.tiene(message.guild.id)){
        welcome = await welcome_db.obtener(message.guild.id)
    }else{
        welcome = client.config.welcome
    }
});


client.on("guildMemberAdd", async(member, message)=>{
    const canvas = createCanvas(1200, 635); 
    const ctx = canvas.getContext("2d");
  
    const background = await loadImage(join(__dirname, "../src", "image.png")); 
  
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
    const name = member.user.username;
  
    if (name.length >= 10) {
      ctx.font = "bold 70px Sans";
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 100);
    } else {
      ctx.font = "bold 80px Sans";
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 100);
    }
  
    const server = "Welcome to \n"+ member.guild.name;
  
    ctx.font = "bold 90px sans-serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(server, canvas.width / 2, canvas.height / 2 - 100);
  
    ctx.beginPath();
    ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
  
    const avatar = await loadImage(
      member.user.displayAvatarURL({ format: "png" })
    );
  
    ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);
  
    const imagen = new discord.MessageAttachment(canvas.toBuffer(), "img.png");
  


    const channel = member.guild.channels.cache.find(
      (channel) => channel.name === `${welcome}`
    );
  
    const me = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Welcome ${member.user.username}`)
      .setDescription(``)
      .setImage("attachment://img.png")
      .setTimestamp()
      .setFooter(member.guild.name ,member.guild.iconURL({dynamic: true}));
  
    channel.send({ embeds: [me], files: [imagen] });  

});