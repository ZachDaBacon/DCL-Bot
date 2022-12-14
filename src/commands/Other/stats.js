const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("stats")
        .setDescription("My Stats"),
        async execute(interaction, client, args) {

            const ToTalSeconds = (client.uptime / 1000);
            const Days = Math.floor(ToTalSeconds / 86400);
            const Hours = Math.floor(ToTalSeconds / 3600);
            const Minutes = Math.floor(ToTalSeconds / 60);
           // const Seconds = Math.floor(ToTalSeconds % 60);


            const embed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle("Discord Coding Lounge | Official Bot Stats")
            .addFields(
                { name: '๐ Ping', value: `โ\`${client.ws.ping}ms\``, inline: true },
                { name: '๐ Uptime ', value:`โ\`${Days}d, ${Hours}h, ${Minutes}m\``, inline: true },
                { name: '๐ DJS Version', value: `โ\`v13.8.1\``, inline: true },
                { name: '๐งพ NodeJS Version', value: `โ\`v16.16.0\``, inline: true },
                { name: `:file_cabinet: API Latency`, value: `โ\`${Math.round(client.ws.ping)}\``, inline: true },
            )
            .setTimestamp()
            .setFooter(`Stats Requested By: ${interaction.user.username}`)
    
    
            interaction.reply({ embeds: [embed] }).catch(err => {interaction.reply('Error - Official Bot Stats')});

        }
    }