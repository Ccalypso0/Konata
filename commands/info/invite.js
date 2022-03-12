const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'invite',
    description: "Sends invite link to the bot",
    aliases: [],
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({ message, args }) => {
        const user = message.mentions.users.first() || message.author 
        const exampleEmbed = new MessageEmbed()

            .setColor("BLUE")
            .setTitle("Invite me to your server!")
            .setThumbnail("https://i.imgur.com/HGp9Uzv.jpg")
            .setFields({ name: "Bot Invite:",value: "[Click here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)", inline: true})
            .setFooter({ text: user.username, iconURL: user.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()

            if (args[0])
                return message.channel.send("`❌ Incorrect command!` | **Check:** `-help`")
                .then(msg => setTimeout(() => msg.delete(), 5000*4))
                .then(msg => setTimeout(() => message.delete(), 5000*4));
            else  
            message.reply({ embeds: [exampleEmbed] });
    }
}
