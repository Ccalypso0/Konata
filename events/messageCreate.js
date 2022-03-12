const Discord = require("discord.js");

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
      const {client, prefix} = bot
      
      if (!message.guild) return

      if (message.author.bot) return

      if (!message.content.startsWith(prefix)) return

      const args = message.content.slice(prefix.length).trim().split(/ +/g)
      const commandString = args.shift().toLowerCase()

      let command = client.commands.get(commandString) || client.commands.find(a => a.aliases && a.aliases.includes(commandString));
      if (!command) { 
        return message.channel.send("`❌ Incorrect command!` | **Check:** `-help`")
        .then(msg => setTimeout(() => msg.delete(), 5000*4)) // Autodelete BOT message
        .then(msg => setTimeout(() => message.delete(), 5000*4)); // Autodelete USER message
      }

      let member = message.member
      if (command.devOnly && !owners.includes(member.id)){
          return message.reply("This command is only available to the bot Owners")
      }

      if (command.permissions && member.permissions.missing(command.permissions).length !==0){
        return message.reply("You do not have permissions to use this command")
      }

      try {
          await command.run({...bot,message, args})
      }
      catch(err){
          let errMsg = err.toString()

          if (errMsg.startsWith("?")) {
              errMsg = errMsg.slice(1)
              await message.reply(errMsg)
          }

          else
            console.error(err)
      }
    }
}
