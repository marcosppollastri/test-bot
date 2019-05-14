var express = require('express');
var app = express();

// Extract the required classes from the discord.js module
const { Client, RichEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

require('dotenv').config();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  
  if (msg.content === '=240376') {
    msg.reply('Comunicado número uno de la Junta de Comandantes Generales: Se comunica a la poblacion que a partir de la fecha, el servidor se encuentra bajo el control operacional de la Junta Militar. Se recomienda a todos los habitantes el estricto acatamiento a las disposiciones y directivas que emanen de autoridad militar');
  }
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Comunicado número uno de la Junta de Comandantes Generales: Se comunica a la poblacion que a partir de la fecha, el servidor se encuentra bajo el control operacional de, ${member}` + ". Se recomienda a todos los habitantes el estricto acatamiento a las disposiciones y directivas que emanen de autoridad militar");
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '=patas') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Cochino degenerado')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('Las patas son lo maximo');

      embed.setImage('https://plantillasdememes.com/img/plantillas/larry-es-lo-maximo1.png');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});



client.login(process.env.DISCORD_TOKEN);