const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

                // !ticketinfo

                    var botEmbed = new discord.MessageEmbed()
                            .setTitle("**__Ticketinfo__**")
                            .setColor("#50a688")
                            .setThumbnail(`https://lh3.googleusercontent.com/-tFW9_-JKl0M/XrF-1_XN0zI/AAAAAAAAGG4/8-8nbq8Sg7k_aEykdrqSaYSmoAu69W97ACEwYBhgL/w140-h140-p/logo.jpg`)
                            .setDescription("Klik op :tickets: om een Ticket aan te maken. \n\n hier kan je: \n Ranks kopen/aanvragen \n Vragen stellen \n En nog veel meer!")
                            .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
    
                    return message.channel.send(botEmbed);
            }



module.exports.help = {
    name: "ticketinfo"
}