## FIVEM DISCORD BOT
* Server FiveM Status bot

## Commands 
Command      | Description 
------------ | -------------
`!playerlist`| Users connected to the FiveM server
`!status`| FiveM Status Server
`!ip`| Fivem Server IP
`setprefix`| change prefix default
`welcome image `|welcome with image
`setwelcome`|change channel send welcome

## How to install
### dependencies
   * [NodeJS](https://nodejs.org/en/)
   * axios
   * canvas
   * discordjs v13
   * glob
   * megadb
   * path


# Settings `config.json`
* Open / Edit `config.json`in folder src [Token,Prefix,Server_IP,Server_Name,Server_Url,Server_Connect]

* Example of the `config.json` file
* All variables must be completed for the bot to work properly.

```json    
{
    "token": "OTAxODgyMzczOTM3MTJz.YXWVaQ.efHkGB_HQ3gqQGOIo-N1OjlG8UI",
    "prefix": "!", 
    "server_ip": "123.123.123.123:12345",
    "server_name":"Mexico RP",
    "server_url":"https://servers.fivem.net/servers/detail/",
    "server_connect":"cfx.re/join/ed33m",
    "welcome":"welcome"
    
  } 
```
# Get Variables
   ## Token Discord Bot
   * https://discord.com/developers/applications

   ## Server IP
   * IP Server FiveM and Port
   * Example: 123.123.123.123:12345

   ## Server Name
   * FiveM server name

   ## Server URl
   * FiveM Server Url 
   * Example: https://servers.fivem.net/servers/detail/eoas
   * look for your server in: https://servers.fivem.net/

   ## Server Connect
   * FiveM Server Connect 
   * you can use the ip of your server or server connect
   * Example ip: 123.123.123.123:12345
   * Example Connect: cfx.re/join/ed33xm


   ## channels

   # welcome
   * channel name for send message welcome 

## How to start/run the bot
 Replit           | VSCㅤ 
------------      | -------------
1\. `npm install` | 1\. `npm install`
2\. `Run`         | 2\. `node ./index.js`
