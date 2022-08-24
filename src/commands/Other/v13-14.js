const { SlashCommandBuilder } = require('@discordjs/builders');
const {  MessageEmbed, ModalSubmitFieldsResolver, Interaction } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('14prefix')
    .setDescription('See a User using prefix commands on djs v14?')
    .addUserOption(option => option.setName('target').setDescription('The member using prefix commands on djs (discord.js) v14?').setRequired(true)),
    async execute(interaction, client) {

        const target = interaction.options.getUser('target');
        const targetMember = await interaction.guild.members.fetch(target.id);

        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`Using Prefix Commands on v14?? We recommend downgrading to **v13.8.1** for this. If you are using Slash (/) Commands, don't worry about it. For ease please downgrade to the mentioned version, if on prefix commands.`)
        .setTimestamp()
        .setFooter(`Discord Coding Lounge | Prefix on V14`)


        interaction.reply({ content: `${target}`, embeds: [embed] }).catch(err => {interaction.reply('Error')});

    }
}