module.exports = {
    name: "ping",
    description: "Replies with pong!",
    aliases: [],
    category: "fun",
    Permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        if (args[0])
            return message.channel.send("`❌ Incorrect command!` | **Check:** `-help`")
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));
        else  
        message.reply("pong!")
    }
}
