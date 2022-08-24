const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Discord Coding Lounge | Server Info'),
    async execute(interaction, client) {

        const message = interaction;
		const guild = interaction.guild;
        const members = message.guild.members.cache;

		const embed = new MessageEmbed()
		.setTitle(`${message.guild.name} - Server Info`)
		.addField('Server Owner ID:', `\`${message.guild.ownerId}\``, true)
        // .addField('Server Owner', `\`${message.guild.owner.user.tag}\``, true)
        .addField('Server Created:', `\`${message.guild.createdAt.toLocaleString()}\``, true)
		.addField('Server ID:', `\`${guild.id}\``, true)
		.addField('Total Members:', `\`${guild.memberCount}\``, true)
		.addField('Total Humans:', `\`${message.guild.memberCount - guild.members.cache.filter(m => m.user.bot).size}\``, true)
		.addField('Total Bots:', `\`${message.guild.members.cache.filter(m => m.user.bot).size}\``, true)
		.setThumbnail(message.guild.iconURL({dynamic: true}))
		.setColor("BLUE")

		message.reply({embeds: [embed]})
    }
}