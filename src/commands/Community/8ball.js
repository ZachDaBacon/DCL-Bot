const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')
const { execute } = require('./test');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Ask the 8Ball a Question!')
    .addStringOption(option => option.setName('question').setDescription('Your Question for the 8ball.').setRequired(true)),
    async execute(interaction) {

              let question = interaction.options.getString('question');
        if (!question) reason = "No question was provided."

        const choice = ["It is certian.", "I belive so.", "Whithout a doubt.", "Yes definitely", "Err, i can not decide", "As i see it, i decide yes.", "Most Likley.", "I do Not belive so.", "Just get out 🤦‍♂️"];
        const ball = Math.round(Math.random() * choice.length);

         const killEmbed = new MessageEmbed()
    .setDescription(`**Question:** ${question} \n\n **Answer:** ${choice[ball]}`)
    .setColor("BLUE")
    .setTimestamp()
    .setFooter(`Asked By: ${interaction.user.username}`)
  await interaction.reply({ embeds: [killEmbed] }).catch(err => {interaction.channel.send('**ERROR ERROR**')});
    }
}