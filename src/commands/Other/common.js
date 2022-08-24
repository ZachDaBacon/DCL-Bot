const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton, MessageActionRow, CommandInteraction, MessageComponentInteraction, InteractionCollector, MessageCollector, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("common")
        .setDescription("Common Mistakes Within Discord Bot Coding"),
        async execute(interaction, client) {

        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle(`Discord Coding Lounge`)
        .addFields(
            { name: '**Many Terminals:**', value: `If you have many terminals open, your bot may spam when running commands. If your bot is doing this, please check how many terminals are open.` },
            { name: '**Do i need to restart my bot?**', value: `Simple answer, yes. Whenever you make a change to your bot, it is mandatory to restart it. Your change will not be live in the bot, until restarting the code.`, inline: true },
            { name: '**Why am I getting the RangeError [BitFieldInvalid]: Invalid bitfield flag or number: GUILDS?**', value: `This is because your file is running on Discord.js v14. This video works for Discord.js v13, so we recommend downgrading your file to discord.js v13. \n\n To do this, uninstall discord.js. Then, download djs v13 instead. After doing this, the bot will turn on. You can run \`/v14-13\`.`},
        )
        .setTimestamp()
        .setFooter(`Discord Coding Lounge | Common Coding Mistakes`)


        await interaction.reply({ embeds: [embed] }).catch(err => {interaction.reply('Error')});
    }
}