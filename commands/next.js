module.exports.run = async (bot, message, args) => {
    const Discord = require("discord.js");
    let today = new Date();
    let day = today.getDay();
    let hour = today.getHours();
    let minute = today.getMinutes();
    console.log(today.getTime())
    message.channel.send(hour + ":" + minute)
    switch (today) {
      case 0:
        message.channel.send("Nothing Today!")
        break;
      case 1:
        switch (today.getTime()){}
        break;
      case 2:
         day = "Tuesday";
         message.channel.send("There is class today, run! \nand here is the schedule:");
         message.channel.send(tuesday);
        break;
      case 3:
        day = "Wednesday";
        message.channel.send("There is class today, run! \nand here is the schedule:");
        message.channel.send(wednesday);
        break;
      case 4:
        day = "Thursday";
       
        message.channel.send("There is class today, run! \nand here is the schedule:");
        message.channel.send(thursday);
        break;
      case 5:
        day = "Friday";
       
        message.channel.send("There is class today, run! \nand here is the schedule:");
        message.channel.send(friday);
        break;
      case 6:
        day = "Saturday";
        message.channel.send("There is no class today!");
    }
  };
  
    module.exports.help = {
      name:"next"
    }
  