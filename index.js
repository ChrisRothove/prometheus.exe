require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

function getUsernames(users) {
  return users.map((user) => user.username);
}

bot.on("message", (msg) => {
  if (msg.content.startsWith("<3headpats")) {
    if (msg.mentions.users.size) {
      const taggedUsers = getUsernames(msg.mentions.users);
      msg.channel.send(`You gave ${taggedUsers.join(", and ")} a headpat!`);
    } else {
      msg.reply("you headpat yourself...?");
    }
  }
});
