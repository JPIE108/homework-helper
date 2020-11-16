module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");
  let monday = new Discord.RichEmbed()
  .setColor('#00fa00')
  .setTitle('Monday')
  .setDescription('Have a good Monday!')
  .addField('9:00', 'Maths with Mr Parellis')
  .addField('10:15', 'German with Mr Wittick')
  .addField('11:00', 'Science with Mr Yeo')
  .addField('11:45', 'English with Mr Scacciante')
  .addField('1:15', 'Geography with Ms Allan')
  .addField('2:00', 'History with Mr Arnott')
  .setTimestamp()
  .setFooter('Bot by x45');
  let tuesday = new Discord.RichEmbed()
  .setColor('#00fa00')
  .setTitle('Tuesday')
  .setDescription('Have a good Tuesday!')
  .addField('9:00', 'Latin / Elective with Mr Wong')
  .addField('10:15', 'Latin / Elective with Mr Wong')
  .addField('11:00', 'Elective with your elective teacher')
  .addField('11:45', 'Geography with Ms Allan')
  .addField('1:15', 'Health with Ms Klopsteins')
  .addField('2:00', 'Maths with Mr Parellis')
  .setTimestamp()
  .setFooter('Bot by x45');
  let wednesday = new Discord.RichEmbed()
        .setColor('#00fa00')
        .setTitle('Wednesday')
        .setDescription('It is Wednesday my dudes!')
        .addField('9:00', 'History with Mr Arnott')
        .addField('10:15', 'History with Mr Arnott')
        .addField('11:00', 'Geography with Ms Allan')
        .addField('11:45', 'English with Mr Scacciante')
        .addField('1:15', 'Science with Mr Yeo')
        .addField('2:00', 'English with Mr Scacciante')
        .setTimestamp()
        .setFooter('Bot by x45');
        let thursday = new Discord.RichEmbed()
        .setColor('#00fa00')
        .setTitle('Thursday')
        .setDescription('Have a good Thrusday!')
        .addField('9:00', 'Elective with your elective teacher')
        .addField('10:15', 'Elective with your elective teacher')
        .addField('11:00', 'Latin / Elective with Mr Wong')
        .addField('11:45', 'Maths with Mr Parellis')
        .addField('1:15', 'Health with Ms Klopsteins')
        .addField('2:00', 'Health with Ms Klopsteins')
        .setTimestamp()
        .setFooter('Bot by x45');
        let friday = new Discord.RichEmbed()
        .setColor('#00fa00')
        .setTitle('Friday')
        .setDescription('Have a good Friday!')
        .addField('9:00', 'German with Mr Wittick')
        .addField('10:15', 'Health with Ms Klopsteins')
        .addField('11:00', 'Maths with Mr Parellis')
        .addField('11:45', 'German with Mr Wittick')
        .addField('1:15', 'English with Mr Scacciante')
        .addField('2:00', 'Science with Mr Yeo')
        .setTimestamp()
        .setFooter('Bot by x45');
  if(args.length < 1){
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        message.channel.send("There is no class today!");
        break;
      case 1:
        day = "Monday";
        message.channel.send("There is class today, run! \nand here is the schedule:");
        message.channel.send(monday);
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
  }
  else {
  let yes = args[0].toString();
  let yes2 = yes.toLowerCase();
  switch (yes2) {
    case "monday":
      message.channel.send(monday);
    break;
    case "tuesday":
      message.channel.send(tuesday);
    break;
    case "wednesday":
      message.channel.send(wednesday);
    break;
    case "thursday":
      message.channel.send(thursday);
    break;
    case "friday":
      message.channel.send(friday);
    break;
    case "saturday":
      message.channel.send("No class today!");
    break;
    case "sunday":
      message.channel.send("No Class Today!");
    break;
    default: 
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        message.channel.send("There is no class today!");
        break;
      case 1:
        day = "Monday";
        message.channel.send("There is class today, run! \nand here is the schedule:");
        message.channel.send(monday);
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
  }
 
  }
};
  


  module.exports.help = {
    name:"schedule"
  }
