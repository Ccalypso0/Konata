const { MessageEmbed } = require('discord.js');
const categoryHelp = ['music', 'fun', 'utility', 'info', 'server'];

module.exports = {
    name: "help",
    category: "info",
    description: "A helpful command",
    aliases: [],
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        let member = message.author;
        const helpEmbed = new MessageEmbed()

        //help commands embed
        .setColor("BLUE")
        .setTitle(`__My Commands:__ ☆ \`${client.commands.size}\``)
        .setDescription("\`()\`\tAlternative command\n\`{}\`\tOptional argument\n\`<>\`\tRequired argument")
        .addFields({ name: "━━━━━━━━━━━━|\nMusic", value: "\`-help music\`"})
        .addFields({ name: "━━━━━━━━━━━━|\nFun", value: "\`-help fun\`"})
        .addFields({ name: "━━━━━━━━━━━━|\nUtility", value: "\`-help utility\`"})
        .addFields({ name: "━━━━━━━━━━━━|\nInfo", value: "\`-help info\`"})
        .addFields({ name: "━━━━━━━━━━━━|\nServer", value: "\`-invite\`"})
        .addFields({ name: "━━━━━━━━━━━━|", value: "--------------| :scroll: |--------------"})
        .setFooter({ text: `${member.username}`, iconURL: `${member.avatarURL({dynamic: true})}`})
        .setTimestamp()

        if (!args[0]) {
            message.channel
            .send({ content:`Auto-delete: <t:${parseInt(message.createdTimestamp / 1000 + 120)}:R>`, embeds: [helpEmbed] })
            .then(msg => setTimeout(() => msg.delete(), 5000*24))
            .then(msg => setTimeout(() => message.delete(), 5000*24));

        } else if (!categoryHelp.includes(args[0].toLowerCase())) {
            return message
            .reply(`That's not a category!\nTry any of these: \`{${categoryHelp[0]}/${categoryHelp[1]}/${categoryHelp[2]}/${categoryHelp[3]}/${categoryHelp[4]}}\``)
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));

        } else if (args[1]) {
            return message.channel
            .send("\`❌ Incorrect command!\` | **Check:** \`-help\`")
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));

        } else if (!args[1]) {
            const helpChoice = args[0].toLowerCase();

            switch (helpChoice) {
                case 'music':
                    const helpMusic = new MessageEmbed()
                    .setColor("BLUE")
                    .setTitle(`__Music Commands:__ ☆`)
                    .setDescription("\`()\`\tAlternative command\n\`{}\`\tOptional argument\n\`<>\`\tRequired argument")
                    .addFields({ name: "━━━━━━━━━━━━|", value: "\`tba\`"})
                    .addFields({ name: "━━━━━━━━━━━━|", value: ":musical_note:"})
                    .setFooter({ text: `${member.username}`, iconURL: `${member.avatarURL({dynamic: true})}`})
                    .setTimestamp()
                    message.channel.send({ content:`Auto-delete: <t:${parseInt(message.createdTimestamp / 1000 + 120)}:R>`, embeds: [helpMusic] })
                    .then(msg => setTimeout(() => msg.delete(), 5000*24))
                    .then(msg => setTimeout(() => message.delete(), 5000*24));
                break;

                case 'fun':
                    const helpFun = new MessageEmbed()
                    .setColor("BLUE")
                    .setTitle(`__Fun Commands:__ ☆`)
                    .setDescription("\`()\`\tAlternative command\n\`{}\`\tOptional argument\n\`<>\`\tRequired argument")
                    .addFields({ name: "━━━━━━━━━━━━|", value: "\`-ping\`\n\`-rps <rock/paper/scissors>\`"})
                    .addFields({ name: "━━━━━━━━━━━━|", value: ":game_die:"})
                    .setFooter({ text: `${member.username}`, iconURL: `${member.avatarURL({dynamic: true})}`})
                    .setTimestamp()
                    message.channel
                    .send({ content:`Auto-delete: <t:${parseInt(message.createdTimestamp / 1000 + 120)}:R>`, embeds: [helpFun] })
                    .then(msg => setTimeout(() => msg.delete(), 5000*24))
                    .then(msg => setTimeout(() => message.delete(), 5000*24));
                break;

                case 'utility':
                    const helpUtility = new MessageEmbed()
                    .setColor("BLUE")
                    .setTitle(`__Utility Commands:__ ☆`)
                    .setDescription("\`()\`\tAlternative command\n\`{}\`\tOptional argument\n\`<>\`\tRequired argument")
                    .addFields({ name: "━━━━━━━━━━━━|", value: "\`-poll\` \`-avatar {@User}\`"})
                    .addFields({ name: "━━━━━━━━━━━━|", value: ":tools:"})
                    .setFooter({ text: `${member.username}`, iconURL: `${member.avatarURL({dynamic: true})}`})
                    .setTimestamp()
                    message.channel
                    .send({ content:`Auto-delete: <t:${parseInt(message.createdTimestamp / 1000 + 120)}:R>`, embeds: [helpUtility] })
                    .then(msg => setTimeout(() => msg.delete(), 5000*24))
                    .then(msg => setTimeout(() => message.delete(), 5000*24));
                break;

                case 'info':
                    const helpInfo = new MessageEmbed()
                    .setColor("BLUE")
                    .setTitle(`__Info Commands:__ ☆`)
                    .setDescription("\`()\`\tAlternative command\n\`{}\`\tOptional argument\n\`<>\`\tRequired argument")
                    .addFields({ name: "━━━━━━━━━━━━|", value: "\`-help\` \`-botinfo (-ms)\`"})
                    .addFields({ name: "━━━━━━━━━━━━|", value: ":point_up: :nerd:"})
                    .setFooter({ text: `${member.username}`, iconURL: `${member.avatarURL({dynamic: true})}`})
                    .setTimestamp()
                    message.channel
                    .send({ content:`Auto-delete: <t:${parseInt(message.createdTimestamp / 1000 + 120)}:R>`, embeds: [helpInfo] })
                    .then(msg => setTimeout(() => msg.delete(), 5000*24))
                    .then(msg => setTimeout(() => message.delete(), 5000*24));
                break;

                // case 'server':
                //     const helpServer = new MessageEmbed()
                // break;

                default:
                    return
            }
        }
    }
}
