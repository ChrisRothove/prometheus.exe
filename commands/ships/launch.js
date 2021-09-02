const { getStarted } = require("../../utils/api");

module.exports = {
  name: "launch",
  description: "initiates new player",
  execute: async function (msg, args) {
    await getStarted(msg.author.id);
  },
};
