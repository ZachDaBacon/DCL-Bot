const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const { interaction } = require('discord.js')
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.commands = new Collection();

// client
   // .on("debug", console.log)
  //  .on("warn", console.log)

require('dotenv').config();
const mySecret = process.env['token']

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");


// client.on("interactionCreate", async (interation) => {
//  if (!interaction.channels.cache.get("970775929972469779")) {

 // interation.reply("Support Thread Created")
//	const message = await interaction.fetchReply()
//	Message.startThread(options, StartThreadOptions)
 // }
//});
//     name, `Test`,
//autoArchiveDuration, 200,
//rateLimitPerUser, 5,
//type, 'GUILD_PUBLIC_THREAD'

// Message.startThread(options: StartThreadOptions): Promise<ThreadChannel>


const statuses = [
  { name: "discord.gg/rJBnhzK7QF", type: "LISTENING" },
  { name: "youtube.com/c/MrJAwesomeYT", type: "WATCHING" }
];

// Connecting to MongoDB
//  mongose.connect('').then(() => console.log("Connected to Moongoose"))

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");
  client.login(process.env['token'])
  console.log(`Logged in! Ready to Moderate Discord Coding Lounge!`)
  setInterval(() => {
    var randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(randomStatus);
  }, 10000);
//    const mongoose = require('mongoose')
//	mongoose.connect(process.env['mongo'], {
//		useNewUrlParser: true,
  //  useUnifiedTopology: true,
	//}).then(console.log('[MongoDB] Connected to the Database'))
})();