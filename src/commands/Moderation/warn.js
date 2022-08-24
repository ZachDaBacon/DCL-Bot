const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');
const { execute } = require('../Community/test');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('warn')
    .setDescription('Warn a user within Discord Coding Lounge')
    .addUserOption(option => option.setName('target').setDescription('The user you would like to warn').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('What is the reason you would like to warn the user?')),
    async execute(interaction, client) {
        const warnUser = interaction.options.getUser('target');
        const warnMember = await interaction.guild.members.fetch(warnUser.id);

        const logChannel = `998972825480212540`

        const logChan = interaction.guild.channels.cache.get(logChannel)

        if (!interaction.member.permissions.has("KICK_MEMBERS")) return interaction.reply({ content: "You do not have permission to execute this command!",  ephemeral: true})
        if (!warnMember) return await interaction.reply({ content: 'The user mentioned is no longer within the server.', ephemeral: true})

        let reason = interaction.options.getString('reason');
        if (!reason) reason = "No reason was provided."

        const dmEmbed = new MessageEmbed()
        .setDescription(`You have been warned within **${interaction.guild.name}** | ${reason}`)
        .setColor("BLUE")
        .setFooter(`Warned In: ${interaction.guild.name}`)

        const embed = new MessageEmbed()
        .setDescription(`${warnUser.tag} has been **warned**. | ${reason}`)
        .setColor("BLUE")
        .setFooter(`Server Name: ${interaction.guild.name}`)

        const log = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("🚨 Member Warned 🚨")
        .addFields(
            { name: '**Punished Member Tag:**', value: `${warnUser.tag}` },
            { name: '**Punished Member ID:**', value: `${warnUser.id}` },
            { name: '**Warned By:**', value: `${interaction.user.tag}`, inline: true },
            { name: '**Detailed Warn Description:**', value: `${reason}`, inline: true },
        )
        .setFooter("Discord Coding Lounge | Moderation Team")

        await warnMember.send({ embeds: [dmEmbed] }).catch(err => {console.log('I cannot send DMS to this user!')})

        logChan.send({ embeds: [log] }).catch(err => {console.log('Error When Logging')})

        await interaction.reply({ embeds: [embed] }).catch(err => {console.log('Error')})
    },
}

// blakes fat + unloved