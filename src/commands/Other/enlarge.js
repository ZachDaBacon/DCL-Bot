const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed, ModalSubmitFieldsResolver, Interaction } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('enlarge')
    .setDescription('Enlarge an Emoji')
    .addStringOption(option => option.setName('emoji').setDescription('The emoji to enlarge').setRequired(true)),
    async execute(interaction, client, args) {
      
      const emoji = interaction.options.getString('emoji');


    const embed = new MessageEmbed()
    .setColor("BLUE")
    .setImage(`https://cdn.discordapp.com/emojis/\\:emoji:.png`)
    .setTimestamp()
    .setFooter(`Enlarge Requested By: ${interaction.user.username}`)
  interaction.reply({ embeds: [embed] });
}
    }
