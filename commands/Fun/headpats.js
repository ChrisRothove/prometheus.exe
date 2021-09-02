function getUsernames(users) {
  return users.map((user) => user.username);
}

module.exports = {
  name: "headpats",
  description: "Gives tagged member a headpat",
  execute(msg, args) {
    if (msg.mentions.users.size) {
      console.log(msg.author.id);
      const taggedUsers = getUsernames(msg.mentions.users);
      if (taggedUsers.includes(msg.author.username)) {
        msg.reply("You headpat yourself...?");
      } else {
        msg.channel.send(`You gave ${taggedUsers.join(", and ")} a headpat!`);
      }
    } else {
      msg.reply("You headpat yourself...?");
    }
  },
};
