const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton, MessageActionRow, CommandInteraction, MessageComponentInteraction, InteractionCollector, MessageCollector, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("eval")
        .setDescription("Evaluate JavaScript code")
        .addStringOption(option => option.setName('code').setDescription('The code to evaluate').setRequired(true)),
        async execute(interaction, client) {
            const owners = [
                "642831885164216321" // bacon
              ]

            if(!owners.includes(interaction.user.id)) return interaction.reply(":warning: **ERROR:** You do not have permision to run this command, if you think this is a mistake please contact: `Zachary#1570`."); // Replace your id with defined variable

            try {
                const output = eval(interaction.options.getString("code"));

                const outputE = new MessageEmbed()
                .setColor(`#01142e`)
                .setTitle(`Output`)
                .setDescription(` \`\`\`js\n${output}\`\`\``)
                .setTimestamp()
                .setFooter(`Shadow | Eval Done By: ${interaction.user.username}`)


                return interaction.reply({
                    embeds: [outputE]
                })
            } catch(err) {

                const error = new MessageEmbed()
                .setColor(`#01142e`)
                .setTitle(`Error`)
                .setDescription(`\`\`\`${err.stack}\`\`\``)
                .setTimestamp()
                .setFooter(`Shadow | Eval Failed By: ${interaction.user.username}`)

                return interaction.reply({
                    embeds: [error]
                })
            }
    }
}