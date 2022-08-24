const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('poll')
    .setDescription(`Start a Poll`)
    .addStringOption(option => option.setName('question').setDescription('What is the question you would like to ask?').setRequired(true)),
    async execute(interaction, client, args) {

        let question = interaction.options.getString('question');
        if (!question) reason = "No question was provided."

              if (!interaction.member.permissions.has("MANAGE_SERVER")) return interaction.reply({ content: "You do not have permission to execute this command!",  ephemeral: true})


        const e1 = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(`Poll`)
        .setDescription(`There is a new poll. Please answer it below, as it will help ${interaction.guild.name}.`)
        .addField(`Question:`, `${question}`, true)
        .setTimestamp()
        .setFooter(`Poll Started By: ${interaction.user.id}`)

        const message = await interaction.reply({ embeds: [e1], fetchReply: true });
        message.react("✅");
        message.react("❌");
        message.react("🤔");
    }
}