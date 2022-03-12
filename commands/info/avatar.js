const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'avatar',
    description: "Get the user's avatar picture",
    aliases: [],
    category: "misc",
    permissions:[],
    run: async ({message, args}) => {
        const user = message.mentions.users.first() || message.author
        const userAvatar = new MessageEmbed()
            .setTitle(`__${user.username}'s avatar__`)
            .setDescription(`[Link to avatar](${user.avatarURL({format: 'png', size: 512, dynamic: true})})`)
            .setImage(`${user.avatarURL({format: 'png', size: 512, dynamic: true})}`) 
            .setColor('BLUE')
        
        if ((args[1] == message.mentions.users.first()) && (args[0]) || (args[1]))
            return message.channel.send("`❌ Incorrect command!` | **Check:** `-help`")
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));
        else
        message.reply({ embeds: [userAvatar] });
    }
}
