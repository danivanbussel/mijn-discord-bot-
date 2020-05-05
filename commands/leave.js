const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    bot.on("guildMemberAdd", member => {
    
        const channel = member.guild.channels.cache.find(c => c.name == "👋welkom");
        if (!channel) console.log("Kan het kanaal niet vinden.");

        var joinEmbed = new discord.MessageEmbed()
                .setAuthor(`Welkom ${member.user.tag}`)
                .setDescription(`${member} Je kan op deze server van alles vinden! \n Wil je op onze MinecraftServer spelen? \n doe dan **__!ip__** in <#705028751477571625> \n Doe **__!help__** voor nog meer botcommand's \n Wil je gewoon gezellig chatten ga dan naar <#705028751477571626> \n\n heb je nog vragen? stel ze gerust in <#705028751687155738>`)
                .setThumbnail(`https://media.discordapp.net/attachments/705028751846670338/707226783296127006/Logopit_1588686370857.jpg?width=677&height=677`)
                .setColor("RANDOM")
                .setTimestamp()
                .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');

        channel.send(joinEmbed);

});

}

module.exports.help = {
    name: "leave"
}