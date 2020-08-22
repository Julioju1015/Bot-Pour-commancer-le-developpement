const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const fs = require('fs');


//Ready
client.on('ready', () => {
    console.log(`Stats:

        ╔═════════════════════════════════╗
        ║-->  Bot Name : ${client.user.username}
        ╟─────────────────────────────────╢
        ║-->  Channels : ${client.channels.cache.size}
        ╟─────────────────────────────────╢
        ║-->  Utilisateurs : ${client.users.cache.size}
        ╟─────────────────────────────────╢
        ║-->  Serveurs   : ${client.guilds.cache.size}
        ╚═════════════════════════════════╝
    `);
});

//Commandes + events

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande principal trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
  if (error) { return console.error(error); }
      console.log(`${f.length} events chargés`);

      f.forEach((f) => {
          let events = require(`./Events/${f}`);
          let event = f.split('.')[0];
          client.on(event, events.bind(null, client));
      });
});


client.login("Votre token");
