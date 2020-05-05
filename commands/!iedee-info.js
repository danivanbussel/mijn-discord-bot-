const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

                // !suggestie-info

                    var botEmbed = new discord.MessageEmbed()
                            .setTitle("idee info")
                            .setColor("#29e53f")
                            .setThumbnail(`https://media.discordapp.net/attachments/657873470083825687/707217773486669864/Logopit_1588684246709.jpg?width=677&height=677`)
                            .setDescription("Iedereen kan een suggestie doen! Staff dus ook! met \n`!idee <idee>` kan je iets aangeven wat je graag wil veranderen! dus als bijvoorbeeld: Je wilt een nieuwe emote in de discord. (je kan van alles insturen!) \n\n Je kan stemmen met een 👍 als je het een goed idee vind! \n\n Wil je dit liever niet in de server dan moet je stemmen met een 👎 \n\n we kunnen niet beloven dat het in de server komt maar we zullen er altijd kijken naar de mogelijkheden!")
                            .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
    
                    return message.channel.send(botEmbed);
            }




module.exports.help = {
    name: "idee-info"
}