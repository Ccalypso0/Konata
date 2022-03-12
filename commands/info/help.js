const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    description: "A helpful command",
    aliases: [],
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        let member = message.author;

        const help = new MessageEmbed()
        //help commands embed
        .setColor("BLUE")
        .setTitle(`__My Commands:__ ☆ ${client.commands.size}`)
        .setDescription(`() Alternative command\n{} Optional Argument`)
        .addFields({ name: "Music commands", value: "`help music`"})
        .addFields({ name: "Fun commands", value: "`-ping`"})
        .addFields({ name: "Misc commands", value: "`-avatar {@User}`"})
        .addFields({ name: "Info commands", value: "`-help\n-botinfo (-ms)`"})
        .addFields({ name: "Server commands", value: "`-invite`"})
        .setFooter({ text: `${member.username}`, iconURL: `${member.avatarURL({dynamic: true})}`})
        .setTimestamp()

        if (args[0])
            return message.channel.send("`❌ Incorrect command!` | **Check:** `-help`")
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));
        else  
        message.channel.send({ embeds: [help] }).then(msg => setTimeout(() => message.delete(), 5000));
    }
}
