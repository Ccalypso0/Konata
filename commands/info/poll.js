const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "poll",
    category: "utility",
    description: "Sends the user's avatar",
    aliases: [],
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) =>{

        let member = message.author;
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        if (!args[0]) {
            return message
            .reply("Mention a channel where you want to send the poll and add description.\ne.g: \`-poll #poll this is a poll\`")
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));

        } else if ((pollChannel) && (!args[1])) {
            return message
            .reply("Mention a channel where you want to send the poll and add description.\ne.g: \`-poll #poll this is a poll\`")
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));

        }else if ((!pollChannel) || (!pollDescription)) {
            return message.channel
            .send("\`❌ Incorrect command!\` | **Check:** \`-help\`")
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));

        } else if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message
            .reply("Admin only command!")
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));
        }

        const pollEmbed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle('Poll')
        .setDescription(pollDescription)
        .setFooter({ text: `${member.username}`, iconURL: `${member.avatarURL({dynamic: true})}`})
        .setTimestamp()

        let msgEmbed = await pollChannel.send({ embeds: [pollEmbed] });
            await msgEmbed.react('👍')
            await msgEmbed.react('👎')
            .then(msg => setTimeout(() => message.delete(), 3000));
    }
}
