const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('membercount')
    .setDescription('How many people are within Discord Coding Lounge?'),
    async execute(interaction, client, args) {

        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`There are **${interaction.guild.memberCount}** Members's within Discord Coding Lounge`)
        .setFooter('Discord Coding Lounge | Member Count')
        interaction.reply({ embeds: [embed] })
    }
}