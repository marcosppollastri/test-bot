const Discord = require('discord.js');
const client = new Discord.Client();

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


client.login('NTc3ODM3MDY4OTY5ODM2NTc0.XNq38g.wm-nuF9ZpiWz1PENo7BG9YIk0bk');