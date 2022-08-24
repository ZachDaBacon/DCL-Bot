const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');
const { execute } = require('../Community/test');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a member from the coding lounge')
    .addUserOption(option => option.setName('target').setDescription('The user you would like to ban').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('What is the reason you would like to ban the user? THIS MUST BE DETAILED').setRequired(true)),
    async execute(interaction, client) {
        const banUser = interaction.options.getUser('target');
        const banMember = await interaction.guild.members.fetch(banUser.id);

        const logChannel = `998972825480212540`

        const logChan = interaction.guild.channels.cache.get(logChannel)

        if (!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({ content: "You do not have permission to execute this command!",  ephemeral: true})
        if (!banMember) return await interaction.reply({ content: 'The user mentioned is no longer within the server.', ephemeral: true})
        if (!banMember.kickable) return interaction.reply({ content: 'I cannot ban this user! This is either because their higher then me or yourself.', ephmeral: true})

        let reason = interaction.options.getString('reason');
        if (!reason) reason = "No reason was provided."

        const dmEmbed = new MessageEmbed()
        .setDescription(`You have been banned from **${interaction.guild.name}** | ${reason}`)
        .setColor("BLUE")
        .setFooter(`Discord Coding Lounge | Moderation Team`)

        const embed = new MessageEmbed()
        .setDescription(`<a:Success:999006584862675025> ${banUser.tag} has been **banned**. | ${reason}`)
        .setColor("BLUE")
        .setFooter(`Discord Coding Lounge | Moderation Team`)

        const log = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("🚨 Member Banned 🚨")
        .addFields(
            { name: '**Punished Member Tag:**', value: `${banUser.tag}` },
            { name: '**Punished Member ID:**', value: `${banUser.id}` },
            { name: '**Banned By:**', value: `${interaction.user.tag}`, inline: true },
            { name: '**Detailed Ban Description:**', value: `${reason}`, inline: true },
        )
        .setFooter("Discord Coding Lounge | Moderation Team")
    

        await banMember.send({ embeds: [dmEmbed] }).catch(err => {console.log('I cannot send DMS to this user!')})

        logChan.send({ embeds: [log] }).catch(err => {console.log('Error When Logging')})

        await banMember.ban({ days: 7, reason: reason}).catch(err => {interaction.reply({content: 'There was an error!', ephemeral: true})})

        await interaction.reply({ embeds: [embed] }).catch(err => {console.log('Error')})
    },
}

// blakes fat + unloved