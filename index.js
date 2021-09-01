require("dotenv").config();
const fs = require("fs");
const Discord = require("discord.js");
const botClient = new Discord.Client();
botClient.commands = new Discord.Collection();

const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;

const commandFolders = fs.readdirSync("./commands");
for (const folder of commandFolders) {
  const commandFiles = fs
    .readdirSync(`./commands/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    botClient.commands.set(command.name, command);
  }
}

botClient.on("ready", () => {
  console.info(`Logged in as ${botClient.user.tag}!`);
});

botClient.on("message", (msg) => {
  if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;

  const args = msg.content.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!botClient.commands.has(commandName)) return;

  const command = botClient.commands.get(commandName);

  try {
    command.execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply("there was an error trying to execute that command!");
  }
});

botClient.login(TOKEN);
