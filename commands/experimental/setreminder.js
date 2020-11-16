module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");
  const schedule = require("node-schedule");
  let date = new Date();
  let date2 = date.getDate();
  let date3 = date.getDate(args[0]);
  console.log(args[0])
  let dit = date3.getTime()
  let dit2 = date2.getTime()
  console.log(dit)
  console.log(dit2)
};

  module.exports.help = {
    name:"setreminder"
  }
