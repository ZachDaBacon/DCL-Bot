const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');
const { execute } = require('../Community/test');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a member from the coding lounge')
    .addUserOption(option => option.setName('target').setDescription('The user you would like to kick').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('What is the reason you would like to kick the user?')),
    async execute(interaction, client) {
        const kickUser = interaction.options.getUser('target');
        const kickMember = await interaction.guild.members.fetch(kickUser.id);

        const logChannel = `998972825480212540`

        const logChan = interaction.guild.channels.cache.get(logChannel)


        if (!interaction.member.permissions.has("KICK_MEMBERS")) return interaction.reply({ content: "You do not have permission to execute this command!",  ephemeral: true})
        if (!kickMember) return await interaction.reply({ content: 'The user mentioned is no longer within the server.', ephemeral: true})
        if (!kickMember.kickable) return interaction.reply({ content: 'I cannot kick this user! This is either because their higher then me or yourself.', ephmeral: true})

        let reason = interaction.options.getString('reason');
        if (!reason) reason = "No reason was provided."

        const dmEmbed = new MessageEmbed()
        .setDescription(`You have been kicked from **${interaction.guild.name}** | ${reason}`)
        .setColor("BLUE")
        .setFooter(`Kicked From: ${interaction.guild.name}`)

        const embed = new MessageEmbed()
        .setDescription(`<a:Success:999006584862675025> ${kickUser.tag} has been **kicked**. | ${reason}`)
        .setColor("BLUE")
        .setFooter(`Kicked From Discord Coding Lounge`)

        const log = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("🚨 Member Kicked 🚨")
        .addFields(
            { name: '**Punished Member Tag:**', value: `${kickUser.tag}` },
            { name: '**Punished Member ID:**', value: `${kickUser.id}` },
            { name: '**Kicked By:**', value: `${interaction.user.tag}`, inline: true },
            { name: '**Detailed Kick Description:**', value: `${reason}`, inline: true },
        )
        .setFooter("Discord Coding Lounge | Moderation Team")

        await kickMember.send({ embeds: [dmEmbed] }).catch(err => {console.log('I cannot send DMS to this user!')})

        
        logChan.send({ embeds: [log] }).catch(err => {console.log('Error When Logging')})

        await kickMember.kick({ days: 7, reason: reason}).catch(err => {interaction.reply({content: 'There was an error!', ephemeral: true})})

        await interaction.reply({ embeds: [embed] }).catch(err => {console.log('Error')})
    },
}

// blakes fat + unloved