const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton, MessageActionRow, CommandInteraction, MessageComponentInteraction, InteractionCollector, MessageCollector, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("codehelp")
        .setDescription("Need Help with Your Code?"),
        async execute(interaction, client) {

        const embed = new MessageEmbed()
        .setColor("BLUE")
        .addFields(
            { name: 'Need Help with Some of your Code?', value: `Please Provide us with a screenshot of the error, and the code where the error comes from. If you don't do this, we can not help you.` },
        )
        .setTimestamp()
        .setFooter(`Discord Coding Lounge`)


        await interaction.reply({ embeds: [embed] }).catch(err => {interaction.reply('Error')});
    }
}