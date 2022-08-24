const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("My Ping"),
        async execute(interaction, client) {

            const embed = new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`**🏓 Pong!** \n My Ping is Currently ${client.ws.ping}ms.`)
            .setTimestamp()
            .setFooter(`Ping Requested By: ${interaction.user.username}`)
    
    
            interaction.reply({ content: `${interaction.user}`, embeds: [embed] }).catch(err => {interaction.reply('Error')});

        }
    }