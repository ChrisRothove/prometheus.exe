const Discord = require("discord.js");

module.exports = new Discord.MessageEmbed()
  .setColor("#f0f8ff")
  .setTitle("Launch Successful!!")
  .setAuthor("Prometheus Prime")
  .addFields(
    {
      name: "Congrats!",
      value:
        "Your Launch License has been approved and you're ready to start your adventure!",
    },
    {
      name: "Next Steps",
      value: `use the "^starter" command to choose your first ship from a handful of beginner ships.`,
    }
  );
