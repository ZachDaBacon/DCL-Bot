const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');
const canvafy = require("canvafy");
const moment = require('moment');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rip")
        .setDescription("RIP to a certain user 😭")
        .addUserOption(option => option.setName('target').setDescription('Tag the user to RIP').setRequired(true)),
        async execute(interaction, client, args) {

            const targetUser = interaction.options.getUser('target');
            const targetMember = await interaction.guild.members.fetch(targetUser.id);

            const welcome = await new canvafy.WelcomeLeave()
            .setAvatar(targetUser.displayAvatarURL({ format: "png" }))
            .setBackground("image", "https://imgur.com/moMApYy.jpg")
            .setTitle("RIP")
            .setDescription(`${targetUser.username}`)
            .setBorder("#FFFFFF")
            .setAvatarBorder("#FFFFFF")
            .setOverlayOpacity(0.3)
            .build();
          
            interaction.reply({
                content: `${targetUser.createdAt} - `,
              files: [{
                attachment: welcome.toBuffer(),
                name: `rip-${interaction.user.username}.png`
              }]
            });
        }
    }