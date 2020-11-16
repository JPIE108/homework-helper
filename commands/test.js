module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");
  message.delete(0);
  let testEmbed = new Discord.RichEmbed()
  .setColor('#00fa00')
  .setTitle(':warning: Bot is not dead')
  .setTimestamp()
  .setFooter('Bot by x45');
  message.channel.send(testEmbed);
};

  module.exports.help = {
    name:"test"
  }
