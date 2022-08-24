const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('nick')
    .setDescription('Change your Nickname')
    .addStringOption(option => option.setName('nickname').setDescription('What are you changing your nickname to?').setRequired(true)),
    async execute(interaction, client, args) {


        let nickname = interaction.options.getString('nickname');
        if (!nickname) reason = "No nickname was provided."


        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`<a:Success:999006584862675025> ${interaction.user} I have changed your Nickname to **${nickname}**.`)
        .setTimestamp()
        .setFooter(`Nickname Changed By: ${interaction.user.username}`)

    interaction.member.setNickname(`${nickname}`).catch(err => {interaction.reply('There was an error.. please try again.'); ephemeral: true});
    await interaction.reply({ embeds: [embed] }).catch(err => {console.log('Error')});
    },
}
