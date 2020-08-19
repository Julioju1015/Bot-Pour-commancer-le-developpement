const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    message.channel.send("Test !")
}

module.exports.help = {
    name: "test"
}