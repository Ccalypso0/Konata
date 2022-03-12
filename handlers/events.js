const { getFiles } = require("../util/functions");

module.exports  = (bot, reload) => {
    const {client} = bot

    let getEvent = getFiles("./events/", ".js")

    if (getEvent.length === 0){
        console.log("|-----------------------------|")
        console.log("| There are no Events to load |")
        console.log("|-----------------------------|")
    }

    getEvent.forEach((f, i) => {
        if (reload)
            delete require.cache[require.resolve(`../events/${f}`)]
        const gottenEvent = require(`../events/${f}`)
        client.events.set(gottenEvent.name, gottenEvent)

        if (!reload)
            console.log(`------------------------------------------|`)
            console.log(`   ${i + 1}.   |loaded| ${f}`)
            console.log(`------------------------------------------|`)
    })

    if (!reload)
        initEvents(bot)
}

function triggerEventHandler(bot, event, ...args) {
    const {client} = bot
    
    try {
        if(client.events.has(event))
            client.events.get(event).run(bot, ...args)
        else
            throw new Error(`Event ${event} does not exist`)
    }
    catch(err){
        console.error(err)
    }
}

function initEvents(bot) {
    const {client} = bot
    
    client.on("ready", () => {
        triggerEventHandler(bot, "ready")
    })

    client.on("messageCreate", (message) => {
        triggerEventHandler(bot, "messageCreate", message)
    })
}
