const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton, MessageActionRow, CommandInteraction, MessageComponentInteraction, InteractionCollector, MessageCollector, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("toes")
        .setDescription("Toes"),
        async execute(interaction, client) {

const dmEmbed = new MessageEmbed()
.setColor('BLUE')
.setTitle(`Get me your mother`)
.setImage('https://cdn3.emoji.gg/emojis/9637-joe-fight.png')
.setFooter('Tut Tut Tut..')

const embed = new MessageEmbed()
.setColor('BLUE')
.setDescription('<:hmmm:1000547272452481104>')
.setFooter(`Who do you think you are?`)

interaction.reply({ embeds: [embed] }).catch(err => {console.log("Error - Toes")})
interaction.user.send( {embeds: [dmEmbed] }).catch(err => {console.log("This user has their DMS off.")})
        }
    }