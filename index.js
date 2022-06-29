// Require the necessary discord.js classes
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Define intents
const myIntents = new Intents();
// Add intents
myIntents.add(
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_VOICE_STATES
);
// Create a new client instance /w defined intents
const client = new Client({ intents: myIntents });

let bot = {
    client,
    prefix: "-",
    owners: ["819267079940603935"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

// Creating a func
client.loadEvents = (bot, reload) =>
require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) =>
require("./handlers/commands")(bot, reload)

// Calling the func
client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Big dick is back in town!\nヾ(▔⩊▔‧)")
    }
})

client.on("messageCreate", (message) => {
    if ((message.content == "OwO") || (message.content == "UwU")){
        message.reply("Major Weeb Alert! :rotating_light:")
    }
})

// Login to Discord with your client's token
client.login(token);
