const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

// !ranks
    var botEmbed = new discord.MessageEmbed()
            .setTitle("Rank informatie")
            .setColor("#29e53f")
            .setThumbnail(`https://media.discordapp.net/attachments/705028751846670338/707226783296127006/Logopit_1588686370857.jpg?width=677&height=677`)
            .setDescription("Voer het onderstaande command in om een specifiek rank informatie op te vragen!")
            .addField("**__@[💼] Partner__**", "!rank-partner")
            .addField("**__@[▶️] Youtuber__**", "!rank-youtuber")
            .addField("**__@[🎦] Streamer__**", "!rank-streamer")
            .addField("**__@[💎] Nitro booster__**", "!rank-nitrobooster")
            .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');

    return message.channel.send(botEmbed);
}


module.exports.help = {
    name: "rank"
}