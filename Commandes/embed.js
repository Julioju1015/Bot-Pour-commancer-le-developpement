const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle("🧵 • Titre")
	.setDescription("Votre description")
	.setTimestamp()

    message.channel.send(embed);
}

module.exports.help = {
    name: "embed"
}