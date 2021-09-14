const Discord = require("discord.js");

module.exports = function createError(error) {
  return new Discord.MessageEmbed()
    .setColor("#f0f8ff")
    .setTitle("ERROR")
    .setAuthor("Prometheus Prime")
    .addFields(
      {
        name: "Shields Failing, captain!",
        value: `An error has occurred: ${error}`,
      },
      {
        name: "ships",
        value: `nothing here yet`,
      }
    );
};
