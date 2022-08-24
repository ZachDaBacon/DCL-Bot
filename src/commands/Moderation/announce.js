const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('announce')
    .setDescription('Announce Something to the coding lounge')
    .addStringOption(option => option.setName('title').setDescription('What is the title of the embed?').setRequired(true))
    .addStringOption(option => option.setName('content').setDescription('What is the content of the embed?').setRequired(true)),
    async execute(interaction, client) {


        let title = interaction.options.getString('title');
        if (!title) reason = "No title was provided"

        let content = interaction.options.getString('content');
        if (!content) reason = "No content was provided"

        if (!interaction.member.permissions.has("MANAGE_SERVER")) return interaction.reply({ content: "You do not have permission to execute this command!",  ephemeral: true})
        if (!title) return await interaction.reply({ content: 'Set a title.', ephemeral: true})

        const e1 = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(`${title}`)
        .setDescription(`${content}`)
        .setTimestamp()
        .setFooter(`Announced By: ${interaction.user.id}`)

        await interaction.reply({ embeds: [e1] }).catch(err => {console.log('Error')});
    }
}