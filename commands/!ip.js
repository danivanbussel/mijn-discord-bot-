const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

                 // !ip
                    var botEmbed = new discord.MessageEmbed()
                            .setTitle("Server informatie")
                            .setColor("#29e53f")
                            .setThumbnail(`https://lh3.googleusercontent.com/-tFW9_-JKl0M/XrF-1_XN0zI/AAAAAAAAGG4/8-8nbq8Sg7k_aEykdrqSaYSmoAu69W97ACEwYBhgL/w140-h140-p/logo.jpg`)
                            .addField("**__🔐Server ip__**", "{komt Soon!}")
                            .addField("**__🌎Server versie__**", "1.12.2 Optifine")
                            .addField("**__🔴Server status__**", "Offline")
                            .addField("**__🏡Gamemode Survival__**", "{komt Soon!}")
                            .addField("**__🔪Gamemode Onbekend__**", "{komt Soon!}")
                            .addField("**__🏁Gamemode Onbekend__**", "{komt Soon!}")
                            .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
    
                    return message.channel.send(botEmbed);
                    }



module.exports.help = {
    name: "ip"
}