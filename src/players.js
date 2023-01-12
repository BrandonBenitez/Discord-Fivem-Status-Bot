const client = require("../index");
const axios = require("axios");

const Players = async () => {
    try {
        const resp = await axios.get('http://'+client.config.server_ip+'/players.json');
        
        
            let total = resp;
            return total;
        

    } catch (err) {
        console.error(err);

    }
};

    module.exports.Players = Players;
