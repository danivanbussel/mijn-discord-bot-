const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

                // !rank-streamer

                    var botEmbed = new discord.MessageEmbed()
                    .setTitle("**__[🎦] Streamer__**")
                    .setColor("#504fb6")
                    .setURL("https://forms.gle/dKfBKSBH5UVooU4H9")
                    .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/briefcase_1f4bc.png`)
                    .setDescription("^ Vraag hier je rank aan!")
                    .addField("**__Eisen__**", "- Minimaal 2 streams per week \n - Minimaal 100 weergave")
                    .addField("**__Voordelen__**", "- Je krijgt toegang tot <#705028751687155735>\n- Je mag om de 6 uur reclame post sturen! in <#705336869268750351>\n - Je krijgt streamer rank")
                    .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
    
                    return message.channel.send(botEmbed);
            }



module.exports.help = {
    name: "rank-streamer"
}