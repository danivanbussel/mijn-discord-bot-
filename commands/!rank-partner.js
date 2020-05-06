const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

                // !rank-partner
                    var botEmbed = new discord.MessageEmbed()
                    .setTitle("**__[💼] Partner__**")
                    .setColor("#504fb6")
                    .setURL("https://forms.gle/dKfBKSBH5UVooU4H9")
                    .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/briefcase_1f4bc.png`)
                    .setDescription("^ Vraag hier je rank aan!")
                    .addField("**__Eisen__**", "- een discord server met minimaal 200 leden \n - Wij mogen in jou discord server reclame maken")
                    .addField("**__Voordelen__**", "- Je krijgt toegang tot <#705028751687155733> chat \n- Je mag om de 6 uur reclame post sturen! in <#705336869268750351>\n - Je krijgt partner rank")
                    .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
    
                    return message.channel.send(botEmbed);
            }



module.exports.help = {
    name: "rank-partner"
}