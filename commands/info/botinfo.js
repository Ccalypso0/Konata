const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "botinfo",
    category: "info",
    description: "Shows the bot latency",
    aliases: ["ms"],
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        if (args[0]) {
            return message.channel
            .send("\`❌ Incorrect command!\` | **Check:** \`-help\`")
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));
        }
        else {
            message.reply({ content: "**Pinging...**", allowedMentions: { repliedUser: true }})
            .then ((resultMessage) => {

                const ping = resultMessage.createdTimestamp - message.createdTimestamp
                const pingEmbed = new MessageEmbed()

                //.setColor("#303136")
                .setDescription(":globe_with_meridians: Average websocket latency: `" + ping + "ms`")
                .addFields({ name: "**API latency**", value: "\`" + client.ws.ping + "\` ms", inline: true })
                .addFields({ name: "**Online since**", value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true })

                resultMessage
                .edit({ content: null, embeds: [pingEmbed], allowedMentions: { repliedUser: true }})
                .then(msg => setTimeout(() => msg.delete(), 5000*4))
                .then(msg => setTimeout(() => message.delete(), 5000*4));
            });
        }
    },
};
