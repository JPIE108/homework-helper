module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");
  let help = new Discord.RichEmbed()
  .setColor('#00fa00')
  .setTitle('Help')
  .addField('*help', 'lists all commands')
  .addField('*test', 'sees if the bot is not dead')
  .addField('*say <args>', 'makes the bot say whatever you want')
  .addField('*roll <number of sides>', 'rolls a die, you choose the amount of sides')
  .addField('*reminder', 'toggles reminders')
  .addField('*schedule', 'prints the schedule for today')
  .addField('*wake', 'sends a direct message to someone in order to "wake them up" for a meet. (Mod or Higher Only)')
  .addField('*meme', 'sends a low quality meme')
  .addField('*deutschmeme', 'sends a low quality german meme')
  .addField('*latinmeme', 'sends a low quality latin meme')
  .addField('*meets', 'sends an embed with links to meets. Usage: *meets <args>')
  .setTimestamp()
  .setFooter('Bot by x45');
  message.delete(0);
  message.channel.send(help);
};

  module.exports.help = {
    name:"help"
  }
