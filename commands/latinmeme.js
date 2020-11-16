module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");
  const randomPuppy = require("random-puppy");
  const subReddits = ["RoughRomanMemes", "spqrposting"];
  const random = subReddits[Math.floor(Math.random() * subReddits.length)];
  const img = await randomPuppy(random);
  const embed = new Discord.RichEmbed()
      .setColor("#00fa00")
      .setImage(img)
      .setTitle(`From /r/${random}`)
      .setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);

  message.channel.send(embed);
};

  module.exports.help = {
    name:"latinmeme"
  }
