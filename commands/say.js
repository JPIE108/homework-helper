module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");
  var saidby = message.author.username;
  var said = 'Message sent by';
  var author = said + ' ' + saidby;
  let sayEmbed = new Discord.RichEmbed()
    .setColor('#00fa00')
    .setTitle('Say Command')
    .addField(args, author)
    .setTimestamp()
    .setFooter('Bot by x45');
  message.delete(0);
  message.channel.send(sayEmbed);
};

  module.exports.help = {
    name:"say"
  }
