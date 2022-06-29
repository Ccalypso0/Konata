module.exports = {
    name: "ping",
    category: "fun",
    description: "Replies with pong!",
    aliases: [],
    Permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        if (args[0]) {
            return message.channel
            .send("\`❌ Incorrect command!\` | **Check:** \`-help\`")
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));

        } else {
            message.reply("pong!")
        }
    }
}
