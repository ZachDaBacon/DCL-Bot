const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('thread-solved')
    .setDescription('Your Support Thread is solved? Make our team aware.'),
    async execute(interaction, client, args) {

        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**Thread Update - ** Marked as **Solved** <a:Success:999006584862675025>`)
        .setFooter('Discord Coding Lounge | Thread Solved')
        interaction.reply({ embeds: [embed] })
    }
}