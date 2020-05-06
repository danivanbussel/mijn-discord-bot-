const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

                // !rank-nitrobooster

                    var botEmbed = new discord.MessageEmbed()
                            .setTitle("**__[💎] Nitro booster__**")
                            .setColor("#f242f5")
                            .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/gem-stone_1f48e.png`)
                            .setDescription("Als je de serverboost krijg je meteen deze rank! Deze donatie waderen we heel erg! daarmo krijg je een speciaal cadeau! iets wat niet meer dan 1x in de hele game komt!")
                            .addField("Voordelen", "- Je krijgt toegang tot <#705028751687155736>\n - Je krijgt Nitrobooster rank\n - Je krijgt in de Lobby Fly \n- Je krijgt een cadeau")
                            .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
    
                    return message.channel.send(botEmbed);
            }
  


module.exports.help = {
    name: "rank-nitrobooster"
}