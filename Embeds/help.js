const Discord = require("discord.js");

module.exports = new Discord.MessageEmbed()
  .setColor("#f0f8ff")
  .setTitle("help categories")
  .setAuthor("Prometheus Prime")
  .addFields(
    {
      name: "Bot Fun",
      value: `^headpats: gives @user headpats \n ^ping: says "pong"\n`,
    },
    {
      name: "ships",
      value: `nothing here yet`,
    }
  );
