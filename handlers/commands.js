const { getFiles } = require("../util/functions");
const fs = require("fs");

module.exports = (bot, reload) => {
    const {client} = bot

    fs.readdirSync("./commands").forEach((category) => {
        let getCommand = getFiles(`./commands/${category}`, ".js")

        getCommand.forEach((f) => {
            if (reload)
                delete require.cache[require.resolve(`../commands/${category}/${f}`)]
            const gottenCommand = require(`../commands/${category}/${f}`)
            client.commands.set(gottenCommand.name, gottenCommand)
        })
    })

    console.log(`LOADED COMMANDS:   ${client.commands.size}`)
}
