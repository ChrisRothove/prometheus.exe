const helpEmbed = require("../../Embeds/help");

module.exports = {
  name: "help",
  description: "help root command",
  execute(message, args) {
    message.channel.send(helpEmbed);
  },
};
