module.exports = {
    name: "ready",
    once: true, 
    run: async (bot) => {

        console.log("==========================================|")
        console.log(bot.client.user.tag + " has successfully logged in!")
        console.log("==========================================|")

        // Set Bot Presence
        bot.client.user?.setPresence({ activities: [{ name: `-help`, type: `PLAYING` }], status: `idle` });
    }
}
