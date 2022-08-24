const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton, MessageActionRow, CommandInteraction, MessageComponentInteraction, InteractionCollector, MessageCollector, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("v14-13")
        .setDescription("How to downgrade for v14 - v13"),
        async execute(interaction, client) {

        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("How to downgrade for discord.js v14 - 13")
        .setDescription('Do this in a terminal.')
        .addFields(
            { name: 'Step #1', value: `Uninstall current discord.js, you can do that with this command: \`npm uninstall @discordjs\`.` },
            { name: 'Step #2', value: `Install discord.js v13.8.1, you can do that with this command: \`npm i discord.js@13.8.1\`.` },
        )
        .setTimestamp()
        .setFooter(`Discord Coding Lounge | How to downgrade for v14 - v13`)


        await interaction.reply({ embeds: [embed] }).catch(err => {interaction.reply('Error')});
    }
}