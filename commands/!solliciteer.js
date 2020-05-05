const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

        // !help

            var botEmbed = new discord.MessageEmbed()
                    .setTitle("**__Solliciteer hier voor staff!__**")
                    .setColor("#29e53f")
                    .setURL('https://forms.gle/3sF82HsrUh6vBz2F9')
                    .setThumbnail(`https://lh3.googleusercontent.com/-tFW9_-JKl0M/XrF-1_XN0zI/AAAAAAAAGG4/8-8nbq8Sg7k_aEykdrqSaYSmoAu69W97ACEwYBhgL/w140-h140-p/logo.jpg`)
                    .setDescription(`Vul alles zo goed en netjes mogelijk in! Je krijgt binnen een week reactie van ons! Heb je geen reactie dm dan de owners!`)

            return message.channel.send(botEmbed);
    }



module.exports.help = { 
    name: "solliciteer"
}