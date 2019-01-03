const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-";

client.on("ready", () => {
  console.log("MoKaF7a| Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`Say|${prefix}new`);
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN);
