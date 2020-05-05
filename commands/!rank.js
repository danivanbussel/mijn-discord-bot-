const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

// !ranks
    var botEmbed = new discord.MessageEmbed()
            .setTitle("Rank informatie")
            .setColor("#29e53f")
            .setThumbnail(`https://lh3.googleusercontent.com/-tFW9_-JKl0M/XrF-1_XN0zI/AAAAAAAAGG4/8-8nbq8Sg7k_aEykdrqSaYSmoAu69W97ACEwYBhgL/w140-h140-p/logo.jpg`)
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