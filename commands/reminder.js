module.exports.run = async (bot, message, args) => {
    const Discord = require("discord.js");
    if (message.member.roles.has('734634498624585849')) {
        message.member.removeRole('734634498624585849');
        message.channel.send("Removed the Reminder Role, use *reminder to get the role back");    }
    else {
    message.delete(0);
    message.member.addRole('734634498624585849');
    message.channel.send("Added the Reminder Role, you will now recieve notifications when a class starts.");
  };
}
    module.exports.help = {
      name:"reminder"
    }