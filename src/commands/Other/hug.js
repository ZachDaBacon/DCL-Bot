const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed, ModalSubmitFieldsResolver, Interaction } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('hug')
    .setDescription('Hug A User')
    .addUserOption(option => option.setName('target').setDescription('The Person To Hug').setRequired(true)),
    async execute(interaction, client, args) {

        const target = interaction.options.getUser('target');
        const targetMember = await interaction.guild.members.fetch(target.id);

if(target){
    const hugEmbed = new MessageEmbed()
    .setDescription(`${interaction.user} hugged ${target} :heart:`)
    .setColor("BLUE")
    .setTimestamp()
    .setFooter(`Help Requested By: ${interaction.user.username}`)
  interaction.reply({ embeds: [hugEmbed] });
}
else{
  interaction.reply(`Sorry ${interaction.user} that user is not in this server!`);
}
    }
}