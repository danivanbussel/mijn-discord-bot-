const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

        // !help

            var botEmbed = new discord.MessageEmbed()
                    .setTitle("Alle customcommands")
                    .setColor("#29e53f")
                    .setThumbnail(`https://media.discordapp.net/attachments/657873470083825687/707217773486669864/Logopit_1588684246709.jpg?width=677&height=677`)
                    .addField("**__[👑] Owner__**", "`!unban` - Om iemand zijn ban op te heffen")
                    .addField("**__[🖥️] Developer, [🎩] Projectleider__**", "`!infractions <naam>` - Om alle warns van iemand te zien!\n`!user-info <naam>` - Om iemands speler informatie op te vragen!")
                    .addField("**__[🍖] Admin__**", "`!ban <naam> <reden>` - Om imand van de server te bannen! \n`!clear <aantal>` - Om <aantal> berichten te verweideren!\n`!unmute <naam>` - Om iemand te unmute!\n`!slowmode` - Om een langzame chat in te stellen!")
                    .addField("**__[🔨] Mod__**", "`!kick <naam> <reden>` - Om iemand van de server te kicken!\n`!tempban <naam> <reden>` - Om iemand voor een tijdje te bannen!")
                    .addField("**__[👔] Staff__**", "`!tempmute <naam> <reden>` - Om iemand een tijdje te muten!\n`!mute <naam> <reden>` - Om iemand te muten!\n`!warn - <naam> <reden>` - Om iemand te waarschuwen!")
                    .addField("**__[👱‍♂️] Player__**", "`!help` - Voor alle bot command's! \n `!ip` - Voor alle MineCraft Server informatie! \n `!idee` - Om jou server ideën op te sturen! \n `!rank` - Voor alle rank informatie! \n `!regels` - Om alle server regels te lezen!")
                    .addField("**__[🎫] service__**", "`-close <reden>` - Om een ticket te sluiten")
                    .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');

            return message.channel.send(botEmbed);
    }



module.exports.help = { 
    name: "help"
}