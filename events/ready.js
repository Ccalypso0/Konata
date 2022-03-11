module.exports = {
    name: "ready",
    once: true,
    // When the client is ready, run this code (only once)
    run: async (bot) => {
        console.log("==========================================|")
        console.log(bot.client.user.tag + " has successfully logged in!")
        console.log("==========================================|")
        
        // Set Bot Presence
        bot.client.user?.setPresence({ activities: [{ name: `-help`, type: `PLAYING` }], status: `idle` });
    }
}
