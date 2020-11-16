module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");
  let mathembed = new Discord.RichEmbed()
  .setColor('#00fa00')
  .setTitle('Maths Link')
  .addField('Link:', 'https://zoom.us/j/97864037341?pwd=L1k1cDlJMGhxM3QzbGVRZldMRVo1Zz09')
  .setURL("https://zoom.us/j/97864037341?pwd=L1k1cDlJMGhxM3QzbGVRZldMRVo1Zz09")
  .setTimestamp()
  .setFooter('Bot by x45');
  let englishembed = new Discord.RichEmbed()
  .setColor('#00fa00')
  .setTitle('English Link')
  .addField('Link:', 'https://meet.google.com/lookup/dzu4qijaul')
  .setURL("https://meet.google.com/lookup/dzu4qijaul")
  .setTimestamp()
  .setFooter('Bot by x45');
  let geoembed = new Discord.RichEmbed()
  .setColor('#00fa00')
  .setTitle('Geography Link')
  .addField('Link:', 'https://meet.google.com/lookup/ft3rmdrjzs')
  .setURL("https://meet.google.com/lookup/ft3rmdrjzs")
  .setTimestamp()
  .setFooter('Bot by x45');
  let sciembed = new Discord.RichEmbed()
  .setColor('#00fa00')
  .setTitle('Science Link')
  .addField('Link:', 'https://meet.google.com/lookup/f27fexkoqx')
  .setURL("https://meet.google.com/lookup/f27fexkoqx")
  .setTimestamp()
  .setFooter('Bot by x45');
  let germembed = new Discord.RichEmbed()
  .setColor('#00fa00')
  .setTitle('German Link')
  .addField('Link:', 'https://meet.google.com/lookup/botkvo5xy3')
  .setURL("https://meet.google.com/lookup/botkvo5xy3")
  .setTimestamp()
  .setFooter('Bot by x45');
  let latinembed = new Discord.RichEmbed()
  .setColor('#00fa00')
  .setTitle('Latin Link')
  .addField('Code:', '709-663-0795')
  .addField('Password:', '5j2k9q')
  .setTimestamp()
  .setFooter('Bot by x45');
  switch (args[0]) {
    case "maths":
      message.channel.send(mathembed);
    break;
    case "math":
      message.channel.send(mathembed);
    break;
    case "english":
      message.channel.send(englishembed);
    break;
    case "history":
      message.channel.send("Check google classroom since Mr Arnott doesn't use the same code");
    break;
    case "geography":
      message.channel.send(geoembed);
    break;
    case "science":
      message.channel.send(sciembed);
    break;
    case "health":
      message.channel.send("We dont have health meets. xd");
    break;
    case "german":
      message.channel.send(germembed);
    break;
    case "latin":
      message.channel.send(latinembed);
    break;
    default: 
      message.channel.send("Please write a valid subject after the command.\n e.g. *meets maths")
  }
};

  module.exports.help = {
    name:"meets"
  }
