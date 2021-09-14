const { getStarted } = require("../../utils/api");
const launchSuccess = require("../../Embeds/launchSuccess");
const createError = require("../../Embeds/error");

module.exports = {
  name: "launch",
  description: "initiates new player",
  execute: async function (msg, args) {
    launchResult = await getStarted(msg.author.id);
    if (launchResult.status === 201) {
      msg.channel.send(launchSuccess);
    } else {
      msg.channel.send(createError("You've already got a license, captain!"));
    }
  },
};
