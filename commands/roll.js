module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");
  let sides = args[0]
  let dice = Math.floor(Math.random() * sides + 1);
  let testEmbed = new Discord.RichEmbed()
  .setColor('#00fa00')
  .setTitle('You rolled a: ' + dice + " from a " + sides + " sided die.")
  .setTimestamp()
  .setFooter('Bot by x45');
  message.channel.send(testEmbed);
};

  module.exports.help = {
    name:"roll"
  }
