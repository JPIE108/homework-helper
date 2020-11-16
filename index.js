const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const json = require("json-update");
const schedule = require('node-schedule');
const reminderid = "734706751164907541";
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("*help | Helping with Online Learning", {
    type: "STREAMING",
    url: "https://www.twitch.tv/x45_"
});
let session1 = schedule.scheduleJob('58 8 * * 1-5', function(){
    bot.channels.get(reminderid).send("It is time for Session 1, get to Class! <@&734634498624585849>")
  });
  let session2 = schedule.scheduleJob('13 10 * * 1-5', function(){
    bot.channels.get(reminderid).send("It is time for Session 2, get to Class! <@&734634498624585849>")
  });
  let session3 = schedule.scheduleJob('58 10 * * 1-5', function(){
    bot.channels.get(reminderid).send("It is time for Session 3, get to Class! <@&734634498624585849>")
  });
  let session4 = schedule.scheduleJob('43 11 * * 1-5', function(){
    bot.channels.get(reminderid).send("It is time for Session 4, get to Class! <@&734634498624585849>")
  });
  let session5 = schedule.scheduleJob('13 13 * * 1-5', function(){
    bot.channels.get(reminderid).send("It is time for Session 5, get to Class! <@&734634498624585849>")
  });
  let session6 = schedule.scheduleJob('58 13 * * 1-5', function(){
    bot.channels.get(reminderid).send("It is time for Session 6, get to Class! <@&734634498624585849>")
  });
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(message.channel.id === "742547197966549003") {
    if(message.content === "cup" | message.content === "tasse"){
     return;
    }
    else {
      message.delete()
      message.reply("How dare you violate the laws of CUP")
    }
  }
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(tokenfile.token);

console.log("sudo rm -rf /")