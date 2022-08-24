const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('accountage')
    .setDescription(`Find out someones account age!`),
    async execute(interaction, client) {

        const embedavatar = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(`${interaction.user.tag} Account Age`)
        .setDescription(`Your account was created on: ${interaction.user.createdAt}`)
        .setThumbnail(interaction.user.avatarURL())
        .setTimestamp()
        .setFooter(`Account-Age requested By: ${interaction.user.tag}`)
      
        await interaction.reply({ embeds: [embedavatar] }).catch(err => {console.log('Error')})
    },
}