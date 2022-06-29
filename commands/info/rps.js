const choices = ['rock', 'paper', 'scissors'];
const win = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
}

module.exports = {
    name: "rps",
    category: "fun",
    description: "rock-paper-scissors game",
    aliases: [],
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        if (!args[0]) {
            return message
            .reply(`You need to specify your choice.\ne.g: \`-rps <${choices[0]}/${choices[1]}/${choices[2]}>\``)
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));

        } else if (!choices.includes(args[0].toLowerCase())) {
            return message
            .reply(`That's not one of the possible options! Try one of these: \`<${choices[0]}/${choices[1]}/${choices[2]}>\``)
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));
        }

        const playerChoice = args[0].toLowerCase();
        const botChoice = choices[Math.floor(Math.random() * choices.length)];

        if (playerChoice && args[1]) {
            return message.channel
            .send("\`❌ Incorrect command!\` | **Check:** \`-help\`")
            .then(msg => setTimeout(() => msg.delete(), 5000*4))
            .then(msg => setTimeout(() => message.delete(), 5000*4));

        } else if (win[playerChoice] === botChoice) {
            message.reply(`I got **${botChoice}**. Congratulations, you win! :tada:\n(T ﹏ T‧)`);

        } else if (win[botChoice] === playerChoice) {
            message
            .reply(`I got **${botChoice}**. Another easy win! :sunglasses:\n(▔⩊▔‧)`);

        } else {
            message
            .reply(`I got **${botChoice}**. It's a draw! :tired_face:\n(ᗒᗣᗕ.)՞`);
        }
    }
}