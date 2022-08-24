// https://github.com/t2k-official/v14-command-handler

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("v14handler")
        .setDescription("Prefix & Slash | NEW Command (Slash & Prefix) Handler | v14")
        .addUserOption(option => option.setName('target').setDescription('Who needs the handler?').setRequired(true)),
        async execute(interaction, client) {

            const target = interaction.options.getUser('target');
            const targetMember = await interaction.guild.members.fetch(target.id);

            const embed = new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`[NEW Command (Slash & Prefix) Handler | v14](https://github.com/t2k-official/v14-command-handler) \n\n **Credits:** <@933073468784771142>`)
            .setTimestamp()
            .setFooter(`Discord Coding Lounge | v14 Slash & Prefix Handler`)
    
    
            interaction.reply({ content: `${target}`, embeds: [embed] }).catch(err => {interaction.reply('Error')});

        }
    }