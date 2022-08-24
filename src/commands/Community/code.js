const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton, MessageActionRow, CommandInteraction, MessageComponentInteraction, InteractionCollector, MessageCollector, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("code")
        .setDescription("im testing this command")
        .addStringOption(option => option.setName('userid').setDescription('User ID to send Code to | THIS MUST BE AN ID').setRequired(true))
        .addStringOption(option => option.setName('content').setDescription('Code Suggestion').setRequired(true)),
        async execute(interaction, client) {

        let content = interaction.options.getString('content');
        let userid = interaction.options.getString('userid');

        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(`Discord Coding Lounge | Code Suggestions`)
        .setDescription(`\`\`\`js\n${content}\`\`\``)
        .setTimestamp()
        .setFooter(`Discord Coding Lounge | Code Suggestion`)

        const embed2 = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`Code send to <@${userid}>`)
        .setTimestamp()
        .setFooter(`Discord Coding Lounge | Code Suggestion`)

        client.users.fetch(`${userid}`, false).then((user) => {
            user.send({ embeds: [embed] });
           });

        await interaction.reply({ embeds: [embed2] }).catch(err => {interaction.reply('Error')});
    }
}