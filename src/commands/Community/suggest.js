const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("suggest")
        .setDescription("Suggest something for the Discord Coding Lounge server"),
        async execute(interaction, client, args) {

            const embed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle("LMAO NO CHAT L BOZO")
            .setDescription(`This channel has been nuked, by ${interaction.user.username}.`)
            .setImage('https://c.tenor.com/Euvv3_nBtKoAAAAC/mr-bean.gif')
            .setTimestamp()
            .setFooter(`Nuked By: ${interaction.user.username}`)

            const log = new MessageEmbed()
            .setColor("BLUE")
            .setTitle("🚨 Channel Nuked 🚨")
            .addFields(
                { name: '**Nuked By:**', value: `${interaction.user.tag}` },
            )
            .setFooter("Discord Coding Lounge | Moderation Team")

            if (!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({ content: "You do not have permission to execute this command!",  ephemeral: true})
    
           await interaction.channel.clone({position: interaction.channel.rawPosition }).then(ch => { ch.send({ embeds: [embed] }); })
            interaction.channel.delete();

        }
    }