module.exports = {
    name: "ping",
    category: "info",
    Permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("pong!")
    }
}
